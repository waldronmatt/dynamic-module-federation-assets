(async () => {
  // environment context
  const environment = () => location.host.indexOf('localhost') > -1 ? 'localhost' : 'production';

  const getBasePath = environment() == 'localhost' ? './' : `${map[chunks.entrypoints[0]][/* environment */ environment()].href}`;

  const configs = [
    // environment context set by our build pipelines
    // './environment.config.json',

    // global reference of endpoints
    'https://cdn.jsdelivr.net/gh/waldronmatt/dynamic-module-federation-assets/dist/map.config.json',
    /*
      An array of entry points required for initializing this app and remotes
      Note: if this is a remote app, include 'remoteEntry' for 'entrypoint'
      so the host can point to it and grab the remotes
    */
    `${getBasePath}chunks.config.json`,
  ];

  // get the configuration files in parallel
  const [/* { environment }, */ map, chunks, ] = await Promise.all(
    configs.map(config => fetch(config).then(response => response.json()))
  );

  /*
    Reference our configuration files against the global window so that
    'DynamicPublicPathPlugin' can grab them when initialising our bundles
  */
  window.__ENVIRONMENT__ = /* environment */ environment();
  window.__MAP__ = map;

  // debugging
  console.log(`DEBUG LOGGING`);
  console.log(`Current Environment: '${/* environment */ environment()}'`);
  console.log(`Current Public Path: '${map[chunks.entrypoints[0]][/* environment */ environment()].href}'`);
  console.log(`List of local entry points to use: [${chunks.entrypoints}]`);
  console.log(`List of remote apps to use: [${chunks.remotes}]`);

  // get the javascript we need to initialise the application
  await Promise.all([
    // get entry points required for initializing this app
    ...chunks.entrypoints.map(chunk => {
      console.log(`Getting '${chunk}' entry point`);
      return fetch(`${getBasePath}${chunk}.js`).then(response => response.text());
    }),

    // get the remotes we're consuming
    ...chunks.remotes.map(chunk => {
      const { href } = map[chunk][/* environment */ environment()];
      console.log( `Remote '${chunk}' address for environment '${/* environment */ environment()}' is: ${href}/remoteEntry.js`);
      return fetch(`${href}/remoteEntry.js`).then(response => response.text());
    }),
  ])
    // inject code into the page to execute our host and remote code
    .then(scripts =>
      scripts.forEach(script => {
        const element = document.createElement('script');
        element.text = script;
        document.querySelector('body').appendChild(element);
      })
    );
})();

# Dynamic Module Federation Assets

Assets used by dynamic module federation repositories.

## Usage

**`index.html`**

```js
<script preload src="https://unpkg.com/regenerator-runtime@0.13.1/runtime.js"></script>
<script preload src='https://cdn.jsdelivr.net/gh/waldronmatt/dynamic-module-federation-assets/dist/bootstrap-entries.js'></script>
```

## Files

### map.config.json

A JSON object containing a global reference of host and remote URLs.

### bootstrap.entries.js

A pre-build script that serves local and remote entrypoints dynamically at runtime.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

MIT

# FoundryVTT Module/System Development Template 

This is a development template for FoundryVTT packages.
Features:

* Semi-automated `manifest.json` - Manifest.json is populated with data set in `foundryvtt.config.js`.
* Simplified pushing to github - includes tools for pushing the "dist/" folder to github.com
* Webpack compilation - Javascript, CSS & HTML files are compiled to a single minimized file.
* Automatic Symlink Creation - automatically creates a symlink to the "FoundryVTT/Data" folder with your package.
* Hot Module Replacement - when in watch mode, CSS & HTML update on save

## Installing
You can install template by cloning this repository
```
git clone https://github.com/hitcherland/foundryvtt-dev-template.git .
cd foundryvtt-dev-template
npm install
```

## Building

You can build your package with either

```
npm run build
```

or, for production

```
npm run build-prod
```

Files will appear in "dist/"

## Live Development Server

You can make use of the hot module replacement by running a FoundryVTT instance locally and running

```
npm run watch
```

You can then use `http://localhost:8080` to see many of your development changes live.

### Caveats

* You'll have to restart your `npm run watch` call if you add new files.
* You'll have to refresh your page if you want to see javascript changes affect existing objects.

## Releasing Versions

Make sure you update the `version` setting in `foundryvtt.config.js` appropriately. Then, run

```
npm run release
```

Which will publish a tagged version of your production build to your github repo.
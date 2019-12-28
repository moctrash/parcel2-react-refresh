## Testing React Refresh with Parcel 2

[Parcel 2 Alpha 3](https://github.com/parcel-bundler/parcel/blob/v2/packages/core/parcel/README.md) adds [an awesome feature](https://github.com/parcel-bundler/parcel/pull/3654) called React Refresh, which promises to allow you to reload changed React components during development without loosing their state.

This repo is an attempt to kick the tires and understand how it works. It was based off an example in [this tweet](https://twitter.com/devongovett/status/1195377210133106690).

### Repro steps
1. Run `yarn` to install all dependencies.
2. Run `yarn start`.
3. Change component state in the browser by clicking the "Increment" buttons.
4. Change the code of either `ChildComponent` or `App`.

If it works, the components will reload without blowing away the state changes from step #3. If it doesn't work, the whole page will refresh.

### Working config:
 If the files containing the components are named with the `.js` extension, and there is no `.tsconfig.json` file present, it works. (Sweet!). This configuration is in the `master` branch.

### Broken configs:
It doesn't appear to work in any of the following circumstances. In these cases, changes to the `ChildComponent` will cause a full page refresh (blowing away state)
 - If the files containing the components have a `.jsx` extension (see `broken-jsx` branch)
 - If a `tsconfig.json` file is present, including cases where:
   - the files are still `.js` (see `broken-js` branch).
   - the files are actually typescript (`.ts` or `.tsx`) (see `broken-ts` branch).

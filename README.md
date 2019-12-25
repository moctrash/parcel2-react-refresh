## Testing React Refresh with Parcel 2

[Parcel 2 Alpha 3](https://github.com/parcel-bundler/parcel/blob/v2/packages/core/parcel/README.md) adds [an awesome feature](https://github.com/parcel-bundler/parcel/pull/3654) called React Refresh, which promises to allow you to reload changed React components during development without loosing their state.

This repo is an attempt to kick the tires and understand how it works. It was based off an example in [this tweet](https://twitter.com/devongovett/status/1195377210133106690).

### Working config:
 If the files containing the components are named with the `.js` extension, and there is no `.tsconfig.json` file present, it works. (Sweet!)

### Broken configs:
It doesn't appear to work in any of the following circumstances. In these cases, changes to the `ChildComponent` will cause a full page refresh (blowing away state)
 - If the files containing the components have a `.jsx` extension
 - If a `tsconfig.json` file is present, including cases where:
   - the files are actually still `.js`
   - the files are actually typescript (`.ts` or `.tsx`)

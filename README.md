# vitest-react
Testing Vitest for React UT

## Tips
### 1. Set coverage
Vitest defines files to be covered with its default configurations in `exclude`, `include`, see [here](https://vitest.dev/config/#coverage-exclude)
```
include: **/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}
exclude:  **/node_modules/**, **/dist/**, **/cypress/**, **/.{idea,git,cache,output,temp}/**, **/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*
watch exclude:  **/node_modules/**, **/dist/**
```
This means it's just checking the coverage against tested files, and the files without `*.{test,spec}.*` get unnoticed.
Only when `all: true`[doc](https://vitest.dev/config/#coverage-all) is added in the configuration, we can see how many files do not have test cases

### 2. With TypeScript
Vitest provides a good way to integrate with [Vite](https://vitest.dev/guide/why.html#the-need-for-a-vite-native-test-runner)
It's also easy to use with TypeScript; we just need to add the type declaration on top of `vite.config.ts`:
```ts
/// <reference types="vitest" />
```
And this will resolve the error of "'test' does not exist in type 'UserConfigExport'."

### 3. Use [Vitest UI](https://vitest.dev/guide/ui.html)
A UI to view and interact with your tests, cli:
```
npx vitest --ui
```

### 4. Comparison with other testing runners
See [here](https://vitest.dev/guide/comparisons.html) for details

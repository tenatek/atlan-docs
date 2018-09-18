---
id: global-configuration
title: Global configuration
---

The `Atlan` constructor receives an optional `globalConfig` object that allows you to set global hooks, a global custom error handler, and a few more options.

Field | Description
- | -
`hooks` | Hooks that will be applied to all models that don't have their own `hooks` object.
`errorHandler` | An error handler that will be applied to all models that don't have their own `errorHandler`.
`parseRequestAsJson` | A boolean (default: `true`) that sets whether Atlan should parse requests as `application/json`. Uses [body-parser](https://github.com/expressjs/body-parser).
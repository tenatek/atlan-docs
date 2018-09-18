---
id: error-handling
title: Error handling
---

Anytime an error occurs in the middleware stack, Atlan will catch it and end the request with an error code. 

## Default error handling

Error message | Occurs when | Response code | Response data
- | - | - | -
`validation` | In a `PATCH` or `POST` request, the data sent doesn't comply with the schema | `400` | The paths within the data where the validation failed
Anything else | Any other time an error is thrown | `500` | None

## Custom error handling

To override this behavior for a specific model, write your own [ExpressJS error handler](https://expressjs.com/en/guide/error-handling.html) and include it within the `options` object of the model.

```javascript
let model = {
  schema: {
    // ...
  },
  hooks: {
    // ...
  },
  options: {
    errorHandler(err, req, res, next) {
      // your code
      // call next to let Atlan's default error handler handle everything you don't consider
      next();
    }
  }
}
```
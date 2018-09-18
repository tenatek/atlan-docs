---
id: hooks
title: Hooks
---

Hooks are ExpressJS middleware functions that run at specific moments of a request's lifecycle. 

Like any [ExpressJS middleware](https://expressjs.com/en/guide/using-middleware.html), they receive 3 parameters:

* the `req` object representing the request,
* the `res` object representing the response,
* `next`, a function that should be called in order to move on to the next middleware for that route.

Put your hooks in a `hooks` object in each model, alongside the schema. The `hooks` object should have the following structure with 3 nested levels:

`hooks` &rarr; route type &rarr; hook type &rarr; array of hooks

For example:

```javascript
let model = {
  schema: {
    // ...
  },
  hooks: {
    patch: {
      didWrite: [
        (req, res, next) => {
          // your code
          next();
        }
      ]
    }
  }
};
```

## Hook types

### `GET` routes (no ID provided)

For `GET` requests that potentially return more than one document, Atlan supports 2 types of hooks:

Hook type | Lifecycle stage | Relevant data
- | - | -
`willQuery` | Right before querying the database | None
`didQuery` | Right after querying the database | The retrieved resources are available in an array at `res.data`

Add these hooks under the route type `getMany`.

### `GET` routes (with ID)

For `GET` requests that specify the ID of the document to retrieve, Atlan supports 2 types of hooks:

Hook type | Lifecycle stage | Relevant data
- | - | -
`willQuery` | Right before querying the database | None
`didQuery` | Right after querying the database | The retrieved resources are available directly at `res.data`

Add these hooks under the route type `getOne`.

### `POST` routes

For `POST` requests, Atlan supports 3 types of hooks:

Hook type | Lifecycle stage | Relevant data
- | - | -
`willValidate` | Right before validating the resource against its schema | The resource is available at `req.body`
`didValidateWillWrite` | Right after validating the resource against its schema, and before writing to the database | The validated resource is available at `req.body`
`didWrite` | Right after writing to the database | The inserted document's ID is available at `res.data`

Add these hooks under the route type `post`.

### `PATCH` routes

For `PATCH` requests, Atlan supports 3 types of hooks:

Hook type | Lifecycle stage | Relevant data
- | - | -
`willValidate` | Right before validating the resource against its schema | The resource is available at `req.body`
`didValidateWillWrite` | Right after validating the resource against its schema, and before writing to the database | The validated resource is available at `req.body`
`didWrite` | Right after writing to the database | None

Add these hooks under the route type `patch`.

### `DELETE` routes

For `DELETE` requests, Atlan supports 2 types of hooks:

Hook type | Lifecycle stage | Relevant data
- | - | -
`willDelete` | Right before deleting | None
`didDelete` | Right after deleting | None

Add these hooks under the route type `delete`.

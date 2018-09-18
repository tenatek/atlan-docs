---
id: hooks
title: Hooks
---

Hooks are ExpressJS middleware functions that run at specific moments of a request's lifecycle. 

Like any ExpressJS middleware, they receive 3 parameters:

* the `req` object representing the request,
* the `res` object representing the response,
* `next`, a callback that should be called in order to move on to the next middleware for that route.



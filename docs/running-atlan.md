---
id: running-atlan
title: Running Atlan
---

To start your Atlan server, follow these steps:

1. Put your models together in a model dictionary.

   ```javascript
   let models = {
     city: {
       schema: { /* ... */ },
       hooks: { /* ... */ },
       options: { /* ... */ }
     },
     county: {
       schema: { /* ... */ },
       hooks: { /* ... */ },
       options: { /* ... */ }
     },
     state: {
       schema: { /* ... */ },
       hooks: { /* ... */ },
       options: { /* ... */ }
     }
   };
   ```

2. Create an `Atlan` instance with a [`Db` object](http://mongodb.github.io/node-mongodb-native/3.1/api/Db.html), a dictionary of your models, and an optional `globalConfig` object.

   ```javascript
   const Atlan = require('atlan');

   let atlan = new Atlan(database, models, globalConfig);
   ```

3. Get the ExpressJS router by using the `api()` method.

   ```javascript
   let api = atlan.api();
   ```

4. Plug it into your ExpressJS app.

   ```javascript
   app.use('/your-api-root-path', api);
   ```
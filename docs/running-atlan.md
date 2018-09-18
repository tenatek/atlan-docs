---
id: running-atlan
title: Running Atlan
---

To start your Atlan server, follow these steps:

1. Create an `Atlan` instance with a [`Db` object](http://mongodb.github.io/node-mongodb-native/3.1/api/Db.html), a dictionary of your models, and an optional `globalConfig` object.

   ```javascript
   const Atlan = require('atlan');

   let atlan = new Atlan(database, models, globalConfig);
   ```

2. Get the ExpressJS router by using the `api()` method.

   ```javascript
   let api = atlan.api();
   ```

3. Plug it into your ExpressJS app.

   ```javascript
   app.use('/your-api-root-path', api);
   ```
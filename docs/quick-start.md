---
id: quick-start
title: Quick start
---

## Declaring a JSON schema

```javascript
const city = {
  schema: {
    name: {
      type: 'string',
      required: true
    },
    population: {
      type: 'number',
      required: true
    },
    mayor: {
      type: 'string'
    },
    postCodes: {
      type: 'array',
      items: {
        type: 'number'
      }
    }
  }
};
```

## Creating a connection to a Mongo database

```javascript
const connection = await MongoClient.connect(mongoUrl);
```

## Starting the engine

```javascript
const cityApi = new Atlan(connection.db('geo'), { city }).api();
```

## Plugging into an Express app

```javascript
const express = require('express');
const app = express();

app.use('/api', cityApi);

app.listen(port);
```

## Voilá!

You can now make CRUD Web requests. For instance:

```http
POST /api/city

{
  "name": "Miami",
  "population": 453000,
  "postCodes": [
    33110,
    33109,
    33111
  ]
}
```

Will persist the data to the database and return a `201 Created` status code with the `_id` of the new document.

Then doing:

```http
GET /api/city?population_gt=400000
```

Will return a `200 OK` code along with the data:

```json
[
  {
    "_id": "5abf5e3b3efd1720595cc82f",
    "name": "Miami",
    "population": 453000,
    "postCodes": [
      33110,
      33109,
      33111
    ]
  }
]
```

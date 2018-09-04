---
id: quick-start
title: Quick start
---

## Declaring a JSON schema

```javascript
const jedi = {
  schema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        required: true
      },
      lightsaberColor: {
        type: 'string',
        required: true
      },
      killedByAnakin: {
        type: 'boolean'
      },
      battlesFought: {
        type: 'array',
        items: {
          type: 'string'
        }
      }
    }
  }
};
```

## Creating a connection to a MongoDB database

```javascript
const connection = await MongoClient.connect(mongoUrl);
```

## Starting the engine

```javascript
const jediApi = atlan(connection.db('sw'), { jedi });
```

## Plugging into an Express app

```javascript
const express = require('express');
const app = express();

app.use('/api', jediApi);

app.listen(port);
```

## Voilá!

You can now make CRUD Web requests. For instance:

```http
POST /api/jedi

{
  "name": "Windu",
  "lightsaberColor": "purple",
  "killedByAnakin": true,
  "battlesFought": [
    "Naboo Crisis",
    "Clone Wars"
  ]
}
```

Will persist the data to the database and return a `201 Created` status code with the `_id` of the new document.

Then doing:

```http
GET /api/jedi?killedByAnakin=true
```

Will return a `200 OK` code along with the data:

```json
[
  {
    "_id": "5abf5e3b3efd1720595cc82f",
    "name": "Windu",
    "lightsaberColor": "purple",
    "killedByAnakin": true,
    "battlesFought": [
      "Naboo Crisis",
      "Clone Wars"
    ]
  }
]
```

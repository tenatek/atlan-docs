---
id: deleting-data
title: Deleting data
---

To delete a resource, use the `DELETE` HTTP verb. Use the following route:

```javascript
apiRootUrl + '/' + modelName + '/' + resourceId
```

There shouldn't be a request body.

For instance, if you have the following schema:

```javascript
let stateSchema = {
  name: {
    type: 'string'
  },
  population: {
    type: 'number'
  }
}
```

And the following document is already in the database:

```json
{
  "_id": "5abf5e3b3efd1720595cc82f",
  "name": "Florida",
  "population": 21000000
}
```

To delete the document, you just need to do:

```http
DELETE /api/state/5abf5e3b3efd1720595cc82f

{
  "name": "Florida"
}
```

If the request is successful, you'll receive a `200` response code.
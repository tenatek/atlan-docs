---
id: updating-data
title: Updating data
---

To update a resource, use the `PATCH` HTTP verb. Use the following route:

```javascript
apiRootUrl + '/' + modelName + '/' + resourceId
```

Just send a JSON object compliant with the resource's schema, in the body of your request. 

> For `PATCH` requests, you only need to set the fields that you want to update, even though other fields may be required.

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
  "name": "Florda",
  "population": 21000000
}
```

To correct the typo, you just need to do:

```http
PATCH /api/state/5abf5e3b3efd1720595cc82f

{
  "name": "Florida"
}
```

If the request is successful, you'll receive a `200` response code.
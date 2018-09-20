---
id: creating-data
title: Creating data
---

To create a resource, use the `POST` HTTP verb. Use the following route:

```javascript
apiRootUrl + '/' + modelName
```

Just send a JSON object compliant with the resource's schema, in the body of your request.

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

To create a new state, you would do:

```http
POST /api/state

{
  "name": "Florida",
  "population": 21000000
}
```

If the request is successful, you'll receive a `201` response code with the ID of the newly created document.
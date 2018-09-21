---
id: retrieving-data
title: Retrieving data
---

You can either retrieve one resource by specifying its ID, or you can use a query and obtain all the documents that match. In either case, you use the `GET` HTTP verb.

## Retrieving one resource

To retrieve one specific resource, use the following route:

```javascript
apiRootUrl + '/' + modelName + '/' + resourceId
```

For instance, if you have the following schema:

```javascript
let stateSchema = {
  name: {
    type: 'string'
  },
  population: {
    type: 'number'
  },
  capital: {
    type: 'ref',
    ref: 'city'
  }
}
```

And the following documents are already in the database:

```json
{
  "_id": "5abf5e3b3efd1720595cc82f",
  "name": "Florida",
  "population": 21000000,
  "capital": "5ba1a130b8da1adb750b8599"
},
{
  "_id": "5abe33597d745c1992804194",
  "name": "Montana",
  "population": 1000000,
  "capital": "5ba1a145b8da1adb750b859a"
},
{
  "_id": "5afddf517195746608d181c5",
  "name": "California",
  "population": 40000000,
  "capital": "5ba1a14bb8da1adb750b859b"
}
```

To retrieve the state of Florida, you just need to do:

```http
GET /api/state/5abf5e3b3efd1720595cc82f
```

If the request is successful, you'll receive a `200` response code along with the document as a JSON object in the response body.

## Retrieving many resources

To retrieve many resources, use the following route:

```javascript
apiRootUrl + '/' + modelName + '?' queryParam1 + '=' + value1 + '&' + queryParam2 + '=' + value2 ...
```

For example, if you wanted to retrieve every state, you would just do:

```http
GET /api/state
```

If the request is successful, you'll receive a `200` response code along with an array of documents as JSON objects.

### Query parameters

Atlan supports a number of query parameters that allow you to leverage Mongo's query capabilities:

Query parameter | Value | Description
- | - | -
A field name | The expected value of the field | Retrieves only documents that match the expected value for that field
A field name + `_gt` | A number | Retrieves only documents that have a greater numeric value for that field
A field name + `_gte` | A number | Retrieves only documents that have a greater or equal numeric value for that field
A field name + `_lt` | A number | Retrieves only documents that have a lower numeric value for that field
A field name + `_lte` | A number | Retrieves only documents that have a lower or equal numeric value for that field
A field name + `_ne` | A number | Retrieves only documents that have a different numeric value for that field
`_order` | A field name | Sorts documents based on the values of the field, in ascending order
`_sort` | `desc` | Sorts documents in descending order

Let's say you want to retrieve every state that has a population greater than 20 million. You would do:

```http
GET /api/state?population_gt=20000000
```

## Data population

To populate references, just add the query parameter `_populate` with the name of the model that the reference to populate pertains to. You can add that parameter various times to populate various models.

This works both when retrieving one resource, and many resources. 

Let's say that you want to populate the `capital` field of the state of Florida. Since the `capital` field is a reference to a `city` resource, you would do:

```http
GET /api/state/5abf5e3b3efd1720595cc82f?_populate=city
```

And you would obtain something like:

```json
{
  "_id": "5abf5e3b3efd1720595cc82f",
  "name": "Florida",
  "population": 21000000,
  "capital": {
    "_id": "5ba1a130b8da1adb750b8599",
    "name": "Tallahassee",
    "population": 191000
  }
}
```
---
id: retrieving-data
title: Retrieving data
---

## Retrieving one resource

To retrieve one specific resource, use the `GET` HTTP verb. The route you should use is `/:your-model-name/:your-resource-id`.

If the request is successful, you'll receive the resource as JSON.

## Retrieving many resources

To retrieve many resources, use the `GET` HTTP verb. The route you should use is `/:your-model-name`.

If the request is successful, you'll receive the resources as an array of JSON objects.

### Query parameters

Atlan support query parameters that allow you to leverage MongoDB's query capabilities.

Query parameter | Value | Description
- | - | -
The name of a field | The expected value of the field | Retrieves only documents that match the expected value for that field
The name of a field + `_gt` | A number | Retrieves only documents that have a greater numeric value for that field
The name of a field + `_gte` | A number | Retrieves only documents that have a greater or equal numeric value for that field
The name of a field + `_lt` | A number | Retrieves only documents that have a lower numeric value for that field
The name of a field + `_lte` | A number | Retrieves only documents that have a lower or equal numeric value for that field
The name of a field + `_ne` | A number | Retrieves only documents that have a different numeric value for that field
`_order` | The name of a field | Sorts documents based on the values of the field, in ascending order
`_sort` | `desc` | Sorts documents in descending order

## Data population

To populate references, just add the query parameter `_populate` with the name of the model that the reference to populate pertains to. You can add that parameter various times to populate various models.

This works when retrieving one resource and many resources. 
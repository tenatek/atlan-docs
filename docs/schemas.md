---
id: schemas
title: Schemas
---

Schemas define how resources pertaining to a model should be structured. Atlan will use those schemas to automatically validate create/update operations.

Schemas in Atlan are loosely based on the [JSON schema specification](http://json-schema.org/) of the IETF. Atlan uses [Aniame](https://github.com/tenatek/aniame) to validate resources based on their schemas.

## Descriptors

Atlan schemas make use of small, nestable objects called __descriptors__. For example, the following object:

```javascript
{
  name: 'Seattle'
}
```

Is described by the following schema:

```javascript
{
  name: {
    type: 'string'
  }
}
```

Where:

```javascript
{
  type: 'string'
}
```

Is a __descriptor__.

__Descriptors__ are JSON objects that have the following properties:

* a required `type` property (either `string`, `number`, `boolean`, `object`, `array` or `ref`),
* other required properties depending on the `type`,
* an optional `required` property (must be a boolean),
* any other property that you may want to add.

> MongoDB documents can only be JSON objects. Therefore, you don't need to wrap your schemas in a `type: 'object'` descriptor. Doing the following would be incorrect:
>```javascript
> let schema = {
>   type: 'object',
>   properties: {
>     name: {
>       type: 'string'
>     }
>   }
> }
>```
>Instead, you just write:
>```javascript
> let schema = {
>   name: {
>     type: 'string'
>   }
> }
>```

## Resource types

### Objects

`type: 'object'` is used to indicate that the resource should be a JSON object. 

The descriptor must include a `properties` field to describe what the object should contain.

```javascript
let citySchema = {
  name: {
    type: 'string'
  },
  geolocation: {
    latitude: {
      type: 'number',
      required: true
    },
    longitude: {
      type: 'number',
      required: true
    }
  }
}
```

The following object is valid under the above schema.

```javascript
{
  name: 'Fairbanks',
  geolocation: {
    latitude: 64.830624,
    longitude: -147.731613
  }
}
```

### Arrays

`type: 'array'` is used to indicate that the resource should be an array. 

The descriptor must include an `items` field, whose value is itself the descriptor of the items of the array.

```javascript
let citySchema = {
  name: {
    type: 'string'
  },
  nicknames: {
    type: 'array',
    items: {
      type: 'string'
    }
  }
}
```

The following object is valid under the above schema.

```javascript
{
  name: 'New York City',
  nicknames: ['The Big Apple', 'The City That Never Sleeps']
}
```

### References

> With MongoDB, you can can include, within a document, a reference to another document (either in the same collection or somewhere else). You do that by inserting the referenced document's `ObjectId` into a field within the referencing document.

`type: 'ref'` is used to indicate that the resource should be a reference.

The descriptor must include a `ref` field, which will hold the name of the model that the referenced resource pertains to.

```javascript
let stateSchema = {
  name: {
    type: 'string'
  },
  counties: {
    type: 'array',
    items: {
      type: 'ref',
      ref: 'county'
    }
  }
}
```

The following object is valid under the above schema.

```javascript
{
  name: 'Florida',
  counties: [
    // each of these strings is the ObjectId of a document in the "county" collection
    '5abe33597d745c1992804194', 
    '5afddf517195746608d181c5'
  ]
}
```
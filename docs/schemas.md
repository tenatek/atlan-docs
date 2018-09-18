---
id: schemas
title: Schemas
---

Schemas define how resources pertaining to a model should be structured. Atlan will use those schemas to automatically validate create/update operations.

## Schema specification

Schemas in Atlan are loosely based on the [JSON schema specification](http://json-schema.org/) of the IETF. Atlan uses [Aniame](https://github.com/tenatek/aniame) to validate resources based on their schemas.

Atlan schemas make use of small, nestable objects called __descriptors__. For example, the following object:

```javascript
{
  name: 'Seattle'
}
```

Is described by the following schema:

```javascript
{
  type: 'object',
  properties: {
    name: {
      type: 'string'
    }
  }
}
```

Where both:

```javascript
{
  type: 'object',
  properties: ...
}
```

And:

```javascript
{
  type: 'string'
}
```

Are _descriptors_.

_Descriptors_ are JSON objects that have the following properties:

* a required `type` property (either `string`, `number`, `boolean`, `object`, `array` or `ref`).
* other required properties depending on the `type`.
* an optional `required` property (must be a boolean).
* any other property that you may want to add.

> In MongoDB, documents can only be field/value objects. Therefore, it is not necessary to nest the top-level properties in a `type: 'object'`

### Objects

`type: 'object'`

Used to indicate that the resource should be a JSON object. 

With `object`s, the _descriptor_ must contain the `properties` property to describe what the object should contain. `properties`'s value should be an object containing the _descriptors_ of each expected property on the resource.

```javascript
{
  type: 'object',
  properties: {
    name: {
      type: 'string',
      required: true
    },
    population: {
      type: 'number'
    },
    state: {
      type: 'string'
    }
  }
}
```

The following object is valid under the above schema.

```javascript
{
  city: {
    street: 'Evergreen Terrace',
    number: 742
  }
}
```

### Arrays

`type: 'array'`

Used to indicate that the resource should be an array. 

With `array`s, the _descriptor_ must contain the `items` property, whose value is itself the _descriptor_ of the items of the array.

```javascript
{
  type: 'object',
  properties: {
    nicknames: {
      type: 'array',
      required: false,
      items: {
        type: 'string'
      }
    }
  }
}
```

The following object is valid under the above schema.

```javascript
{
  nicknames: ['Bart', 'El Barto']
}
```

### References

`type: 'ref'`

Used to indicate that the expected value is either:

* an object representing a new resource. The new resource will be validated, stored in the database, and replaced with its MongoDB `ObjectID` in the parent resource.
* the MongoDB `ObjectID` of another, existing resource.

With `type: 'ref'`, the __descriptor__ must contain the `ref` key, whose value is a string, the name of the model that the referenced resource pertains to.

```javascript
{
  type: 'object',
  properties: {
    father: {
      type: 'ref',
      ref: 'person'
    },
    pets: {
      type: 'array',
      items: {
        type: 'ref',
        ref: 'animal'
      }
    }
  }
}
```

The following object is valid under the above schema.

```javascript
{
  father: {
    // the full 'person' object
  },
  // alternatively, database IDs, or anything else
  pets: ['5abe33597d745c1992804194', '5afddf517195746608d181c5']
}
```
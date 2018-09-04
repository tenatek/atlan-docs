---
id: schemas
title: Schemas
---

Schemas are a key part of any data model. They are here to define how resources pertaining to a model should be structured. Atlan will use those schemas to automatically validate create/update operations.

## Schema specification

Schemas in Atlan are loosely based on the [JSON schema specification](http://json-schema.org/) of the IETF. Atlan uses [Aniame](https://github.com/tenatek/aniame) to validate resources based on their schemas.

Atlan schemas make use of small, nestable objects called __descriptors__. For example, the following object:

```javascript
{
  name: 'Yoda'
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

Are __descriptors__.

__Descriptors__ are JSON objects that have the following keys:

* a `type` key (either `string`, `number`, `boolean`, `object`, `array` or `ref`).
* an optional `description` key, which, if present, must be a string.
* an optional `required` key (`true` or `false`).
* other keys depending on the `type`.

### Objects

`type: 'object'`

Used to indicate that the expected value is a JSON object. 

With `object`s, the __descriptor__ must contain the `properties` key to describe what the object should contain. `properties`'s value should be an object with the expected keys, and, for each key, a __descriptor__ of the key's expected value.

```javascript
{
  type: 'object',
  properties: {
    species: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          required: true
        },
        homeWorld: {
          type: 'string'
        },
        population: {
          type: 'number'
        }
      }
    }
  }
}
```

The following object is valid under the above schema.

```javascript
{
  species: {
    name: 'Ewok',
    homeWorld: 'Forest moon of Endor'
    population: 1200
  }
}
```

### Arrays

`type: 'array'`

Used to indicate that the expected value is an array. 

With `array`s, the __descriptor__ must contain the `items` key, whose value is itself the __descriptor__ of the items of the array.

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
  nicknames: ['Ani', 'The Chosen One', 'Darth Vader']
}
```

### References

`type: 'ref'`

Used to indicate that the expected value is either:

- an object representing a new resource pertaining to this model, or another model. The new resource will be validated, stored in the database, and replaced with its MongoDB `ObjectID` in the parent resource.
- the MongoDB `ObjectID` of an existing resource pertaining to this model, or another model.

With `type: 'ref'`, the __descriptor__ must contain the `ref` key, whose value is a string, the name of the model that the referenced resource pertains to.

```javascript
{
  type: 'object',
  properties: {
    master: {
      type: 'ref',
      indexAs: 'ref',
      ref: 'jedi'
    },
    padawans: {
      type: 'array',
      items: {
        type: 'ref',
        indexAs: 'ref',
        ref: 'jedi'
      }
    }
  }
}
```

The following object is valid under the above schema.

```javascript
{
  master: {
    // a new 'jedi' resource, compliant with the 'jedi' schema
  },
  // alternatively, the MongoDB ObjectIDs of the referenced resources
  padawans: ['5abe33597d745c1992804194', '5afddf517195746608d181c5']
}
```

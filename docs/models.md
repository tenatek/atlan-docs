---
id: models
title: Models
---

Atlan's purpose is to automate the creation of **REST** APIs. Atlan mounts a server that allows end users to perform four basic operations on your database: creating, retrieving, updating and deleting resources. 

The first step in creating an API with Atlan is to identify and describe the __resources__ that your end users will manipulate. To do that, we create __models__.

> For example, in an application that keeps track of geographical locations across the U.S., you could have a `city` model and a `county` model.

## Model specification

With Atlan, each model is a JSON object that contains the following properties:

* a `schema`, which describes how a resource should be structured,

  > For example, you could decide that every `city` resource should include the `city`'s name as a string and the `city`'s population as a number. Optionally, the resource could hold references to the `county` resource to which it pertains.

* some `hooks`, which allow you to extend the basic CRUD functionality that Atlan sets up for you,

  > This is useful for many things. You could, for example, check authentication before allowing a CRUD operation to proceed. Or, you could automatically inject a `creationDate` in the resource before it is saved to the database.

  > Each create/update operation is validated against the model's `schema`, so this is not something that you should worry about when defining hooks.

* an `options` object.

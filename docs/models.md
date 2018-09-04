---
id: models
title: Models
---

Atlan's purpose is to automate the creation of **REST** APIs. This means that Atlan will bootstrap a system that allows end users to perform four basic operations: creating, retrieving, updating and deleting Web resources (CRUD). 

Therefore, the first step in creating an API with Atlan is to identify and describe the __resources__ that you want to expose to your end users. To do that, we create __models__.

> For example, in an application that keeps track of your favorite science fiction characters, you could have a `jedi` model and a `sith` model.

## Model specification

With Atlan, each model is a JSON object that contains the following properties:

- a `schema`, which describes how a resource should be structured.

  > For example, you could decide that every `jedi` resource should include the `jedi`'s name and a boolean indicating whether this `jedi` has been killed by Anakin. Optionally, the resource could hold references to the `sith` resources representing the characters that this `jedi` has defeated.

- some `hooks`, which allow you to extend the basic CRUD functionality that Atlan sets up for you.

  > This is useful for many things. You could, for example, check authentication before allowing a CRUD operation to proceed. Or, you could automatically inject a `creationDate` in the data before it is saved to the database.

  > Each create/update operation is validated against the model's `schema`, so this is not something that you should worry about when defining hooks.

- an `errorHandler`, used to define how your API should respond to the end user in case something goes wrong.

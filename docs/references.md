---
id: references
title: References
---

With MongoDB, you can can include, within a document, a reference to another document (either in the same collection or somewhere else). You do that by inserting the referenced document's `ObjectId` into a field in the referencing document.

Atlan has built-in support for that. By specifying `type: ref` on a field in your schema, you tell Atlan that this field will hold a reference. You should also indicate
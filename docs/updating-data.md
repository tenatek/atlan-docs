---
id: updating-data
title: Updating data
---

To update a resource server-side, use the `PATCH` HTTP verb. The route you should use is `/:your-model-name/:your-resource-id`.

Just send a JSON object compliant with the model's schema, in the body of your request. Only set the fields that you want to update.

If the request is successful, you'll receive a `200` response code.
---
id: creating-data
title: Creating data
---

To create a resource server-side, use the `POST` HTTP verb. The route you should use is `/:your-model-name`.

Just send a JSON object compliant with the model's schema, in the body of your request.

If the request is successful, you'll receive a `201` response code.
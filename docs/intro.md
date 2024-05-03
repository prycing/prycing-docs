---
sidebar_position: 1
---

# Authentication

Authentication via Prycing is quite easy. Just head over to you settings and use the "API tokens" section.

![Token](/img/auth_token.png)

## Give it a name
This is the most important part, just think of a name

## Use the token, make a test call to the main page
Copy the token as a Bearer token and call the `/api/v1` route, this will result in the following response:

```json
{
    "name": "Example shop",
    "domain": "examplesite.com",
    "additional_domains": "",
    "excluded_domains": [
        "examplesite.com"
    ]
}
```

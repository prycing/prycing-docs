# Competitors

In these docs, you will find information about the competitors API.

## `GET`: Getting all competitor statistics

### Example request

```http request
GET /api/v1/competitors
```

### Example response

```http request
HTTP/1.1 200 OK
Content-Type: application/json

{
    "company_id": "example",
    "domain": "example",
    "overlapping_products": "example
}
```

## `GET`: Getting a product from competitors

### Example request

```http request
GET /api/v1/competitors/product/{ean}
```

### Example response

```http request
HTTP/1.1 200 OK
Content-Type: application/json

{
    "ean": "example",
    "name": "example",
    "price_records": {
        "competitor domain": "example price"
    }
}
```

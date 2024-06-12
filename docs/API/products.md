# Products api

In these docs, you will find information about the products API.

## `POST`: Creating a product

### Example request

```http request
POST /api/products
Content-Type: application/json

{
    "ean": "example",
    "name": "example",
    "price": "example",
    "special_price": "example",
    "company_id": "example",
    "image_url": "example",
    "url": "example",
    "brand": "example",
    "mpn": "example",
    "special_price_from": "example",
    "special_price_to": "example",
    "cost_price": "example",
    "crawl_frequency": "1d",
    "repricer_min": "example",
    "repricer_max": "example",
}
```

crawl_frequency can be "1d", "2d", "3d", "4d", "5d", "6d", "7d", "14d", "28d"

### Example response

```http request
HTTP/1.1 200 OK
Content-Type: application/json

{ProductModel}
```

## `GET`: Getting a product

### Example request

```http request
GET /api/products/{ean}
```

### Example response

```http request
HTTP/1.1 200 OK
Content-Type: application/json

{ProductModel}
```

## `DELETE`: Deleting a product

### Example request

```http request
DELETE /api/products/{ean}
```

### Example response

```http request
HTTP/1.1 200 OK
Content-Type: application/json

{
  "message": "Product deleted"
}
```

## `PATCH`: Updating a product

### Example request

```http request
PATCH /api/products/{ean}

{
    "ean": "example",
    "name": "example",
    "price": "example",
    "special_price": "example",
    "company_id": "example"
}
```

### Example response

```http request
HTTP/1.1 200 OK
Content-Type: application/json

{ProductModel}
```

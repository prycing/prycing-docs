---
sidebar_position: 1
---

# Example Feed Data

## Overview

This section provides information about the example feed. This feed contains sample product data that can be used for testing and integration purposes.

## Feed Structure

The example feed contains the following product information:

- EAN (European Article Number)
- Product Name
- Product URL
- Image URL
- Availability Status
- Price (in EUR)
- Brand
- Cost price excl
- Crawl Frequency

## Sample Data

Here's an example of the data structure from the feed:

```xml
<product>
    <ean>0088381775304</ean>
    <name>LXT 18 V Snoeizaag 10 cm</name>
    <url>https://www.makita.nl/artikel/makita-duc101sf-lxt-18-v-snoeizaag-10-cm.html</url>
    <image>https://nl.makitamedia.com/afbeeldingen/100_Makita/102_machines/102_1_product/JPG_product/DUC101SF_C1L0_s100.jpg</image>
    <availability>in stock</availability>
    <price>275.00</price>
    <brand>Makita</brand>
    <cost_price_excl>200</cost_price_excl>
    <crawl_frequency>7d</crawl_frequency>

    // It's also possible to add custom attributes like below:
    <is_new>1</is_new>
</product>
```

## Notes

- The feed is updated periodically
- All prices are in EUR
- Stock levels and availability may change
- The feed contains a mix of product categories
- Crawl frequency values can be: "1d", "2d", "3d", "4d", "5d", "6d", "7d", "14d", "28d" 
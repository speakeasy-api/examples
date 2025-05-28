# Magazine

Represents a magazine in the store

## Example Usage

```typescript
import { Magazine } from "sdk";

let value: Magazine = {
  id: "123e4567-e89b-12d3-a456-426614174000",
  title: "Spring Boot in Action",
  publishDate: "2023-06-15T00:00:00Z",
  price: 39.99,
  issueNumber: 42,
  publisher: "National Geographic Society",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `id`                                             | *string*                                         | :heavy_minus_sign:                               | Unique identifier of the publication             | 123e4567-e89b-12d3-a456-426614174000             |
| `title`                                          | *string*                                         | :heavy_minus_sign:                               | Title of the publication                         | Spring Boot in Action                            |
| `publishDate`                                    | *string*                                         | :heavy_minus_sign:                               | Publication date                                 | 2023-06-15 00:00:00 +0000 UTC                    |
| `price`                                          | *number*                                         | :heavy_minus_sign:                               | Price in USD                                     | 39.99                                            |
| `type`                                           | [models.MagazineType](../models/magazinetype.md) | :heavy_minus_sign:                               | Type of the publication                          | Magazine                                         |
| `issueNumber`                                    | *number*                                         | :heavy_minus_sign:                               | Issue number of the magazine                     | 42                                               |
| `publisher`                                      | *string*                                         | :heavy_minus_sign:                               | Publisher of the magazine                        | National Geographic Society                      |
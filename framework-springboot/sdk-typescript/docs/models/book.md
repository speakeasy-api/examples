# Book

Represents a book in the store

## Example Usage

```typescript
import { Book } from "sdk";

let value: Book = {
  id: "123e4567-e89b-12d3-a456-426614174000",
  title: "Spring Boot in Action",
  publishDate: "2023-06-15T00:00:00Z",
  price: 39.99,
  author: "Craig Walls",
  isbn: "978-1617292545",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `id`                                     | *string*                                 | :heavy_minus_sign:                       | Unique identifier of the publication     | 123e4567-e89b-12d3-a456-426614174000     |
| `title`                                  | *string*                                 | :heavy_minus_sign:                       | Title of the publication                 | Spring Boot in Action                    |
| `publishDate`                            | *string*                                 | :heavy_minus_sign:                       | Publication date                         | 2023-06-15 00:00:00 +0000 UTC            |
| `price`                                  | *number*                                 | :heavy_minus_sign:                       | Price in USD                             | 39.99                                    |
| `type`                                   | [models.BookType](../models/booktype.md) | :heavy_minus_sign:                       | Type of the publication                  | Book                                     |
| `author`                                 | *string*                                 | :heavy_minus_sign:                       | Author of the book                       | Craig Walls                              |
| `isbn`                                   | *string*                                 | :heavy_minus_sign:                       | ISBN of the book                         | 978-1617292545                           |
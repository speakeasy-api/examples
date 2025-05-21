# Issue

## Example Usage

```typescript
import { Issue } from "sdk";

let value: Issue = {
  code: "<value>",
  path: [
    "/home/user/dir",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `code`             | *string*           | :heavy_check_mark: | N/A                |
| `path`             | *models.Path*[]    | :heavy_check_mark: | N/A                |
| `message`          | *string*           | :heavy_minus_sign: | N/A                |
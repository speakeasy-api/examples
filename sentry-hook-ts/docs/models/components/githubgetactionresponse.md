# GithubGetActionResponse

response to a getting the latest action run on a GitHub request

## Example Usage

```typescript
import { GithubGetActionResponse } from "speakeasy/models/components";

let value: GithubGetActionResponse = {};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `runUrl`                                         | *string*                                         | :heavy_minus_sign:                               | The URL for latest action run if available       |
| `runStatus`                                      | *string*                                         | :heavy_minus_sign:                               | The status of the latest action run if available |
# GithubConfigureCodeSamplesRequest

A request to configure GitHub code samples

## Example Usage

```typescript
import { GithubConfigureCodeSamplesRequest } from "speakeasy/models/components";

let value: GithubConfigureCodeSamplesRequest = {
  org: "<value>",
  repo: "<value>",
  targetName: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `org`                                | *string*                             | :heavy_check_mark:                   | The GitHub organization name         |
| `repo`                               | *string*                             | :heavy_check_mark:                   | The GitHub repository name           |
| `targetName`                         | *string*                             | :heavy_check_mark:                   | The target name for the code samples |
# GithubPublishingPRResponse

Open generation PRs pending publishing

## Example Usage

```typescript
import { GithubPublishingPRResponse } from "speakeasy/models/components";

let value: GithubPublishingPRResponse = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `pullRequest`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `pendingVersion`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `pullRequestMetadata`                                                            | [components.PullRequestMetadata](../../models/components/pullrequestmetadata.md) | :heavy_minus_sign:                                                               | This can only be populated when the github app is installed for a repo           |
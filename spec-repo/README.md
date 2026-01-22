# Spec repo with downstream SDK generation

This example demonstrates a "spec repo" workflow where a central repository holds OpenAPI specs, and changes trigger SDK generation in separate downstream SDK repositories.

## Repositories

| Repository | Description |
|------------|-------------|
| [examples-downstream-spec-repo](https://github.com/speakeasy-api/examples-downstream-spec-repo) | Central spec repository with OpenAPI spec and trigger workflows |
| [examples-downstream-spec-sdk-typescript](https://github.com/speakeasy-api/examples-downstream-spec-sdk-typescript) | TypeScript SDK generated from the spec repo |
| [examples-downstream-spec-sdk-python](https://github.com/speakeasy-api/examples-downstream-spec-sdk-python) | Python SDK generated from the spec repo |

## How it works

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           Spec Repository                               │
│  ┌─────────────┐    ┌─────────────────────────────────────────────┐    │
│  │ OpenAPI     │    │ GitHub Actions Workflow                     │    │
│  │ Spec        │───▶│ 1. Runs `speakeasy run` to tag spec         │    │
│  │ (PR change) │    │ 2. Triggers downstream SDK workflows        │    │
│  └─────────────┘    │ 3. Updates PR comment with status           │    │
│                     └─────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────┘
                                   │
                                   │ gh workflow run
                                   ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                        Downstream SDK Repos                             │
│  ┌──────────────────────────┐    ┌──────────────────────────┐          │
│  │ TypeScript SDK           │    │ Python SDK               │          │
│  │ - Pulls tagged spec      │    │ - Pulls tagged spec      │          │
│  │ - Generates SDK          │    │ - Generates SDK          │          │
│  │ - Creates PR             │    │ - Creates PR             │          │
│  └──────────────────────────┘    └──────────────────────────┘          │
└─────────────────────────────────────────────────────────────────────────┘
```

## Workflow

1. Create a PR in the spec repository with changes to the OpenAPI spec
2. The workflow runs `speakeasy run` to tag the spec in the registry
3. Downstream SDK workflows are triggered via `gh workflow run`
4. The spec PR is updated with comments showing generation status and links to SDK PRs
5. When the spec PR is merged, downstream SDK PRs are automatically merged
6. When the spec PR is closed without merging, downstream SDK PRs are automatically closed

## Documentation

See the [Publish specs to API Registry](/docs/sdks/guides/publish-specs-to-api-registry) guide for detailed setup instructions.

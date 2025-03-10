# Contributing

This repository is a monorepo of examples created using the Speakeasy platform. To contribute, please follow these steps:

1. Make sure you have a workspace on [Speakeasy](https://app.speakeasy.com/).
2. Please use the `speakeasy quickstart` command to bootstrap new folders.
3. Folder naming `{feature}-{subfeature}-{language}`.
4. Every folder must be runnable with `speakeasy run`.
5. Please augment the generated `README.md` with information on the example.
   1. What is it showcasing?
   2. How does it work?
   3. What are the pre-requisites?
   4. Is there anything out of the ordinary to get started with this example?
6. We reccomend adding the openapi spec used for the example in the example folder with the name `openapi.yaml`. If your example is setup using a remote specification consider copying it in and updating the source path using `speakeasy configure sources` or by direclty editing the `.speakeasy/workflow.yaml` file.

Please submit a PR and tag `@speakeasy-api/maintainers` for review. If you are a Speakeasy team member please post on the `#docs` channel for review.
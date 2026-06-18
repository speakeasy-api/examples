<div align="center">
 <a href="https://www.speakeasy.com/" target="_blank">
  <img width="1500" height="500" alt="Speakeasy" src="https://github.com/user-attachments/assets/0e56055b-02a3-4476-9130-4be299e5a39c" />
 </a>
 <br />
 <br />
  <div>
   <a href="https://speakeasy.com/docs/create-client-sdks/" target="_blank"><b>Docs Quickstart</b></a>&nbsp;&nbsp;//&nbsp;&nbsp;<a href="https://go.speakeasy.com/slack" target="_blank"><b>Join us on Slack</b></a>
  </div>
 <br />

</div>

<div align="center">
<h2>Speakeasy gRPC Gateway OpenAPI Example</h2>
</a>

</div>

This example gRPC Gateway app demonstrates Speakeasy-recommended practices for
generating OpenAPI and SDKs from protobuf.

## Installation

To install the application on your local machine:

Clone the repository:
```bash
git clone https://github.com/speakeasy/examples.git
```

Navigate into the directory:
```bash
cd frameworks-grpc-gateway
```

### Install Go

On macOS, install Go by running:

```bash
brew install go
```

Alternatively follow the [Go installation
instructions](https://go.dev/doc/install) for your platform.

### Install Buf

On macOS, install Buf by running:

```bash
brew install bufbuild/buf/buf
```

Alternatively, follow the [Buf CLI installation
instructions](https://buf.build/docs/installation) for your platform.

### Install Buf Modules

We'll use Buf to manage our dependencies.

```bash
cd proto
buf dep update
cd ..
```

### Install Go module dependencies

Run the following in the terminal from the project's root:

```bash
go mod tidy
```

`protoc-gen-go`, `protoc-gen-go-grpc`, and `protoc-gen-grpc-gateway` are tracked
as [Go tool dependencies](https://go.dev/doc/modules/managing-dependencies#tools)
in `go.mod`, so `buf generate` runs them with `go tool` and no separate install
step is required for these three.

### Install protoc-gen-openapiv3

`protoc-gen-openapiv3` hasn't shipped in a tagged grpc-gateway release yet, so
it can't be pinned as a Go tool dependency. Install it separately from the
`main` branch:

```bash
go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv3@main
```

This installs an unreleased, moving target, so expect occasional breaking
changes until the plugin ships in a tagged release. Make sure `$HOME/go/bin` is
in `$PATH`:

```bash
export PATH="$PATH:$HOME/go/bin"
```

### Install Speakeasy CLI

To create an SDK, you'll also need the Speakeasy CLI installed, or use the
Speakeasy dashboard.

[Install Speakeasy CLI](https://github.com/speakeasy-api/speakeasy#installation):
```bash
brew install speakeasy-api/homebrew-tap/speakeasy
```

## Generate OpenAPI Document and Create SDK

The `protoc-gen-openapiv3` plugin emits OpenAPI v3.1 JSON directly from the
source code, using HTTP bindings, leading comments, and
`google.api.field_behavior` annotations. Unlike `protoc-gen-openapiv2`, it
doesn't rely on annotations spread throughout the codebase for fine-grained
metadata. Instead, extra OpenAPI metadata such as operation IDs/tags, server
information, and vendor extensions is applied through
[Overlays](https://spec.openapis.org/overlay/v1.1.0.html).

```bash
buf generate
speakeasy overlay apply \
    -s openapi/speakeasy/v1/speakeasy.openapi.json \
    -o openapi/train-travel.overlay.yaml \
    --out openapi/speakeasy/v1/speakeasy.patched.openapi.json
speakeasy generate sdk \
    --schema openapi/speakeasy/v1/speakeasy.patched.openapi.json \
    --lang typescript \
    --out ./sdk
```

## License

This project is licensed under the terms of the Apache 2.0 license.

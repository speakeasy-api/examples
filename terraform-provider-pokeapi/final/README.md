# PokeAPI Terraform Provider

A Terraform provider for interacting with the PokeAPI, built to showcase how to create a custom Terraform provider in Go.

## Prerequisites

- Go 1.24 or higher
- Terraform CLI

## Setup

### 1. Install dependencies

```bash
go mod tidy
```

### 2. Build the provider

```bash
go build -o bin/terraform-provider-pokeapi
```

### 3. Configure Terraform for local development

Create or update your `~/.terraformrc` file with the following content (replace `/path/to/project` with the actual path to this project):

```hcl
provider_installation {
    dev_overrides {
        "example.com/me/pokeapi" = "/path/to/project/bin"
    }
    direct {}
}
```

## Usage

### Run the example

Navigate to the examples directory:

```bash
cd examples
```

Initialize Terraform:

```bash
terraform init
```

Create a Terraform plan:

```bash
terraform plan
```

Apply the configuration:

```bash
terraform apply
```

Destroy the resources when done:

```bash
terraform destroy
```
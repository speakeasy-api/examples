# Status

The status of the payment, one of `pending`, `succeeded`, or `failed`.

## Example Usage

```typescript
import { Status } from "train-travel-sdk/models/operations";

let value: Status = "succeeded";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pending" | "succeeded" | "failed" | Unrecognized<string>
```
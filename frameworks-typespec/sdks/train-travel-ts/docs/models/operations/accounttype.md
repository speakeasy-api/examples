# AccountType

The type of entity that holds the account. This can be either `individual` or `company`.

## Example Usage

```typescript
import { AccountType } from "train-travel-sdk/models/operations";

let value: AccountType = "company";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"individual" | "company" | Unrecognized<string>
```
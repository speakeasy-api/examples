# Currency

Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.

## Example Usage

```typescript
import { Currency } from "train-travel-sdk/models/operations";

let value: Currency = "chf";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"bam" | "bgn" | "chf" | "eur" | "gbp" | "nok" | "sek" | "try" | Unrecognized<string>
```
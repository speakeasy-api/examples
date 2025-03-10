# RemoteSource

Remote source configuration

## Example Usage

```typescript
import { RemoteSource } from "speakeasy/models/components";

let value: RemoteSource = {
  inputs: [
    {
      registryUrl: "https://rosy-backburn.net/",
    },
  ],
  output: {
    registryUrl: "https://first-glider.info",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `inputs`                                                                 | [components.RemoteDocument](../../models/components/remotedocument.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `overlays`                                                               | [components.RemoteDocument](../../models/components/remotedocument.md)[] | :heavy_minus_sign:                                                       | N/A                                                                      |
| `output`                                                                 | [components.RemoteDocument](../../models/components/remotedocument.md)   | :heavy_check_mark:                                                       | A document hosted in the registry                                        |
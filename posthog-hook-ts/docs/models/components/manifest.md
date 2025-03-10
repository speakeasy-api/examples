# Manifest

Returns the requested manifest file

## Example Usage

```typescript
import { Manifest } from "speakeasy/models/components";

let value: Manifest = {
  schemaVersion: 2,
  mediaType: "application/vnd.docker.distribution.manifest.v2+json",
  layers: [
    {
      digest:
        "sha256:5d20c808ce198565ff70b3ed23a991dd49afac45dece63474b27ce6ed036adc6",
      mediaType: "application/vnd.docker.image.rootfs.diff.tar.gzip",
      size: 2107098,
    },
  ],
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `schemaVersion`                                                                                         | *number*                                                                                                | :heavy_minus_sign:                                                                                      | Schema version                                                                                          |
| `mediaType`                                                                                             | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Media type usually application/vnd.docker.distribution.manifest.v2+json if this is in the accept header |
| `artifactType`                                                                                          | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Type of artifact                                                                                        |
| `annotations`                                                                                           | [components.Annotations](../../models/components/annotations.md)                                        | :heavy_minus_sign:                                                                                      | Annotations                                                                                             |
| `layers`                                                                                                | [components.V2Descriptor](../../models/components/v2descriptor.md)[]                                    | :heavy_minus_sign:                                                                                      | List of V2 image layer information                                                                      |
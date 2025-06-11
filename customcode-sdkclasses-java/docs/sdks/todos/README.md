# Todos
(*todos()*)

## Overview

### Available Operations

* [create](#create) - Create a new todo
* [getOne](#getone) - Get a todo

## create

Create a new todo

### Example Usage

```java
package hello.world;

import com.example.sdk.Gtd;
import com.example.sdk.models.components.TodoForm;
import com.example.sdk.models.operations.CreateResponse;
import java.lang.Exception;

public class Application {

    public static void main(String[] args) throws Exception {

        Gtd sdk = Gtd.builder()
            .build();

        TodoForm req = TodoForm.builder()
                .title("Buy cat food")
                .build();

        CreateResponse res = sdk.todos().create()
                .request(req)
                .call();

        if (res.todo().isPresent()) {
            // handle response
        }
    }
}
```

### Parameters

| Parameter                                   | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `request`                                   | [TodoForm](../../models/shared/TodoForm.md) | :heavy_check_mark:                          | The request object to use for the request.  |

### Response

**[CreateResponse](../../models/operations/CreateResponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| models/errors/APIException | 4XX, 5XX                   | \*/\*                      |

## getOne

Get a todo

### Example Usage

```java
package hello.world;

import com.example.sdk.Gtd;
import com.example.sdk.models.operations.GetOneResponse;
import java.lang.Exception;

public class Application {

    public static void main(String[] args) throws Exception {

        Gtd sdk = Gtd.builder()
            .build();

        GetOneResponse res = sdk.todos().getOne()
                .id("q7vqspzbu")
                .call();

        if (res.todo().isPresent()) {
            // handle response
        }
    }
}
```

### Parameters

| Parameter          | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *String*           | :heavy_check_mark: | N/A                | q7vqspzbu          |

### Response

**[GetOneResponse](../../models/operations/GetOneResponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| models/errors/APIException | 4XX, 5XX                   | \*/\*                      |
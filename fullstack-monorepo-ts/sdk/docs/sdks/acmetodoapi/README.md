# AcmeTodoApi SDK

## Overview

Todo API: A minimal TODO API

### Available Operations

* [getTodoById](#gettodobyid) - Get a todo item by id
* [updateTodo](#updatetodo) - Update a todo item
* [deleteTodo](#deletetodo) - Delete a todo item
* [createTodo](#createtodo) - Create a todo item
* [getTodos](#gettodos) - Get all todo items

## getTodoById

Get a todo item by id

### Example Usage

```typescript
import { AcmeTodoApi } from "@acme/todo-sdk";

const acmeTodoApi = new AcmeTodoApi();

async function run() {
  const result = await acmeTodoApi.getTodoById({
    id: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AcmeTodoApiCore } from "@acme/todo-sdk/core.js";
import { getTodoById } from "@acme/todo-sdk/funcs/getTodoById.js";

// Use `AcmeTodoApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const acmeTodoApi = new AcmeTodoApiCore();

async function run() {
  const res = await getTodoById(acmeTodoApi, {
    id: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Query hooks for fetching data.
  useGetTodoById,
  useGetTodoByIdSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchGetTodoById,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateGetTodoById,
  invalidateAllGetTodoById,
} from "@acme/todo-sdk/react-query/getTodoById.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTodoByIdRequest](../../models/operations/gettodobyidrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Todo](../../models/components/todo.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateTodo

Update a todo item

### Example Usage

```typescript
import { AcmeTodoApi } from "@acme/todo-sdk";
import { RFCDate } from "@acme/todo-sdk/types";

const acmeTodoApi = new AcmeTodoApi();

async function run() {
  const result = await acmeTodoApi.updateTodo({
    id: "<id>",
    updateTodoRequest: {
      title: "Buy groceries",
      dueDate: new RFCDate("2021-01-01"),
      completed: true,
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AcmeTodoApiCore } from "@acme/todo-sdk/core.js";
import { updateTodo } from "@acme/todo-sdk/funcs/updateTodo.js";
import { RFCDate } from "@acme/todo-sdk/types";

// Use `AcmeTodoApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const acmeTodoApi = new AcmeTodoApiCore();

async function run() {
  const res = await updateTodo(acmeTodoApi, {
    id: "<id>",
    updateTodoRequest: {
      title: "Buy groceries",
      dueDate: new RFCDate("2021-01-01"),
      completed: true,
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useUpdateTodoMutation
} from "@acme/todo-sdk/react-query/updateTodo.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateTodoRequest](../../models/operations/updatetodorequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Todo](../../models/components/todo.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteTodo

Delete a todo item

### Example Usage

```typescript
import { AcmeTodoApi } from "@acme/todo-sdk";

const acmeTodoApi = new AcmeTodoApi();

async function run() {
  const result = await acmeTodoApi.deleteTodo({
    id: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AcmeTodoApiCore } from "@acme/todo-sdk/core.js";
import { deleteTodo } from "@acme/todo-sdk/funcs/deleteTodo.js";

// Use `AcmeTodoApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const acmeTodoApi = new AcmeTodoApiCore();

async function run() {
  const res = await deleteTodo(acmeTodoApi, {
    id: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useDeleteTodoMutation
} from "@acme/todo-sdk/react-query/deleteTodo.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteTodoRequest](../../models/operations/deletetodorequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Todo](../../models/components/todo.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createTodo

Create a todo item

### Example Usage

```typescript
import { AcmeTodoApi } from "@acme/todo-sdk";
import { RFCDate } from "@acme/todo-sdk/types";

const acmeTodoApi = new AcmeTodoApi();

async function run() {
  const result = await acmeTodoApi.createTodo({
    title: "Buy groceries",
    dueDate: new RFCDate("2021-01-01"),
    completed: false,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AcmeTodoApiCore } from "@acme/todo-sdk/core.js";
import { createTodo } from "@acme/todo-sdk/funcs/createTodo.js";
import { RFCDate } from "@acme/todo-sdk/types";

// Use `AcmeTodoApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const acmeTodoApi = new AcmeTodoApiCore();

async function run() {
  const res = await createTodo(acmeTodoApi, {
    title: "Buy groceries",
    dueDate: new RFCDate("2021-01-01"),
    completed: false,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useCreateTodoMutation
} from "@acme/todo-sdk/react-query/createTodo.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CreateTodoRequest](../../models/components/createtodorequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Todo](../../models/components/todo.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getTodos

Get all todo items

### Example Usage

```typescript
import { AcmeTodoApi } from "@acme/todo-sdk";

const acmeTodoApi = new AcmeTodoApi();

async function run() {
  const result = await acmeTodoApi.getTodos();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AcmeTodoApiCore } from "@acme/todo-sdk/core.js";
import { getTodos } from "@acme/todo-sdk/funcs/getTodos.js";

// Use `AcmeTodoApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const acmeTodoApi = new AcmeTodoApiCore();

async function run() {
  const res = await getTodos(acmeTodoApi);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Query hooks for fetching data.
  useGetTodos,
  useGetTodosSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchGetTodos,
  
  // Utility to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateAllGetTodos,
} from "@acme/todo-sdk/react-query/getTodos.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Todo[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |
# React App (ESM)

This is a simple React app that uses the Speakeasy SDK.

## Features

### React Query Hooks

The following components use the Speakeasy-generated [React Query] hooks:

- [TodoForm](./src/components/todo-form.tsx) - A form to create a new todo.
- [TodoList](./src/components/todo-list.tsx) - A list of todos.

[React Query]: https://tanstack.com/query/latest/docs/framework/react/overview

### Mock Service Worker (MSW)

The following files demonstrate using [Mock Service Worker (MSW)] to mock API:

- [MSW Handlers] - Mock API handlers.
- [TodoForm Tests] - Testing the `TodoForm` component using MSW.
- [TodoList Tests] - Testing the `TodoList` component using MSW.

[Mock Service Worker (MSW)]: https://mswjs.io/
[MSW Handlers]: ./src/mocks/handlers.ts
[TodoForm Tests]: ./src/components/todo-form.test.tsx
[TodoList Tests]: ./src/components/todo-list.test.tsx

## Usage

### Development

Copy the `.env.example` file to `.env`. Update its contents if necessary. It
should already be configured to work with the Express backend locally.

```bash
cp .env.example .env
```

To start the React app in development mode:

```bash
npm dev 
```

The root folder of the monorepo contains a `dev` script that starts both the
backend and frontend in development mode.

### Testing

To run the tests:

```bash
npm test
```

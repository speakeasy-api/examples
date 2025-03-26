import { Todo } from "@acme/todo-sdk/models/components";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll, expect, test, vi } from "vitest";
import { createAcmeHandlers } from "../mocks/handlers/api";
import { cleanup, render, screen, waitFor } from "../test-helpers";
import TodoListCard from "./todo-list-card";

const { handlers: acmeHandlers } = createAcmeHandlers();

const server = setupServer(...acmeHandlers);
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => {
  cleanup();
  server.resetHandlers();
});

const mockTodo: Todo = {
  id: "123",
  title: "Test Todo",
  completed: false,
  createdAt: new Date(),
  updatedAt: new Date(),
};

test("renders todo card with correct information", () => {
  render(<TodoListCard todo={mockTodo} />);

  expect(screen.getByText("Test Todo")).toBeInTheDocument();
  expect(screen.getByText("No due date")).toBeInTheDocument();

  const checkbox = screen.getByTestId("completed-checkbox");
  expect(checkbox).not.toBeChecked();
  expect(checkbox).not.toBeDisabled();

  const button = screen.getByTestId("delete-button");
  expect(button).toBeInTheDocument();
  expect(button).not.toBeDisabled();
});

test("clicking the checkbox calls the onUpdate prop", async () => {
  const mockOnUpdate = vi.fn();

  render(<TodoListCard todo={mockTodo} onUpdate={mockOnUpdate} />);

  const checkbox = screen.getByTestId("completed-checkbox");

  const clickEvent = userEvent.click(checkbox);
  await waitFor(() => expect(checkbox).toBeDisabled());
  await clickEvent;

  expect(checkbox).not.toBeDisabled();
  expect(mockOnUpdate).toBeCalledWith(mockTodo.id, { completed: true });

  expect(
    checkbox,
    "the checkbox should not update its own state",
  ).not.toBeChecked();
});

test("clicking the delete button calls the onDelete prop", async () => {
  const mockOnDelete = vi.fn();
  render(<TodoListCard todo={mockTodo} onDelete={mockOnDelete} />);

  const button = screen.getByTestId("delete-button");

  const clickEvent = userEvent.click(button);
  await waitFor(() => expect(button).toBeDisabled());
  await clickEvent;

  expect(button).not.toBeDisabled();
  expect(mockOnDelete).toBeCalledWith(mockTodo.id);
});

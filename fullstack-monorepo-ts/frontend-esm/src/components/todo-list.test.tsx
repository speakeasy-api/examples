import { test, expect, beforeAll, afterAll, afterEach } from "vitest";
import { cleanup, render, screen, waitFor } from "../test-helpers";
import "@testing-library/jest-dom/vitest";
import TodoList from "./todo-list";
import { setupServer } from "msw/node";
import { createAcmeHandlers } from "../mocks/handlers/api";
import { http, HttpResponse } from "msw";
import userEvent from "@testing-library/user-event";

const { handlers: acmeHandlers, resetTodos: resetAcmeHandlerState } =
  createAcmeHandlers();

const server = setupServer(...acmeHandlers);
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => {
  cleanup();
  resetAcmeHandlerState();
  server.resetHandlers();
});

test("renders loading state initially", () => {
  // Mock the GET todos endpoint to delay response
  server.use(
    http.get("https://todo.example.com/todo", () => {
      return new Promise(() => {
        // Never resolve to keep the loading state
        setTimeout(() => {}, 1000);
      });
    }),
  );

  render(<TodoList />);
  expect(screen.getByText("Loading...")).toBeInTheDocument();
});

test("renders error state when API fails", async () => {
  // Mock the GET todos endpoint to return an error
  server.use(
    http.get(
      "https://todo.example.com/todo",
      () => new Promise((resolve) => resolve(HttpResponse.error())),
    ),
  );

  render(<TodoList />);

  await waitFor(() => {
    expect(screen.getByText(/Error:/)).toBeInTheDocument();
  });
});

test("renders list of todos when API returns data", async () => {
  render(<TodoList />);

  await waitFor(() => {
    expect(screen.getByText("Test Todo 1")).toBeInTheDocument();
    expect(screen.getByText("Test Todo 2")).toBeInTheDocument();
    expect(screen.getByText("No due date")).toBeInTheDocument();
    expect(screen.getByText("2023-12-31")).toBeInTheDocument();
  });
});

test("updates todo when checkbox is clicked", async () => {
  const user = userEvent.setup();

  render(<TodoList />);

  // Wait for todos to load
  await waitFor(() => {
    expect(screen.getByText("Test Todo 1")).toBeInTheDocument();
  });

  // Find the first todo's checkbox and click it
  const checkboxes = screen.getAllByTestId("completed-checkbox");
  await user.click(checkboxes[0]);

  await waitFor(() => {
    expect(checkboxes[0]).toBeChecked();
  });
});

test("deletes todo when delete button is clicked", async () => {
  render(<TodoList />);

  // Wait for todos to load
  await waitFor(() => {
    expect(screen.getByText("Test Todo 1")).toBeInTheDocument();
  });

  // Find the first todo's delete button and click it
  const deleteButtons = screen.getAllByTestId("delete-button");
  await userEvent.click(deleteButtons[0]);

  await waitFor(() => {
    expect(deleteButtons[0]).not.toBeInTheDocument();
  });
});

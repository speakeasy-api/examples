import { test, expect, beforeAll, afterAll, afterEach } from "vitest";
import { render, screen, waitFor } from "../test-helpers";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import TodoForm from "./todo-form";
import { setupServer } from "msw/node";
import { acmeHandlers } from "../mocks/handlers/api";

const server = setupServer(...acmeHandlers);
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test("new todo form submits successfully", async () => {
  render(<TodoForm />);

  const titleInput = screen.getByTestId("title-input");
  const submitButton = screen.getByTestId("submit-button");

  await userEvent.type(titleInput, "Buy groceries");
  expect(titleInput).toHaveValue("Buy groceries");

  const clickEvent = userEvent.click(submitButton);

  // form loading state
  await waitFor(() => {
    expect(submitButton).toHaveValue("Submitting...");
    expect(submitButton).toBeDisabled();
  });

  await clickEvent;

  await waitFor(() => {
    expect(submitButton).toHaveValue("Create Todo");
    expect(submitButton).not.toBeDisabled();
  });
});

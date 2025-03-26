import { test, expect, beforeAll, afterAll, afterEach } from "vitest";
import { render, screen } from "./test-helpers";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import { NewTodoForm } from "./NewTodoForm";
import { setupServer } from "msw/node";
import { acmeHandlers } from "./mocks/handlers/acme";

const server = setupServer(...acmeHandlers);
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test("new todo form submits successfully", async () => {
  render(<NewTodoForm />);

  await userEvent.type(screen.getByLabelText("Title"), "Buy groceries");
  await userEvent.click(screen.getByRole("button", { name: "Create" }));

  expect(screen.getByText("Todo created successfully")).toBeInTheDocument();
});

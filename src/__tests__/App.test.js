import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "../App";

test("can receive a new user and show it in the table", async () => {
  render(<App />);

  // find inputs and buttons
  const nameField = screen.getByRole("textbox", { name: /name/i });
  const emailField = screen.getByRole("textbox", { name: /email/i });
  const button = screen.getByRole("button");

  // type something in inputs

  user.click(nameField);
  user.keyboard("Joe");
  user.click(emailField);
  user.keyboard("Joe@gmail.com");

  // submit
  user.click(button);

  await (async () =>
    new Promise((resolve) => setTimeout(() => resolve(), 100)))();

  // it shows correct list of users
  const name = screen.getByRole("cell", { name: "Joe" });
  const email = screen.getByRole("cell", { name: "Joe@gmail.com" });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});

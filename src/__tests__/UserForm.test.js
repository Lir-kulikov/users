import { screen, render } from "@testing-library/react";
import user from '@testing-library/user-event'
import { UserForm } from "../components/UserForm";

test("There are name and email inputs and a button", () => {
  render(<UserForm />);
  const nameField = screen.getByRole("textbox", { name: /name/i });
  const emailField = screen.getByRole("textbox", { name: /email/i });
  const button = screen.getByRole("button", { name: /add user/i });

  expect(nameField).toBeInTheDocument();
  expect(emailField).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("It calls addUser when the form is submitted", () => {
  const mock = jest.fn()
  // 1. try to render component
  render(<UserForm addUser={mock} />)

  // 2. find the inputs
  const nameField = screen.getByRole("textbox", { name: /name/i });
  const emailField = screen.getByRole("textbox", { name: /email/i });

  // 3. simulate typing in the inputs
  user.click(nameField)
  user.keyboard('Joe')
  expect(nameField).toHaveValue('Joe')

  user.click(emailField)
  user.keyboard('Joe@gmail.com')
  expect(emailField).toHaveValue('Joe@gmail.com')

  // 4. find a button
  const button = screen.getByRole('button', { name: /add user/i })

  // 5. simulate clicking the button
  user.click(button)

  // 6. check that callback was called
  expect(mock).toHaveBeenCalled()

  // 7. check that callback was called with correct data
  expect(mock).toHaveBeenCalledWith({ name: 'Joe', email: 'Joe@gmail.com'})
})

import { render, screen, within } from "@testing-library/react";
import { UserList } from "../components/UserList";

const renderComponent = () => {
  const users = [{ name: "Joe", email: "Joe@gmail.com" }];
  render(<UserList users={users} />);

  return {
    users
  }
}

test("render one row per user", () => {
  renderComponent()

  // 2. find the rows
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  // 3. create assertion
  expect(rows).toHaveLength(1);
});

test("render the email and name for each user", () => {
  const { users } = renderComponent()

  for (const user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});

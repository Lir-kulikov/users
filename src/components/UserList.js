export function UserList({ users }) {
  return (
    <div style={{ margin: "auto" }}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody data-testid="users">
          {users.map((user) => (
            <tr key={`${user.name}${user.email}`}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

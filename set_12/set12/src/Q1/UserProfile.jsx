import React, { useContext, useState } from "react";
import { userContext } from "./UserDetails";

const UserProfile = () => {
  const { users } = useContext(userContext);
  const [selectedUser, setSelectedUser] = useState(null);

  function handleChange(e) {
    const selectedId = Number(e.target.value);
    const user = users.find((u) => u.id === selectedId);
    setSelectedUser(user);
  }

  return (
    <div>
      <h2>Select a user</h2>

      <select onChange={handleChange}>
        <option>Select user...</option>

        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>

      {selectedUser && (
        <div style={{ marginTop: "1rem" }}>
          <h3>Name: {selectedUser.name}</h3>
          <p>Email: {selectedUser.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;

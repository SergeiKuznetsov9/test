import axios from "axios";
import { useEffect, useState } from "react";

export const Fetching = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const response = await axios.get(
      //   "http://jsonplaceholder.typicode.com/users"
      "https://fake-json-api.mock.beeceptor.com/users"
    );
    setUsers(response.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id} data-testid="user-item">
          {user.name}
        </div>
      ))}
    </div>
  );
};

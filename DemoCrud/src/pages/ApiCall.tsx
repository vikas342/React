import React, { useEffect, useState } from "react";
import api from "../services/axios";

export default function ApiCall() {
  const [users, setUsers] = useState<any[]>([]);
  const getData = async () => {
    const res = await api.get("/users");
    console.log(res.data.users)
    setUsers(res.data.users);
  };

  useEffect(() => {
    getData(); // call when component loads
  }, []);

  return (
    <div>
      <h2>Users</h2>

      {users.map((u) => (
        <p key={u.id}>
          {u.firstName} {u.lastName}
        </p>
      ))}
    </div>
  );
}

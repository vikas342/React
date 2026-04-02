// import Image from "next/image";
// import Counter from "./components/Counter";

// export default function Home() {
//   return (
//     <>
//       <Counter />
//       <p className="text-2xl font-bold text-amber-500">Hello, Next.js!</p>
//     </>
//   );
// }

"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Loginpage() {
  const router = useRouter();

  const [users, setUsers] = useState([
    { username: "admin", password: "admin123" },
    { username: "user1", password: "user123" },
    { username: "user2", password: "user234" },
  ]);
  const [uslogindata, setlogindata] = useState({ username: "admin", password: "admin123" });
  const [error, setError] = useState("");

  const handlelogin = () => {
    console.log(uslogindata);
    const user = users.map((u: any) => {
      if (
        u.username === uslogindata.username &&
        u.password === uslogindata.password
      ) {
        setlogindata({ username: "", password: "" });

        return u;
      }
      return null;
    });
    if (user != null) {
       localStorage.setItem("isLoggedIn", "true");
      setError("logged in");
      router.push("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={uslogindata.username}
          onChange={(e) =>
            setlogindata({ ...uslogindata, username: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={uslogindata.password}
          onChange={(e) =>
            setlogindata({ ...uslogindata, password: e.target.value })
          }
        />
      </div> 
      <button type="submit" onClick={() => handlelogin()}>
        Login
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </>
  );
}

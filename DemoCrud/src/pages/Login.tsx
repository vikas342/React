import React, { use, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const [users, setusers] = useState([
    {
      UserName: "Vikas",
      Password: "vikas@123",
    },
    {
      UserName: "VS",
      Password: "vikas@123",
    },
  ]);
  const [formdata, setFormdata] = useState({
    UserName: "Vikas",
    Password: "vikas@123",
  });

  const navigate = useNavigate();

  function loginCheck() {
    var getusers = users.filter(
      (x) => x.UserName == formdata.UserName && x.Password == formdata.Password,
    );
    if (getusers.length > 0) {
      navigate("/home");
      localStorage.setItem("user", JSON.stringify(getusers[0]));
    } else {
      alert("wrong pass or username");
      setFormdata({ UserName: "", Password: "" });
    }
  }
  return (
    <div>
      <div>Login</div>

      <input
        type="text"
        name="username"
        id="username"
        value={formdata.UserName}
        onChange={(x) =>
          setFormdata((prev) => ({ ...prev, UserName: x.target.value }))
        }
      />
      <input
        type="password"
        name="pass"
        id="pass"
        value={formdata.Password}
        onChange={(x) =>
          setFormdata((prev) => ({ ...prev, Password: x.target.value }))
        }
      />
      <button onClick={loginCheck}>Login</button>
    </div>
  );
}

export default Login;

import React from "react";
import { useState } from "react";
import UserContext from "../Context/UserContext";
import { useContext } from "react";
import { useEffect } from "react";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { setUser } = useContext(UserContext);



  const handleButton = (e) => {
      setUser({ password, username });
    e.preventDefault();
  };

  return (
    <div className=" d-flex gap-2">
      <input
        type="text"
        value={username}
        className="form-control"
        placeholder="Enter Your Name"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        value={password}
        placeholder="Enter Password"
        className="form-control"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" className="btn btn-primary"
      data-toggle="button"
      aria-pressed="false"
      onClick={handleButton}>
        Submit
      </button>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import axios from "../../axios";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email, password);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/auth/login`, { email, password });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>

      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter email ...."
          // value={email}
          defaultValue="admin@namasys.co"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter password ...."
          value={password}
          // defaultValue="admin@123"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="loginButton"
          type="submit"
          //  disabled={isFetching}
        >
          <Link to="/home">Login</Link>
        </button>
      </form>
    </div>
  );
};

export default Login;

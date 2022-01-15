import React, { useRef } from "react";
import "./login.css";
import axios from "axios";
import { API } from "../../backend";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${API}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        },
        {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }
      );
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
          //   defaultValue="admin@namasys.co"
          ref={emailRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          //   defaultValue="admin@123"
          ref={passwordRef}
        />
        <button
          className="loginButton"
          type="submit"
          //  disabled={isFetching}
        >
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        {/* <Link to="/register" className="link">
          Register
        </Link> */}
      </button>
    </div>
  );
};

export default Login;

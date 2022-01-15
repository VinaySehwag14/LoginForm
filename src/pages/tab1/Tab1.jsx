import React from "react";
import "./tab1.css";

const Tab1 = () => {
  return (
    <div className="login">
      <span className="loginTitle">Add Details</span>

      <form
        className="loginForm"
        //   onSubmit={handleSubmit}
      >
        <label>Email</label>
        <input
          type="email"
          className="loginInput"
          placeholder="Enter email ...."
          //   ref={emailRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter Password ...."

          //   ref={passwordRef}
        />
        <label>Mobile</label>
        <input
          type="tel"
          className="loginInput"
          placeholder="Enter Mobile ...."

          //   ref={passwordRef}
        />
        <label>Address</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter Address ...."

          //   ref={passwordRef}
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

export default Tab1;

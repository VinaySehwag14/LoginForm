import React, { useState } from "react";
import axios from "../../axios";
import "./tabOne.css";

const TabOne = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/register`, {
        username: userName,
        mobile: mobileNo,
        email,
        address,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Add Details</span>

      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter Username ...."
          onChange={(e) => setUserName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter email ...."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Mobile</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter Mobile ...."
          onChange={(e) => setMobileNo(e.target.value)}
        />
        <label>Address</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter Address ...."
          onChange={(e) => setAddress(e.target.value)}
        />
        <button className="loginButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TabOne;

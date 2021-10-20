import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const SignUp = () => {
  const { handleUserRegister } = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleRegister = () => {
    handleUserRegister(email, password, name);
  };
  return (
    <section className="book login" id="book">
      <h1 className="heading">
        <span>Signup</span> now
      </h1>

      <div className="row">
        <form onSubmit={(e) => e.preventDefault()}>
          <h3>sign up for free</h3>
          <input
            onChange={handleName}
            type="text"
            placeholder="name"
            className="box"
          />
          <input
            onChange={handleEmail}
            type="email"
            placeholder="your email"
            className="box"
          />
          <input
            onChange={handlePassword}
            type="password"
            placeholder="your password"
            className="box"
          />
          <input
            onClick={handleRegister}
            type="submit"
            value="continue"
            className="btn"
          />
          <br /> <br />
          <button>
            Already have an account? <Link to="/login">Log in</Link>{" "}
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;

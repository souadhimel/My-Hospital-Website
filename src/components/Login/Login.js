import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { handleGoogleLogin, handleUserLogin } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/";

  const handleGoogleSignIn = () => {
    handleGoogleLogin().then((result) => {
      history.push(redirect_url);
    });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // console.log(email, password);
  const handleLogin = () => {
    handleUserLogin(email, password);
  };
  return (
    <section className="book login" id="book">
      <h1 className="heading">
        <span>Login</span> now
      </h1>

      <div className="row">
        <form onSubmit={(e) => e.preventDefault()}>
          <h3>fill the info below</h3>
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
            onClick={handleLogin}
            type="submit"
            value="Log in"
            className="btn"
          />
          <br /> <br />
          <button className="signup">
            New to Medicare? <Link to="/signup">sign up</Link>{" "}
          </button>
          <br />
          <button onClick={handleGoogleSignIn} className="btn btn-warning">
            Google Sign In
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;

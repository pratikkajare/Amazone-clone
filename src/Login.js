import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import "./Login.css";
import { signup, login, logout, useAuth } from "./fire";

const Login = () => {
  const history = useNavigate();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();

  const signUp = async () => {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      history("/");
    } catch {
      alert("Error");
    }
    setLoading(false);
  };
  const signIn = async (event) => {
    event.preventDefault();
    setLoading(true);

    await login(emailRef.current.value, passwordRef.current.value)
      .then(() => {
        history("/");
      })
      .catch(() => {
        alert("error");
      });

    setLoading(false);
  };
  const handlelogout = async () => {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error");
    }
    setLoading(false);
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG24.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <form>
          <h>Sign-in </h>
          <br />
          <h5>E-mail</h5>
          <input type="text" ref={emailRef} />
          <h5>Password</h5>
          <input type="password" ref={passwordRef} />
          <button
            className="login__signInButton"
            onClick={signIn}
            disabled={loading || currentUser != null}
          >
            Sign In
          </button>

          <small>
            By signing in You agree to Amazone fake clone conditions of Use &
            Sale. Please see our privacy notice, our coockies Notice and our
            Interest-Based on Ads Notice.
          </small>
          <button
            className="login__registerButton"
            disabled={loading || currentUser != null}
            onClick={signUp}
          >
            Create Your Amazone Account
          </button>
          <button className="login__logoutButton" onClick={handlelogout}>
            logout
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

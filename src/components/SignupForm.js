import { Link } from "react-router-dom";
import { useState } from "react";
const SignupForm = ({ createUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    const user = {
      username,
      password,
    };
    createUser(user);
  };

  return (
    <div id="loginForm">
      <h1>Sign up</h1>
      <label htmlFor="email">E-mail</label>
      <input type="email" id="email"></input>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      ></input>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      ></input>
      <div>
        <button onClick={handleSignup}>Sign up</button>
      </div>
      <p>Already have an account?</p>
      <div id="goBack">
        <Link to="/login">Log in</Link>
      </div>
    </div>
  );
};

export default SignupForm;

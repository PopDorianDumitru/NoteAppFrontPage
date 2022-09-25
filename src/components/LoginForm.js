import { Link } from "react-router-dom";
import { useState } from "react";
const LoginForm = ({ createUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = {
      username,
      password,
    };
    createUser(user);
  };
  return (
    <div id="loginForm">
      <h1>Log in</h1>
      <label htmlFor="username">Username or email</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      ></input>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      ></input>
      <div>
        <button onClick={handleLogin}>Log in</button>
      </div>
      <p>Don't have an account?</p>
      <div id="goBack">
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default LoginForm;

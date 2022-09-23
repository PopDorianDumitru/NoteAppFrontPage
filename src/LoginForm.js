const LoginForm = () => {
  return (
    <div id="loginForm">
      <h1>Log in</h1>
      <label htmlFor="username">Username or email</label>
      <input type="text" id="username"></input>
      <label htmlFor="password">Password</label>
      <input type="password" id="password"></input>
      <div>
        <button>Log in</button>
      </div>
    </div>
  );
};

export default LoginForm;

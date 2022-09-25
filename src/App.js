import { Route, Routes, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";
import SignupForm from "./components/SignupForm";
import Notes from "./components/Notes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState({});
  const nav = useNavigate();

  return (
    <div id="backgroundPage">
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        {window.localStorage.getItem("user") ? (
          <div>
            <Link to="/notes">Notes</Link>
          </div>
        ) : (
          <div>
            <Link to="/login">Log In</Link>
          </div>
        )}
        {window.localStorage.getItem("user") ? (
          <div style={{ marginLeft: "auto" }}>
            <a onClick={() => localStorage.removeItem("user")} href="/">
              Log out
            </a>
          </div>
        ) : (
          <div>
            <Link to="signup">Sign Up</Link>
          </div>
        )}
      </nav>
      <Routes>
        <Route
          path="/login"
          element={
            <LoginForm
              createUser={(usr) => {
                nav("/");
                setUser(usr);
                window.localStorage.setItem("user", JSON.stringify(user));
              }}
            />
          }
        />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/signup"
          element={
            <SignupForm
              createUser={(usr) => {
                nav("/");
                setUser(usr);
                window.localStorage.setItem("user", JSON.stringify(user));
              }}
            />
          }
        />
        <Route
          path="/notes"
          element={
            <Notes
              deleteUser={() => {
                nav("/");
                setUser({});
                window.localStorage.removeItem("user");
              }}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

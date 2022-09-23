import { Route, Routes, Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import HomePage from "./HomePage";
function App() {
  return (
    <div id="backgroundPage">
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/login">Log In</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;

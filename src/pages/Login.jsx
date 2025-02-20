import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const STATIC_CREDENTIALS = {
    username: "berdina",
    password: "12345678",
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === STATIC_CREDENTIALS.username && password === STATIC_CREDENTIALS.password) {
      localStorage.setItem("token", "fake-jwt-token");
      navigate("/home");
    } else {
      alert("Username atau password salah!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">Login</button>
        </form>

        <button className="login-button" onClick={() => navigate("/register")}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Login; 
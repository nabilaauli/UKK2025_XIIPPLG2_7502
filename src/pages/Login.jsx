import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import API from "../services/api"; 
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(API.Login, { username, password });
      localStorage.setItem("token", response.data.token);
      navigate("/home");  
    } catch (error) {
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

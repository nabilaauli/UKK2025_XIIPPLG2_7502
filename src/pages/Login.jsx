import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Paper, Box, Typography, Alert } from "@mui/material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

   
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem("token", "fake-jwt-token");
      navigate("/home");
    } else {
      setError("Username atau password salah!");
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f3e8ff">
      <Paper elevation={6} sx={{ padding: 4, borderRadius: 2, width: 320, textAlign: "center" }}>
        <Typography variant="h5" color="#7b2cbf" fontWeight="bold" mb={2}>
          Login
        </Typography>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        <form onSubmit={handleLogin}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2, bgcolor: "#7b2cbf", "&:hover": { bgcolor: "#5a189a" } }}
          >
            Login
          </Button>
        </form>
        <Button
          variant="text"
          fullWidth
          sx={{ mt: 1, color: "#7b2cbf" }}
          onClick={() => navigate("/register")}
        >
          Register
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;

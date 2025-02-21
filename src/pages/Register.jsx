import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, Button, Paper, Box, Typography, Alert } from "@mui/material";

const API_URL = ""; 
const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    name: "",
    password: "",
    confirmation: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmation) {
      setError("Password dan konfirmasi harus sama!");
      return;
    }

    const newUser = {
      username: formData.username,
      email: formData.email,
      name: formData.name,
      password: formData.password,
    };

    try {
      if (API_URL) {
      
        const response = await axios.post(API_URL, newUser);
        console.log("Register Success:", response.data);
      } else {
      
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const isUserExist = users.some((user) => user.email === newUser.email);

        if (isUserExist) {
          setError("Email sudah digunakan!");
          return;
        }

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        console.log("User registered locally:", newUser);
      }

      alert("Registrasi berhasil! Silakan login.");
      navigate("/login");
    } catch (err) {
      console.error("Register Error:", err);
      setError("Gagal registrasi. Coba lagi!");
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f3e8ff">
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 2, textAlign: "center", width: 350 }}>
        <Typography variant="h5" color="#7b2cbf" gutterBottom>Register</Typography>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField fullWidth margin="normal" label="Username" name="username" value={formData.username} onChange={handleChange} required />
          <TextField fullWidth margin="normal" label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          <TextField fullWidth margin="normal" label="Name" name="name" value={formData.name} onChange={handleChange} required />
          <TextField fullWidth margin="normal" label="Password" name="password" type="password" value={formData.password} onChange={handleChange} required />
          <TextField fullWidth margin="normal" label="Confirm Password" name="confirmation" type="password" value={formData.confirmation} onChange={handleChange} required />
          <Button fullWidth variant="contained" color="primary" type="submit" sx={{ mt: 2, bgcolor: "#7b2cbf" }}>Register</Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Register;

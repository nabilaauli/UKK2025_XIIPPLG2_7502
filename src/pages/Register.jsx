import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const API_URL = ".."; 

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

    if (formData.password !== formData.confirmation) {
      setError("Password dan konfirmasi harus sama!");
      return;
    }

    try {
      const response = await axios.post(API_URL, {
        username: formData.username,
        email: formData.email,
        name: formData.name,
        password: formData.password,
      });

      console.log("Register Success:", response.data);
      alert("Registrasi berhasil! Silakan login.");
      navigate("/login");
    } catch (err) {
      console.error("Register Error:", err);
      setError("Gagal registrasi. Coba lagi!");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        {error && <p className="register-error">{error}</p>}
        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="register-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="register-input"
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="register-input"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="register-input"
            required
          />
          <input
            type="password"
            name="confirmation"
            placeholder="Confirmation Password"
            value={formData.confirmation}
            onChange={handleChange}
            className="register-input"
            required
          />
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

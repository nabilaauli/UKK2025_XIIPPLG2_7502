import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    username: "User123",
    email: "user@example.com",
    name: "User Name",
    password: "",
    confirmation: "",
  });

  const [isEditable, setIsEditable] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    alert("Profil berhasil diperbarui!");
    setIsEditable(false);
    navigate("/home");
  };

  const handleEdit = () => {
    setIsEditable(true);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Paper elevation={3} sx={{ p: 3, width: 400, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>Profil</Typography>

        <TextField
          label="Username"
          name="username"
          value={profileData.username}
          onChange={handleChange}
          fullWidth
          margin="normal"
          disabled={!isEditable}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={profileData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          disabled={!isEditable}
        />
        <TextField
          label="Nama"
          name="name"
          value={profileData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          disabled={!isEditable}
        />
        <TextField
          label="Password Baru"
          name="password"
          type="password"
          value={profileData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
          disabled={!isEditable}
        />
        <TextField
          label="Konfirmasi Password"
          name="confirmation"
          type="password"
          value={profileData.confirmation}
          onChange={handleChange}
          fullWidth
          margin="normal"
          disabled={!isEditable}
        />

        <Button
          variant="contained"
          color={isEditable ? "primary" : "secondary"}
          onClick={isEditable ? handleSave : handleEdit}
          fullWidth
          sx={{ mt: 2 }}
        >
          {isEditable ? "Simpan" : "Edit"}
        </Button>
      </Paper>
    </Box>
  );
};

export default Profile;

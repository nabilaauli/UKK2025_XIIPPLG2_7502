import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, Paper, Avatar, IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    username: "User123",
    email: "user@example.com",
    name: "User Name",
    password: "",
    confirmation: "",
    photo: "", 
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

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData((prev) => ({ ...prev, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Paper elevation={3} sx={{ p: 3, width: 400, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>Profil</Typography>
    
<Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
  <Avatar
    src={profileData.photo}
    sx={{ width: 100, height: 100, bgcolor: "#7b2cbf", fontSize: 30 }}
  >
    {profileData.name.charAt(0)}
  </Avatar>
</Box>

{isEditable && (
  <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
    <input
      accept="image/*"
      type="file"
      id="photo-upload"
      style={{ display: "none" }}
      onChange={handlePhotoUpload}
    />
    <label htmlFor="photo-upload">
      <IconButton color="primary" component="span">
        <PhotoCamera />
      </IconButton>
    </label>
  </Box>
)}

        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
  <input
    accept="image/*"
    type="file"
    onChange={handlePhotoUpload}
    style={{ display: "block" }} 
  />
</Box>
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

import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Profile.css";

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
    <div className="profile-container">
      <h2>Profil</h2>
      <input
        type="text"
        name="username"
        value={profileData.username}
        onChange={handleChange}
        className="profile-input"
        disabled={!isEditable}
      />
      <input
        type="email"
        name="email"
        value={profileData.email}
        onChange={handleChange}
        className="profile-input"
        disabled={!isEditable}
      />
      <input
        type="text"
        name="name"
        value={profileData.name}
        onChange={handleChange}
        className="profile-input"
        disabled={!isEditable}
      />
      <input
        type="password"
        name="password"
        placeholder="Password Baru"
        value={profileData.password}
        onChange={handleChange}
        className="profile-input"
        disabled={!isEditable}
      />
      <input
        type="password"
        name="confirmation"
        placeholder="Konfirmasi Password"
        value={profileData.confirmation}
        onChange={handleChange}
        className="profile-input"
        disabled={!isEditable}
      />
      {isEditable ? (
        <button onClick={handleSave} className="profile-button">Simpan</button>
      ) : (
        <button onClick={handleEdit} className="profile-button">Edit</button>
      )}
    </div>
  );
};

export default Profile;

import React from "react";
import { Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from "@mui/material";
import { Home, Person, Logout } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");  
    navigate("/login");  
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 150, // Lebarin dikit biar nggak terlalu kecil
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 150,
          backgroundColor: "#7b2cbf",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 2,
        },
      }}
    >
      <List sx={{ width: "100%" }}>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/home">
            <ListItemIcon sx={{ color: "white" }}>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" sx={{ color: "white", textAlign: "center" }} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/profile">
            <ListItemIcon sx={{ color: "white" }}>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Profile" sx={{ color: "white", textAlign: "center" }} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={handleLogout}>  
            <ListItemIcon sx={{ color: "white" }}>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" sx={{ color: "white", textAlign: "center" }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;

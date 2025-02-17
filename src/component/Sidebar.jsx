import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Import file CSS

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">MyToDoList</div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/home">🏠 Home</Link>
        </li>
        <li>
          <Link to="/tasks">📋 Tasks</Link>
        </li>
      </ul>
      <div className="sidebar-footer">
        <div className="profile-circle">V</div>
        <span>Nabil caca</span>
      </div>
    </div>
  );
};

export default Sidebar;

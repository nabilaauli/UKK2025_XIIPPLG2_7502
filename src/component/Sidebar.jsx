import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <h2>📌 menu</h2>
      <ul>
        <li><Link to="/home">🏠 Home</Link></li>
        <li><Link to="/profile">👤 Profile</Link></li>
        <li>
          <button onClick={handleLogout} style={{ background: "transparent", border: "none", color: "white" }}>
            🚪 Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

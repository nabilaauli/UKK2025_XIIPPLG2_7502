import React, { useState } from "react";

const TaskItem = ({ task, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDeadline, setUpdatedDeadline] = useState(task.deadline);
  const [updatedStatus, setUpdatedStatus] = useState(task.status);
  const [updatedCategory, setUpdatedCategory] = useState(task.category);
  const [updatedDifficulty, setUpdatedDifficulty] = useState(task.difficulty);

  const handleSave = () => {
    onEdit(task.id, updatedTitle, updatedCategory, updatedDeadline, updatedStatus, updatedDifficulty);
    setIsEditing(false);
  };

  return (
    <div style={{
      padding: "15px",
      borderRadius: "8px",
      backgroundColor: "white",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      {isEditing ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <input type="text" value={updatedTitle} onChange={(e) => setUpdatedTitle(e.target.value)} />
          <select value={updatedCategory} onChange={(e) => setUpdatedCategory(e.target.value)}>
            <option value="Belajar">📚 Belajar</option>
            <option value="Tugas">📖 Tugas</option>
            <option value="Kesehatan">🏋️ Kesehatan</option>
          </select>
          <input type="date" value={updatedDeadline} onChange={(e) => setUpdatedDeadline(e.target.value)} />
          <select value={updatedStatus} onChange={(e) => setUpdatedStatus(e.target.value)}>
            <option value="Belum Selesai">❌ Belum Selesai</option>
            <option value="Selesai">✅ Selesai</option>
          </select>
          <select value={updatedDifficulty} onChange={(e) => setUpdatedDifficulty(e.target.value)}>
            <option value="Mudah">🟢 Mudah</option>
            <option value="Sedang">🟠 Sedang</option>
            <option value="Sulit">🔴 Sulit</option>
          </select>
          <button onClick={handleSave}>✅ Simpan</button>
        </div>
      ) : (
        <div>
          <h3>{task.title}</h3>
          <p>📂 {task.category} | ⏳ {task.deadline} | {task.status} | 🎯 {task.difficulty}</p>
        </div>
      )}

      <div>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            style={{
              padding: "8px",
              backgroundColor: "#FFD700",
              color: "black",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginRight: "5px",
            }}>
            ✏️ Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskItem;

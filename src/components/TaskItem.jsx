import { useState } from "react";

const TaskItem = ({ task, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedStatus, setUpdatedStatus] = useState(task.status);
  const [updatedCategory, setUpdatedCategory] = useState(task.category);
  const [updatedDifficulty, setUpdatedDifficulty] = useState(task.difficulty);

  const handleSave = () => {
    onEdit(task.id, updatedTitle, updatedCategory, updatedStatus, updatedDifficulty);
    setIsEditing(false);
  };

  return (
    <div style={styles.taskContainer}>
      {isEditing ? (
        <div style={styles.editContainer}>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            placeholder="Judul tugas"
            style={styles.inputField}
          />
          <input
            type="text"
            value={updatedCategory}
            onChange={(e) => setUpdatedCategory(e.target.value)}
            placeholder="Masukkan kategori"
            style={styles.inputField}
          />
          <select value={updatedStatus} onChange={(e) => setUpdatedStatus(e.target.value)} style={styles.inputField}>
            <option value="Belum Selesai">❌ Belum Selesai</option>
            <option value="Selesai">✅ Selesai</option>
          </select>
          <select value={updatedDifficulty} onChange={(e) => setUpdatedDifficulty(e.target.value)} style={styles.inputField}>
            <option value="bukan prioritas">🟢 bukan prioritas</option>
            <option value="prioritas sedang">🟠 prioritas sedang</option>
            <option value="prioritas utama">🔴 prioritas utama</option>
          </select>
          <button onClick={handleSave} style={styles.saveButton}>✅ Simpan</button>
        </div>
      ) : (
        <div>
          <h3>{task.title}</h3>
          <p>📂 {task.category} | {task.status} | 🎯 {task.difficulty}</p>
        </div>
      )}

      <div>
        {!isEditing && (
          <>
            <button onClick={() => setIsEditing(true)} style={styles.editButton}>✏️ Edit</button>
            <button onClick={() => onDelete(task.id)} style={styles.deleteButton}>🗑️ Delete</button>
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  taskContainer: {
    padding: "15px",
    borderRadius: "8px",
    backgroundColor: "white",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "0px"
  },
  editContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  inputField: {
    width: "100%",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px"
  },
  editButton: {
    padding: "8px",
    backgroundColor: "#FFD700",
    color: "black",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "5px",
  },
  deleteButton: {
    padding: "8px",
    backgroundColor: "#FE5050",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  saveButton: {
    padding: "8px",
    backgroundColor: "#32CD32",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  }
};

export default TaskItem;

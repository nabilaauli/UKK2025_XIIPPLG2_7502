import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("School");
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState("Belum Selesai");
  const [difficulty, setDifficulty] = useState("Mudah");
 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      category,
      deadline,
      status,
      difficulty,
    };

    onAdd(newTask);
    setTitle("");
    setDeadline("");
    setDifficulty("Mudah");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Tambahkan tugas baru..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={styles.input}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)} style={styles.select}>
        <option value="School">🏫 School</option>
        <option value="Important">⚠️ Important</option>
        <option value="Work">👷🏻‍♂️ Work</option>
      </select>
      <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} style={styles.input} />
      <select value={status} onChange={(e) => setStatus(e.target.value)} style={styles.select}>
        <option value="Belum Selesai">❌ Belum Selesai</option>
        <option value="Selesai">✅ Selesai</option>
      </select>

      <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} style={styles.select}>
        <option value="Mudah">🟢 bukan prioritas</option>
        <option value="Sedang">🟠 prioritas Sedang</option>
        <option value="Sulit">🔴 prioritas utama</option>
      </select>
      
      <button type="submit" style={styles.button}>➕ Tambah</button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    gap: "10px",
    padding: "15px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    alignItems: "center",
  },
  input: {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    flex: 1,
  },
  select: {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    backgroundColor: "#6a0dad",
    color: "white",
    padding: "8px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default AddTask;

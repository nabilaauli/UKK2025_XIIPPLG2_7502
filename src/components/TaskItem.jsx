import React, { useState } from "react";
import { TextField, Select, MenuItem, Button, Grid, Paper } from "@mui/material";

const TaskItem = ({ task, onEdit, onDelete, categories }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedCategory, setUpdatedCategory] = useState(task.category);
  const [updatedStatus, setUpdatedStatus] = useState(task.status);
  const [updatedDifficulty, setUpdatedDifficulty] = useState(task.difficulty);

  const handleSave = () => {
    if (!updatedTitle.trim() || !updatedCategory.trim()) return;
    onEdit(task.id, updatedTitle, updatedCategory, updatedStatus, updatedDifficulty);
    setIsEditing(false);
  };

  return (
    <Paper elevation={2} sx={{ p: 3, mb: 2, mx: "auto", width: "95%", maxWidth: "1000px" }}>
      {isEditing ? (
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={3}>
            <TextField
              label="Judul"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
              fullWidth
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <Select
              value={updatedCategory}
              onChange={(e) => setUpdatedCategory(e.target.value)}
              fullWidth
              size="small"
              displayEmpty
            >
              <MenuItem value="" disabled>Pilih Kategori</MenuItem>
              {categories.map((cat, index) => (
                <MenuItem key={index} value={cat}>{cat}</MenuItem>
              ))}
            </Select>
          </Grid>

          <Grid item xs={12} sm={2}>
            <Select value={updatedStatus} onChange={(e) => setUpdatedStatus(e.target.value)} fullWidth size="small">
              <MenuItem value="Belum Selesai">❌ Belum Selesai</MenuItem>
              <MenuItem value="Selesai">✅ Selesai</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12} sm={2}>
            <Select value={updatedDifficulty} onChange={(e) => setUpdatedDifficulty(e.target.value)} fullWidth size="small">
              <MenuItem value="bukan prioritas">🟢 Bukan Prioritas</MenuItem>
              <MenuItem value="prioritas sedang">🟠 Prioritas Sedang</MenuItem>
              <MenuItem value="prioritas utama">🔴 Prioritas Utama</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12} sm={2}>
            <Button onClick={handleSave} variant="contained" color="success" fullWidth size="small">
              Simpan
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={8}>
            <strong>{task.title}</strong> - 📂 {task.category} | {task.status} | 🎯 {task.difficulty}
          </Grid>
          <Grid item xs={4} textAlign="right">
            <Button onClick={() => setIsEditing(true)} variant="contained" color="warning" size="small" sx={{ mr: 1 }}>
              Edit
            </Button>
            <Button onClick={() => onDelete(task.id)} variant="contained" color="error" size="small">
              Hapus
            </Button>
          </Grid>
        </Grid>
      )}
    </Paper>
  );
};

export default TaskItem;

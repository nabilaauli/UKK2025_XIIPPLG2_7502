import React, { useState } from "react";
import { TextField, Select, MenuItem, Button, Grid, Paper } from "@mui/material";

const AddTask = ({ onAdd, categories }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("Belum Selesai");
  const [difficulty, setDifficulty] = useState("bukan prioritas");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !category.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      category,
      status,
      difficulty,
    };

    onAdd(newTask);
    setTitle("");
    setCategory("");
    setStatus("Belum Selesai");
    setDifficulty("bukan prioritas");
  };

  return (
    <Paper elevation={2} sx={{ p: 3, mb: 2, mx: "auto", width: "95%", maxWidth: "1000px" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="center">
          
          <Grid item xs={12} sm={3}>
            <TextField
              label="Judul"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              required
              size="small"
            />
          </Grid>

          
          <Grid item xs={12} sm={3}>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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
            <Select value={status} onChange={(e) => setStatus(e.target.value)} fullWidth size="small">
              <MenuItem value="Belum Selesai">❌ Belum Selesai</MenuItem>
              <MenuItem value="Selesai">✅ Selesai</MenuItem>
            </Select>
          </Grid>

          {/* Dropdown Prioritas */}
          <Grid item xs={12} sm={2}>
            <Select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} fullWidth size="small">
              <MenuItem value="bukan prioritas">🟢 Bukan Prioritas</MenuItem>
              <MenuItem value="prioritas sedang">🟠 Prioritas Sedang</MenuItem>
              <MenuItem value="prioritas utama">🔴 Prioritas Utama</MenuItem>
            </Select>
          </Grid>

          
          <Grid item xs={12} sm={2}>
            <Button type="submit" variant="contained" color="secondary" fullWidth size="small">
              ➕ Tambah
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default AddTask;

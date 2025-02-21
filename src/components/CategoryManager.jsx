import React, { useState } from "react";
import { Box, TextField, Button, List, ListItem, IconButton, Typography } from "@mui/material";
import { Delete, Edit, Save } from "@mui/icons-material";

const CategoryManager = ({ categories, onAddCategory, onDeleteCategory, onEditCategory }) => {
  const [newCategory, setNewCategory] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory)) {
      onAddCategory(newCategory);
      setNewCategory("");
    }
  };

  const handleEdit = (index, value) => {
    setEditIndex(index);
    setEditValue(value);
  };

  const handleSaveEdit = (index) => {
    if (editValue.trim()) {
      onEditCategory(index, editValue);
    }
    setEditIndex(null); 
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: 20,
        left: 180, 
        width: "220px",
        p: 2,
        bgcolor: "white",
        borderRadius: 2,
        boxShadow: 3,
        zIndex: 10,
      }}
    >
      <Typography variant="h6" textAlign="center" gutterBottom>
        📂 Kategori
      </Typography>

      <Box sx={{ display: "flex", gap: 1 }}>
        <TextField
          label="Tambah Kategori"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          size="small"
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleAddCategory}>
          Tambah
        </Button>
      </Box>

      <List sx={{ mt: 2 }}>
        {categories.map((category, index) => (
          <ListItem key={index} sx={{ display: "flex", justifyContent: "space-between" }}>
            {editIndex === index ? (
              <TextField
                size="small"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onBlur={() => handleSaveEdit(index)}
                onKeyDown={(e) => e.key === "Enter" && handleSaveEdit(index)}
                autoFocus
              />
            ) : (
              <Typography
                onDoubleClick={() => handleEdit(index, category)}
                sx={{ flexGrow: 1, cursor: "pointer" }}
              >
                {category}
              </Typography>
            )}

          
            <Box>
              {editIndex === index ? (
                <IconButton size="small" onClick={() => handleSaveEdit(index)}>
                  <Save fontSize="small" />
                </IconButton>
              ) : (
                <IconButton size="small" onClick={() => handleEdit(index, category)}>
                  <Edit fontSize="small" />
                </IconButton>
              )}

              <IconButton size="small" onClick={() => onDeleteCategory(category)}>
                <Delete fontSize="small" />
              </IconButton>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CategoryManager;

import React, { useState } from "react";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import AddTask from "../components/AddTask";
import TaskItem from "../components/TaskItem";
import Sidebar from "../components/Sidebar";
import CategoryManager from "../components/CategoryManager";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState(["Tugas", "Kerja", "Penting"]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddCategory = (newCategory) => {
    setCategories((prev) => [...prev, newCategory]);
  };

  const handleDeleteCategory = (categoryToDelete) => {
    setCategories((prev) => prev.filter((category) => category !== categoryToDelete));
  };

  const handleEditCategory = (index, newCategoryName) => {
    setCategories((prev) => {
      const updatedCategories = [...prev];
      updatedCategories[index] = newCategoryName;
      return updatedCategories;
    });
  };

  const handleAddTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };

  const handleEditTask = (id, updatedTitle, updatedCategory, updatedStatus, updatedDifficulty) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, title: updatedTitle, category: updatedCategory, status: updatedStatus, difficulty: updatedDifficulty }
          : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#f3e8ff" }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1, p: 3, ml: { xs: 0, md: "160px" }, overflow: "auto" }}>
        <Typography variant="h4" textAlign="center" gutterBottom>📅 To-Do List</Typography>


        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <Grid container spacing={1} alignItems="center" sx={{ maxWidth: "300px" }}>
            <Grid item xs={8}>
              <TextField
                label="Cari Tugas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="primary"
                size="small"
                fullWidth
                sx={{ py: 0.5, px: 1, minWidth: "40px" }}
              >
                🔍 Cari
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={2} sx={{ mt: 1 }}>
       
          <Grid item xs={12} md={3}>
            <CategoryManager
              categories={categories}
              onAddCategory={handleAddCategory}
              onDeleteCategory={handleDeleteCategory}
              onEditCategory={handleEditCategory}
            />
          </Grid>

        
          <Grid item xs={12} md={9}>
            <AddTask onAdd={handleAddTask} categories={categories} />

            <Box sx={{ mt: 3, display: "grid", gap: 2, maxWidth: "900px", mx: "auto" }}>
              {filteredTasks.map((task) => (
                <TaskItem 
                  key={task.id} 
                  task={task} 
                  onEdit={handleEditTask} 
                  onDelete={handleDeleteTask} 
                  categories={categories} 
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;

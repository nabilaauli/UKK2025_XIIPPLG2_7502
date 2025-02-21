import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import AddTask from "../components/AddTask";
import TaskItem from "../components/TaskItem";
import Sidebar from "../components/Sidebar";
import CategoryManager from "../components/CategoryManager";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState(["Tugas", "Kerja", "Penting"]);

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

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#f3e8ff" }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1, p: 3, ml: { xs: 0, md: "160px" }, overflow: "auto" }}>
        <Typography variant="h4" textAlign="center" gutterBottom>📅 To-Do List</Typography>

        <Grid container spacing={2} sx={{ mt: 1 }}>
          {/* Kategori Management */}
          <Grid item xs={12} md={3}>
            <CategoryManager
              categories={categories}
              onAddCategory={handleAddCategory}
              onDeleteCategory={handleDeleteCategory}
              onEditCategory={handleEditCategory}
            />
          </Grid>

          {/* To-Do List */}
          <Grid item xs={12} md={9}>
            <AddTask onAdd={handleAddTask} categories={categories} />

            <Box sx={{ mt: 3, display: "grid", gap: 2, maxWidth: "900px", mx: "auto" }}>
              {tasks.map((task) => (
                <TaskItem key={task.id} task={task} onEdit={handleEditTask} onDelete={handleDeleteTask} categories={categories} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;

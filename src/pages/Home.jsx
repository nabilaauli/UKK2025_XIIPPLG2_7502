import React, { useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import AddTask from "../components/AddTask";
import TaskItem from "../components/TaskItem";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleEditTask = (id, updatedTitle, updatedCategory, updatedDeadline, updatedStatus, updatedDifficulty) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, title: updatedTitle, category: updatedCategory, deadline: updatedDeadline, status: updatedStatus, difficulty: updatedDifficulty }
          : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#f3e8ff" }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1, p: 3, ml: "120px", textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>📅 To-Do List</Typography>

        <AddTask onAdd={handleAddTask} />

        <Box sx={{ mt: 2, display: "grid", gap: 2 }}>
          {tasks.map((task) => (
            <Paper key={task.id} sx={{ p: 2 }}>
              <TaskItem task={task} onEdit={handleEditTask} onDelete={handleDeleteTask} />
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

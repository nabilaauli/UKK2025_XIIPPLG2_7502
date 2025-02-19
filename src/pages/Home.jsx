import React, { useState } from "react";
import AddTask from "../component/AddTask";
import TaskItem from "../component/TaskItem";
import Sidebar from "../component/Sidebar";
import "../pages/Home.css"; 

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
    <div className="home-container">
      <Sidebar /> {}

      <main className="main-content">
        <h1>📅 To-Do List</h1>
        <AddTask onAdd={handleAddTask} />
        <div className="task-list">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} onEdit={handleEditTask} onDelete={handleDeleteTask} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;

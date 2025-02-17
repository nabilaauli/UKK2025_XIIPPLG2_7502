import React, { useState } from "react";
// import AddTask from "../components/AddTask";
// import TaskItem from "../components/TaskItem";

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

  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <h2>📌 Menu</h2>
        <ul>
          <li>🏠 Home</li>
          <li>📋 Tasks</li>
        </ul>
      </aside>

      <main style={styles.main}>
        <h1>📅 To-Do List</h1>
        <AddTask onAdd={handleAddTask} />
        <div style={styles.taskList}>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} onEdit={handleEditTask} />
          ))}
        </div>
      </main>
    </div>
  );
};

const styles = {
  container: { display: "flex", height: "100vh", backgroundColor: "#f5e6ff" },
  sidebar: { width: "200px", padding: "20px", backgroundColor: "#a68ee6", color: "white" },
  main: { flex: 1, padding: "20px" },
  taskList: { marginTop: "20px", display: "grid", gap: "10px" },
};

export default Home;


import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProjectForm from "./components/ProjectForm";
import Login from "./pages/Login";
import Home from "./pages/Home";
import './App.css';


function App() {

  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState(0);


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;


  return (

    <div className="app">
    <NavBar user={user} setUser={setUser} />
    <main>
      <Routes>
        <Route path="/" element={
        <Home 
        user={user} 
        projects={projects}
        setProjects={setProjects}
        project={project}
        setProject={setProject}
        tasks={tasks}
        setTasks={setTasks}
        task={task}
        setTask={setTask}
        />} />
        <Route path="/new-project" element={<ProjectForm user={user}/>}/>
      </Routes>
    </main>
    </div>

  );
}

export default App;


import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import './App.css';


function App() {

  const [user, setUser] = useState(null);

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
        <Route path="/" element={<Home user={user} />} />
        {/* <Route path="/create" element={<Create user={user}/>}/>
        <Route path="/create-project" element={<NewProject user={user}/>}/>
        <Route path="/delete-project" element={<DeleteProject user={user}/>}/>
        <Route path="/delete-task" element={<DeleteTask user={user}/>}/> */}
      </Routes>
    </main>
    </div>

  );
}

export default App;

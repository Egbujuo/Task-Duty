import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import CreateTask from "./Pages/CreateTask";
import EditTask from "./Pages/EditTask";
import AllTasks from "./Pages/AllTasks";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import { useEffect } from "react";

function App() {


  let handleCreateTask = async (newTask) => {
    let response = await fetch("http://127.0.0.1:8000/api/tasks/create/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    let finalData = await response.json();
    console.log(finalData);
  };

  let handleEditTask = async (id, updateTask) => {
    let response = await fetch(`http://127.0.0.1:8000/api/tasks/${id}/`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateTask),
    });
    let finalData = await response.json();
    console.log(finalData);
  };

  let handleDeleteTask = async (id) => {
    let response = await fetch(`http://127.0.0.1:8000/api/tasks/${id}/`, {
      method: "DELETE",

    });
    let finalData = await response.json();
    console.log(finalData);

    // fetch(`http://127.0.0.1:8000/api/tasks/${id}/`, {
    //   method: "DELETE",
    // })
    //   .then((res) => res.json())
    //   .then((json) => {
    //     console.log(json);
    //   });
  };

  // const refreshPage = ()=>{
  //   window.location.reload(false)
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/all-tasks"
            element={
              <AllTasks
                handleDeleteTask={handleDeleteTask}
                // refreshPage={refreshPage}
              />
            }
          />
          <Route
            path="/create-task"
            element={<CreateTask handleCreateTask={handleCreateTask} />}
          />
          <Route
            path="/edit-task/:id"
            element={<EditTask handleEditTask={handleEditTask} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

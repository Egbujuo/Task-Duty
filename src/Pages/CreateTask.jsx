import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTask = ({ handleCreateTask }) => {
  const navigate = useNavigate();
  const [newTask, setNewTask] = useState({
    task_title: "",
    description: "",
    tags_type: 1,
  });
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreateTask(newTask);
          setTimeout(() => {
            navigate("/all-tasks");
          }, 3000);
        }}
        action=""
        className="form-group"
      >
        <div className="d-flex align-items-center gap-2 mb-4">
          <p>{"<"}</p>
          <p>New Task</p>
        </div>

        <div className="mb-4">
          <label htmlFor="title">Title</label>
          <input
            onChange={(e) => {
              setNewTask({ ...newTask, task_title: e.target.value });
            }}
            className="form-control"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description">Description</label>
          <textarea
            onChange={(e) => {
              setNewTask({ ...newTask, description: e.target.value });
            }}
            className="form-select"
            name=""
            id="description"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="tags">Tags</label>
          <select
            onChange={(e) => {
              setNewTask({ ...newTask, tags_type: Number(e.target.value) });
            }}
            name=""
            id="tags"
            className="form-select"
          >
            <option value=""></option>
            <option value="1">Urgent</option>
            <option value="2">Important</option>
          </select>
        </div>
        <button className="btn bg-purple tc-white w-100">Done</button>
      </form>
    </div>
  );
};

export default CreateTask;

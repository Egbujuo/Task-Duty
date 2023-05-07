import React from "react";
import { useState } from "react";
import { useEffect, } from "react";
import { Link, useNavigate } from "react-router-dom";
import editIcon from "../Images/clarity_note-edit-line.png";
import deleteIcon from "../Images/fluent_delete-24-regular.png";

const AllTasks = ({ handleDeleteTask }) => {
    const navigate = useNavigate()
    useEffect(()=>{
        // refreshPage()
    },[])
    const [data, setData] = useState({
        allTasks: [],
      });
    
      useEffect(() => {
        let fetchData = async (url) => {
          let response = await fetch(url);
          let rData = await response.json();
          console.log(rData);
          setData({ ...data, allTasks: rData });
        };
        fetchData("http://127.0.0.1:8000/api/tasks/");
      }, []);
  return (
    <div className="all-tasks d-flex flex-column gap-2 pt-5">
      <div className="d-flex justify-content-between pb-1 pt-1 above-task">
        <h1>My Tasks</h1>
        <Link className="text-decoration-none fw-bold" to="/create-task">
          + Add new task
        </Link>
      </div>
      {data.allTasks.map((task) => {
        const { id, task_title, description, tags_type } = task;
        return (
          <div className="each-task p-2" key={id}>
            <div className="d-flex justify-content-between align-items-baseline pb-1 pt-1">
                <div>
              {tags_type === 1 ? <small style={{color: '#f38383'}} >Urgent</small> : <small style={{color: '#73C3A6'}} >Important</small> }
            </div>
              <div>
                <Link
                  to={`/edit-task/${id}`}
                  className="btn bg-purple tc-white me-2"
                >
                  <img src={editIcon} alt="" /> Edit
                </Link>
                <button
                  style={{ border: "1px solid #974fd0" }}
                  className="btn tc-purple fw-bold"
                  onClick={() => {
                    handleDeleteTask(id);
                    // console.log(handleDeleteTask);
                  }}
                >
                  {" "}
                  <img src={deleteIcon} alt="" /> Delete
                </button>
              </div>
            </div>
            <hr />
            <div className="text-start">
              <h1>{task_title}</h1>
              <p>{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllTasks;

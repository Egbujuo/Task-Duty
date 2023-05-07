import React from "react";
import image from '../Images/lpi-img.png'
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <div className="container container-fluid d-sm-flex  align-items-center">
      <div className="pb-5 pt-5 text-md-start flex-md-grow-3">
        <h1>Manage your Tasks on <span className="tc-purple">TaskDuty</span></h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          commodi voluptas vero ea aperiam, veniam nostrum sit tenetur ex
          debitis beatae molestias tempore. Inventore ut dolor saepe odio eius
          nulla.
        </p>
        <Link to='/all-tasks' className='btn btn-lg bg-purple tc-white'>Go to my Tasks</Link>
      </div>
      <img src={image} className="w-75  flex-md-grow-1" alt="" />
    </div>
  );
};

export default Landing;

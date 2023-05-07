import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import image from "../Images/Group 1.png";
import image2 from "../Images/Group 7.png";

const Navbar1 = () => {
  return (
    <div>
      <div>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <div>
              <Navbar.Brand href="/" className="ps-5">
                {" "}
                <img src={image} alt="" />
                TaskDuty
              </Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <div className="name">
                <Nav
                  className="me-auto my-2 my-lg-0 "
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <NavDropdown.Item href="/all-tasks">
                    <h4 className="all">All Task</h4>{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/create-task">
                    <h4 className="create">Create Task</h4>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/create-task">
                    <img src={image2} alt="" />
                  </NavDropdown.Item>
                </Nav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Navbar1;

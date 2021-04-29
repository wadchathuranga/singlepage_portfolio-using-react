import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Logo1 from '../../assets/icons/logo.png'
import Logo2 from "../../assets/icons/dcpro_logo.png";
import "./mynavbar.style.css";

const MyNavbar = () => {
  return (
    <>
      <Navbar
        fixed="top"
        variant="dark"
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
        <Navbar.Brand href="#home">
          <img className="logo" src={Logo2} alt="My Portfolio Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MyNavbar;

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Img from '../img/logo.svg';
import './Nav.css'
import SectionOne from '../SectionOne/SectionOne';



const nav = () => {
 
    return (
      <div >
      <div className="coloring mansurol">
        <Navbar collapseOnSelect   expand="sm" >
          <div className="container">
        <Navbar.Brand  to="/home">
          <img  src={Img} width="86.19" height="19" alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav ml-auto text-center fontsize  ">
            <Nav.Link className="NavlinkStyle" to="/home">Home</Nav.Link>
            <Nav.Link className="NavlinkStyle" to="/about">About</Nav.Link>
            <Nav.Link className="NavlinkStyle"  to="/contact">Features</Nav.Link>
            <Nav.Link className="NavlinkStyle" to="/home">Roadmap</Nav.Link>
            <Nav.Link className="NavlinkStyle" to="/about">Team</Nav.Link>
            <Nav.Link className="NavlinkStyle"  to="/contact">News</Nav.Link>
            <Nav.Link className="NavlinkStyle" to="/contact">FAQs</Nav.Link>
            <Nav.Link className="NavlinkStyle" to="/contact">sing in</Nav.Link>
            
            
          </Nav>
          
        </Navbar.Collapse>
        </div>
      </Navbar>
      <div>
      <SectionOne/>
      </div>
      
       
      </div>
     

      </div>
    );
};

export default nav;
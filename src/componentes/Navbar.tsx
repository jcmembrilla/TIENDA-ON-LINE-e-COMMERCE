import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, FormControl } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Logo from "../assets/shopIcon.png";
import Carrito from "../assets/carrito.png";

import "../App.css";


interface NavBarProps {
  brand: string;
}

const NavBar: React.FC<NavBarProps> = ({ brand }) => {
  return (
    <Navbar expand="md" className="d-flex align-items-center justify-content-center">
      <NavLink to="/" className="nav-link-logo ">
          <Image src={Logo} alt="ShopImg" className="logo" />
      </NavLink>
          <div className="d-flex align-items-center">
            <Image src={Carrito} alt="Carrito" className="carrito" />
            <div className="search-wrapper ">
              <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
              <i className="search-icon"></i>
            </div>
          </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2 bg-danger" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto d-flex align-items-center justify-content-center">
            <NavLink to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/tecnologia" className="nav-link" activeClassName="active">
              Tecnologia
            </NavLink>
            <NavLink to="/muebles" className="nav-link" activeClassName="active">
              Muebles
            </NavLink>
            <NavLink to="/combo " className="nav-link" activeClassName="active">
              Combo
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        
    </Navbar>
  );
};

export default NavBar;


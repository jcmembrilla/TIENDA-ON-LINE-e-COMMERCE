import { NavLink} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Logo from '../assets/shopIcon.png'
import '../App.css'


interface NavBarProps {
  brand: string;
}

const NavBar: React.FC<NavBarProps> = ({ brand }) => {
  return (
    <Navbar expand="lg" className="transparent-navbar">
      <Navbar.Brand href="#home">{brand}</Navbar.Brand>
        <Nav.Link as={NavLink} to="/" className="nav-link-logo">
          <Image src={Logo} alt="ShopImg" className="logo" />
        </Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink to="/" className="nav-link" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/electrodomesticos" className="nav-link" activeClassName="active">
            Electrodomésticos
          </NavLink>
          <NavLink to="/muebles" className="nav-link" activeClassName="active">
            Muebles
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;


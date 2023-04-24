import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

interface NavBarProps {
  brand: string;
}

const NavBar: React.FC<NavBarProps> = ({ brand }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">{brand}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/electrodomesticos">
            Electrodomésticos
          </Nav.Link>
          <Nav.Link as={Link} to="/muebles">
            Muebles
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

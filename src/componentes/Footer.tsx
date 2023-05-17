import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} sm={6}>
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/electrodomesticos">Electrodomesticos</a>
              </li>
              <li>
                <a href="/muebles">Muebles</a>
              </li>
              <li>
                <a href="/servicios">Servicios</a>
              </li>
              <li>
                <a href="/contacto">Contacto</a>
              </li>
            </ul>
          </Col>
          <Col md={4} sm={6}>
            <h5>Contacto</h5>
            <address>
              123 Calle Principal <br />
              Ciudad, País <br />
              Teléfono: (123) 456-7890
            </address>
          </Col>
          <Col md={4} sm={12}>
            <h5>Síguenos en redes sociales</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.facebook.com/">Facebook</a>
              </li>
              <li>
                <a href="https://www.twitter.com/">Twitter</a>
              </li>
              <li>
                <a href="https://www.instagram.com/">Instagram</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <Container>
          <Row>
            <Col>
              <p className="text-center">© {new Date().getFullYear()} YourShop. Todos los derechos reservados.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;

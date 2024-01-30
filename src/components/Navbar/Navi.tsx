import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Image, Nav, NavDropdown, Navbar} from "react-bootstrap";
import '../Navbar/Navi.css';
import { Link } from "react-router-dom";

export default function Navi() {
  return (
    <Navbar expand="sm" className="bg-body-tertiary">
    <Container >
         <Image src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg" width={"100px"} className="m-3"></Image>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto" >
          <Link to="#home" className="p-4">Anasayfa</Link>
          <Link to="#link" className="p-4">Profilim</Link>
          <Link to="#home" className="p-4">Değerlendirmeler</Link>
          <Link to="#link" className="p-4">Katalog</Link>
          <Link to="#home" className="p-4">Takvim</Link>
          <Link to="#link" className="p-4">İstanbul Kodluyor</Link>
        </Nav>

        <Nav className="d-flex align-items-center">
          <Nav.Link className="text-white me-3">
            <FontAwesomeIcon icon={faSave} style={{ color: 'purple' }} />
          </Nav.Link>
          <NavDropdown title="İsim Soyisim" id="profile-dropdown">
            <NavDropdown.Item>Profil Bilgileri</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Oturumu Kapat</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
// src/components/MobileMenu.jsx
import { Offcanvas, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function MobileMenu({ show, handleClose }) {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end" className="mobile-offcanvas">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="fw-bold">Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="flex-column gap-3">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/services", label: "Services" },
            { to: "/blog", label: "Blog" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={handleClose}
              className="nav-link fs-5 text-dark"
            >
              {label}
            </NavLink>
          ))}
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default MobileMenu;

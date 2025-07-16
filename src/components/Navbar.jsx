import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar as BSNavbar, Nav, Container, Button } from "react-bootstrap";
import "./Navbar.css";
import useMediaQuery from './useMediaQuery'; // Ensure this hook is in './useMediaQuery.js'

function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const isMobile = useMediaQuery('(max-width: 518px)'); // Check for mobile

  const toggleMenu = () => setExpanded((prev) => !prev);
  const closeMenu = () => setExpanded(false);

  return (
    <div className="navbar-wrapper">
      <BSNavbar
        expand="lg" // Hamburger appears below 'lg' (992px)
        expanded={expanded}
        className="modern-navbar px-4 py-2 shadow-sm"
      >
        <Container fluid className="navbar-inner-container">
          <BSNavbar.Brand
            as={Link}
            to="/"
            className="navbar-logo-brand p-0"
            onClick={closeMenu}
          >
            <img
              src={isMobile ? "/assets/images/logo-newbgslogan.png" : "/assets/images/logo-newbg.png"}
              alt="logo"
              // Adjusted width and added max-height for mobile logo
              width={isMobile ? 150 : 70} // Increased mobile logo width from 120 to 150
              height={isMobile ? 50 : 'auto'} // Added fixed height for mobile logo
              className="logo-img"
            />
          </BSNavbar.Brand>

          <div className="brand-text-center-container flex-grow-1 align-items-center justify-content-center">
            <span className="brand-name-main">
              SKYCONNECT <span className="text-warning">NEXUS</span>
            </span>
            <span className="brand-slogan">
              EMPOWERING GLOBAL COMMUNICATION
            </span>
          </div>

          <BSNavbar.Toggle
            aria-controls="main-navbar"
            onClick={toggleMenu}
          >
            {expanded ? (
              <span className="navbar-close-icon">×</span>
            ) : (
              <span className="navbar-toggle-icon">☰</span>
            )}
          </BSNavbar.Toggle>

          <BSNavbar.Collapse id="main-navbar">
            <Nav className="mx-auto gap-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/blog", label: "Blog" },
              ].map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `nav-link fw-medium ${
                      isActive ? "active-link" : "inactive-link"
                    }`
                  }
                  onClick={closeMenu}
                >
                  {label}
                </NavLink>
              ))}
            </Nav>
            <Button
              as={Link}
              to="/contact"
              variant="warning"
              className="rounded-pill fw-semibold px-4 ms-lg-3"
              onClick={closeMenu}
            >
              Contact
            </Button>
          </BSNavbar.Collapse>
        </Container>
      </BSNavbar>
    </div>
  );
}

export default Navbar;
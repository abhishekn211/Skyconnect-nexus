import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    
    <footer className="bg-dark text-light pt-5 pb-4">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="text-warning fw-bold mb-3">SKYCONNECT NEXUS</h5>
            <p>
              Your trusted partner in BPO, Consultancy, and Affiliate Marketing
              solutions.
            </p>
          </Col>

          <Col md={4} className="mb-4">
            <h6 className="text-uppercase fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/blog", label: "Blog" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="footer-link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h6 className="text-uppercase fw-semibold mb-3">Contact</h6>
            <p><FaMapMarkerAlt className="me-2" /> SKYCONNECTNEXUS LLC, India</p>
            <p><FaMapMarkerAlt className="me-2" /> Sheridan, WY 82801 – USA Office</p>
            <p><FaPhone className="me-2" /> Coming soon</p>
            <p><FaEnvelope className="me-2" /> info@skyconnectnexus.com</p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-light"><FaFacebookF /></a>
              <a href="#" className="text-light"><FaTwitter /></a>
              <a href="#" className="text-light"><FaLinkedinIn /></a>
            </div>
            <small className="text-light d-block mt-2">
              MCA Code: 82200 | SAC: 998599 | GST Exempt under LUT (Export of Services)
            </small>
          </Col>
        </Row>

        <hr className="border-light mt-4" />
        <div className="text-center text-light small">
          © {new Date().getFullYear()} SKYCONNECT NEXUS. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

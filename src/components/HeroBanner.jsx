import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HeroBanner.css";

function HeroBanner() {
  return (
    <div className="hero-section d-flex align-items-center">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10}>
            <h1 className="display-4 fw-bold  mb-4">
              Smart BPO Solutions for Global Growth
              <br />
              with <span className="highlight">SKYCONNECT NEXUS</span>
            </h1>
            <p className="lead  mb-4">
              From international calling to HIPAA-compliant healthcare support —
              we power customer engagement & business transformation.
            </p>

            <Link to="/services">
              <Button
                size="lg"
                variant="warning"
                className="px-4 py-2 fw-semibold"
              >
                Explore Our Services
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroBanner;

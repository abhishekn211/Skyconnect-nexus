import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaUsers, FaCogs, FaLock, FaCheckCircle,
  FaGlobe, FaHandshake, FaChartLine
} from "react-icons/fa";
import "./About.css"; // custom styles if needed

function About() {
  return (
    <section className="about-section py-5 mt-custom pt-5 bg-white">
      <Container>

        {/* HERO BLOCK */}
        <Row className="align-items-center mb-5">
          <Col md={6} className="mb-4 mb-md-0">
            <img
              src="/assets/images/about_image_1.jpeg"
              alt="About SKYCONNECT NEXUS"
              className="img-fluid rounded-4 shadow"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold display-4 text-dark mb-3">
              About <span className="text-warning">SKYCONNECT NEXUS</span>
            </h2>
            <p className="fs-5 text-muted">
              SKYCONNECT NEXUS is a results-driven outsourcing and consulting partner offering
              multilingual call center services, smart business support, and affiliate campaign execution
              — all under one tech-powered roof.
            </p>
            <p className="text-muted">
              We bring together human intelligence and technology to help startups, SMBs, and enterprises
              streamline operations and scale faster — across healthcare, insurance, real estate, and more.
            </p>
          </Col>
        </Row>

        {/* WHO WE ARE ICONS */}
        <Row className="text-center mb-5 gy-4">
          {[
            { icon: <FaUsers />, title: "People First", desc: "Skilled multilingual agents." },
            { icon: <FaCogs />, title: "Tech-Led", desc: "Smart dialers, CRMs, and automations." },
            { icon: <FaLock />, title: "Secure & Compliant", desc: "HIPAA, KYC & GDPR adherence." },
          ].map(({ icon, title, desc }, idx) => (
            <Col md={4} key={idx}>
              <div className="fs-1 text-warning mb-2">{icon}</div>
              <h6 className="fw-semibold">{title}</h6>
              <p className="text-muted">{desc}</p>
            </Col>
          ))}
        </Row>

        {/* CORE CAPABILITIES */}
        <section className="py-2 bg-white shadow-sm border rounded-4 px-md-4 px-2 mb-5">
          <h3 className="text-center fw-bold mb-4 text-primary">Our Core Capabilities</h3>
          <div className="mx-auto" style={{margin:"50px", maxWidth: "1000px" }}>
          <Row className="gy-4">
            {[
              "Inbound & Outbound International Calling",
              "Third-party Lead Qualification & Sales Support",
              "Healthcare/DME/Insurance Form Assistance",
              "Data Verification, Order Processing & CRM Workflows",
              "HIPAA-Compliant Communication for Medical BPO",
            ].map((capability, idx) => (
              <Col md={6} key={idx} >
                <div className="d-flex align-items-start">
                  <FaCheckCircle className="text-success fs-5 me-3 mt-1" />
                  <p className="mb-0 text-dark">{capability}</p>
                </div>
              </Col>
            ))}
          </Row>
          </div>
        </section>

        {/* INDUSTRIES WE SUPPORT */}
        <section className="py-2 bg-white shadow-sm border rounded-4 px-md-4 px-2 mb-5">
          <h3 className="text-center fw-bold mb-4 text-primary">Industries We Support</h3>
          <div className="mx-auto" style={{margin:"50px", maxWidth: "1000px" }}>
          <Row className="gy-4">
            {[
              "Durable Medical Equipment (DME)",
              "Medicare Advantage & Final Expense Insurance",
              "Home Solar & Real Estate Cold Calling",
              "Auto & Health Insurance Lead Campaigns",
              "Market Research Surveys & Polling",
            ].map((industry, idx) => (
              <Col md={6} key={idx}>
                <div className="d-flex align-items-start">
                  <FaCheckCircle className="text-success fs-5 me-3 mt-1" />
                  <p className="mb-0 text-dark">{industry}</p>
                </div>
              </Col>
            ))}
          </Row>
          </div>
        </section>

        {/* TECHNOLOGY & INFRASTRUCTURE */}
        <section className="py-2 bg-white shadow-sm border rounded-4 px-md-4 px-2 mb-5">
          <h3 className="text-center fw-bold mb-4 text-primary">Technology & Infrastructure</h3>
          <div className="mx-auto" style={{margin:"50px", maxWidth: "1000px" }}>
          <Row className="gy-4">
            {[
              "VICIdial / Xencall Cloud Dialers",
              "Secure VoIP & CRM Integrations",
              "Call Recording & Compliance Logs",
              "Encrypted Lead Storage Systems",
              "Remote Login for US Shifts",
            ].map((tech, idx) => (
              <Col md={6} key={idx}>
                <div className="d-flex align-items-start">
                  <FaCheckCircle className="text-success fs-5 me-3 mt-1" />
                  <p className="mb-0 text-dark">{tech}</p>
                </div>
              </Col>
            ))}
          </Row>
          </div>
        </section>

        {/* COMPANY SNAPSHOT */}
        <Card className="bg-dark text-light text-center py-4 mt-5 border-0 rounded-4">
          <Card.Body>
            <h4 className="fw-bold text-warning mb-3">Company Snapshot</h4>
            <p className="mb-2">
              <strong>MCA Code:</strong> 82200 &nbsp;|&nbsp;
              <strong>SAC:</strong> 998599 &nbsp;|&nbsp;
              <strong>GST:</strong> Exempt under LUT
            </p>
            <p className="mb-0">
              India: SKYCONNECT NEXUS PVT. LTD. &nbsp;|&nbsp; USA: SKYCONNECT LLC &nbsp;|&nbsp;
              <a href="https://skyconnectnexus.com" className="text-warning text-decoration-none">
                skyconnectnexus.com
              </a>
            </p>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
}

export default About;

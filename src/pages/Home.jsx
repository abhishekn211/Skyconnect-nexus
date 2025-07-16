import HeroBanner from "../components/HeroBanner";
import ServiceCard from "../components/ServiceCard";
import { Container, Row, Col } from "react-bootstrap";
import { FaHeadset, FaLightbulb, FaShareAlt } from "react-icons/fa";
import Testimonials from "../components/Testimonals";

function Home() {
  return (
    <>
      <HeroBanner />

      {/* Services Section */}
      <section className="py-5 bg-white">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Services</h2>
            <p className="text-muted">
              Our core services are designed for high-scale operations, global
              clients, and regulated sectors.
            </p>
          </div>
          <Row className="g-4">
            <Col md={4}>
              <ServiceCard
                icon={<FaHeadset />}
                title="Inbound & Outbound Calling"
                description="24/7 multilingual support, warm transfers, lead filtering, and international appointment handling."
              />
            </Col>
            <Col md={4}>
              <ServiceCard
                icon={<FaLightbulb />}
                title="Client Support & Consulting"
                description="Sales assistance, form submissions (DME/Insurance), and strategic business workflows backed by domain experts."
              />
            </Col>
            <Col md={4}>
              <ServiceCard
                icon={<FaShareAlt />}
                title="Affiliate Campaigns"
                description="Performance-based affiliate lead generation, onboarding, and result-focused analytics across channels."
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Choose Us Section */}
      <section className="py-5 why-us-section">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="fw-bold display-6">
                Why Businesses Choose{" "}
                <span className="text-warning">SKYCONNECT NEXUS</span>
              </h2>
              <p className="text-muted mt-3">
                Partnering with us means unlocking premium customer engagement,
                tech-enabled operations, and next-level business growth —
                without the high cost.
              </p>
            </Col>
          </Row>

          <Row className="align-items-center gx-lg-5 gy-4 flex-md-row-reverse">
            <Col md={6}>
              <ul className="custom-checklist pe-md-3">
                <li>
                  <strong>🌍 Global BPO Expertise:</strong> Multilingual agents
                  and seamless back-office solutions.
                </li>
                <li>
                  <strong>⚡ Scalable Operations:</strong> We scale from 10 to
                  10,000 users — instantly.
                </li>
                <li>
                  <strong>🧠 Business Intelligence:</strong> Real-time analytics
                  + domain-driven consulting.
                </li>
                <li>
                  <strong>🔐 Security & Reliability:</strong> Secured
                  infrastructure, 24/7 availability.
                </li>
                <li>
                  <strong>🚀 Growth-First Tech:</strong> AI-powered automation
                  and integrated digital tools.
                </li>
              </ul>
            </Col>

            <Col md={6} className="d-flex justify-content-center">
              <img
                src="/assets/images/home_image_2.jpeg"
                alt="Why Choose Us"
                className="img-fluid rounded-4 shadow-sm bg-white p-2 why-us-img"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-5 bg-white">
  <Container>
    <div className="text-center mb-4">
      <h2 className="fw-bold">Industries We Serve</h2>
      <p className="text-muted">Expertise across high-impact verticals requiring smart calling & compliance.</p>
    </div>
    <Row className="text-center g-4">
      {[
        "Durable Medical Equipment (DME)",
        "Medicare Advantage Plans",
        "Final Expense Insurance",
        "Solar Campaigns",
        "Health/Auto Insurance Leads",
        "Real Estate (Cold Calling)",
        "Market Research Surveys"
      ].map((item, idx) => (
        <Col md={4} key={idx}>
          <div className="p-3 border rounded bg-light h-100">
            <h6 className="fw-semibold">{item}</h6>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
</section>


      {/* Testimonials Section */}
      <Testimonials />
    </>
  );
}

export default Home;

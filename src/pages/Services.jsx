import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import CountUp from "react-countup";
import Slider from "react-slick";
import { FaHeadset, FaLightbulb, FaShareAlt } from "react-icons/fa";
import "./Services.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GetInTouch from "../components/GetInTouch";

function Services() {
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="services-section py-5 mt-custom pt-5 bg-white">
      <Container>
        {/* Intro */}
        <Row className="mb-5 text-center">
          <Col lg={8} className="mx-auto">
            <h2 className="fw-bold display-6">Our Services</h2>
            <p className="text-muted">
              SKYCONNECT NEXUS delivers full-spectrum outsourcing, consulting, and affiliate performance marketing — all tailored to scale.
            </p>
          </Col>
        </Row>

        {/* Counters */}
        <Row className="text-center mb-5">
          <Col md={4}>
            <h3 className="fw-bold text-primary">
              <CountUp end={25000} duration={3} />+
            </h3>
            <p className="text-muted">Calls Handled Monthly</p>
          </Col>
          <Col md={4}>
            <h3 className="fw-bold text-primary">
              <CountUp end={98} duration={2.5} />%
            </h3>
            <p className="text-muted">Client Retention</p>
          </Col>
          <Col md={4}>
            <h3 className="fw-bold text-primary">
              <CountUp end={100} duration={3} />%
            </h3>
            <p className="text-muted">HIPAA / KYC Compliance</p>
          </Col>
        </Row>

        {/* Tabs */}
        <Tab.Container defaultActiveKey="bpo">
          <Row className="mb-4">
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="bpo">Call Centre / BPO</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="consulting">Business Consulting</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="affiliate">Affiliate Marketing</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="bpo">
                  <h4 className="fw-semibold text-warning mb-3">Call Centre / BPO</h4>
                  <p className="text-muted">
                    24/7 multilingual support, lead verification, order handling, and third-party sales — all delivered with compliance and care.
                  </p>
                  <ul className="text-muted">
                    <li>Inbound & outbound international calling</li>
                    <li>Client appointment setting & lead qualification</li>
                    <li>Form-filling assistance for DME / Insurance</li>
                  </ul>
                </Tab.Pane>

                <Tab.Pane eventKey="consulting">
                  <h4 className="fw-semibold text-warning mb-3">Business Consulting</h4>
                  <p className="text-muted">
                    We help scale startups and enterprises alike with workflow design, hiring strategies, and compliance integrations.
                  </p>
                  <ul className="text-muted">
                    <li>Remote ops & staffing playbooks</li>
                    <li>Process digitization & analytics consulting</li>
                    <li>US-compliant shift alignment support</li>
                  </ul>
                </Tab.Pane>

                <Tab.Pane eventKey="affiliate">
                  <h4 className="fw-semibold text-warning mb-3">Affiliate Marketing</h4>
                  <p className="text-muted">
                    Drive results through performance campaigns, digital lead tracking, and result-based payouts.
                  </p>
                  <ul className="text-muted">
                    <li>Partner onboarding & campaign setup</li>
                    <li>Realtime lead reporting dashboards</li>
                    <li>End-to-end affiliate funnel optimization</li>
                  </ul>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>

        {/* Carousel */}
        <Row className="mt-5">
          <Col>
            <h4 className="text-center fw-bold mb-4">Explore Our Specialties</h4>
            <Slider {...sliderSettings}>
              <div>
                <h5 className="text-center px-4">
                  <strong className="text-warning">Inbound Support</strong><br />
                  Enhance CX with multilingual agents, 24/7 availability, and omnichannel routing.
                </h5>
              </div>
              <div>
                <h5 className="text-center px-4">
                  <strong className="text-warning">Outbound Campaigns</strong><br />
                  Lead generation, cold calling, and appointment setting with data-backed scripts.
                </h5>
              </div>
              <div>
                <h5 className="text-center px-4">
                  <strong className="text-warning">Healthcare Processes</strong><br />
                  Medical/DME form fill-up, prior authorizations, and KYC in HIPAA-secure systems.
                </h5>
              </div>
              <div>
                <h5 className="text-center px-4">
                  <strong className="text-warning">Affiliate Funnel Design</strong><br />
                  High-conversion campaigns with real-time tracking and payout automation.
                </h5>
              </div>
              <div>
                <h5 className="text-center px-4">
                  <strong className="text-warning">CRM & Automation</strong><br />
                  Salesforce, Zoho, HubSpot integration with cloud dialer syncing.
                </h5>
              </div>
            </Slider>
          </Col>
        </Row>

        {/* CTA */}
        <Row className="mt-5 text-center">
          <Col>
            <h4 className="mb-3">Let’s take your business to the next level 🚀</h4>
          </Col>
        </Row>
      </Container>
      <GetInTouch/>
    </section>
    
  );
}

export default Services;

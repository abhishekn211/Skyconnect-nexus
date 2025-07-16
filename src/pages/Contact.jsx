import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Swal from "sweetalert2";
import "./Contact.css";
import { useRef } from "react";

function Contact() {
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    try {
      const res = await fetch("mail.php", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        formRef.current.reset();
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thanks for reaching out to us.",
          confirmButtonColor: "#f0ad4e",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again later.",
        confirmButtonColor: "#f0ad4e",
      });
    }
  };

  return (
    <section className="contact-page-section py-5 mt-custom pt-5">
      <Container>
        {/* Hero Heading */}
        <Row className="text-center mb-5">
          <Col lg={8} className="mx-auto">
            <h2 className="fw-bold display-6">
              Get in Touch with <span className="text-warning">SKYCONNECT NEXUS</span>
            </h2>
            <p className="text-muted fs-5">
              We're here to support your business 24/7. Let’s talk.
            </p>
          </Col>
        </Row>

        {/* Form & Info */}
        <Row className="gy-5 align-items-stretch">
          {/* Contact Info */}
          <Col md={5} className="bg-white shadow-sm p-4 rounded-4 contact-info-box">
            <h5 className="fw-semibold mb-3">Contact Information</h5>
            <p className="text-muted">
              <FaMapMarkerAlt className="me-2 text-primary" />
              SKYCONNECTNEXUS LLC, India
            </p>
            <p className="text-muted">
              <FaMapMarkerAlt className="me-2 text-primary" />
              Sheridan, WY 82801 ,SKYCONNECTNEXUS LLC, United States
            </p>
            <p className="text-muted">
              <FaPhone className="me-2 text-primary" /> Will be Updated Soon
            </p>
            <p className="text-muted">
              <FaEnvelope className="me-2 text-primary" /> reach@skyconnectnexus.com
            </p>
            <div className="mt-3 d-flex gap-3">
              <a href="#" className="text-dark"><FaFacebookF /></a>
              <a href="#" className="text-dark"><FaTwitter /></a>
              <a href="#" className="text-dark"><FaLinkedinIn /></a>
            </div>
          </Col>

          {/* Contact Form */}
          <Col md={7}>
            <div className="p-4 bg-white shadow-sm rounded-4">
              <h5 className="fw-semibold mb-3">Send us a Message</h5>
              <Form ref={formRef} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="formName">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" name="name" placeholder="Your name" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" name="email" placeholder="name@example.com" required />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control type="text" name="phone" placeholder="+91 9876543210" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" name="subject" placeholder="Let us know how we can help you" required />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} name="message" placeholder="Write your message..." required />
                </Form.Group>

                <Button variant="warning" type="submit" className="fw-semibold px-4">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>

        {/* Map (Original restored) */}
        <Row className="mt-5">
          <Col>
            <div className="map-container rounded-4 overflow-hidden shadow-sm">
              <iframe
                title="Skyconnect Nexus USA Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d285.2871254066562!2d-106.95492382864383!3d44.79777607491485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabc2a6d206b%3A0x1887ab0668b2495c!2s30%20N%20Gould%20St%20Suite%20R%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e0!3m2!1sen!2sin!4v1721204230366!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;

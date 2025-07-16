import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import "./GetInTouch.css";
import { useRef } from "react";

function GetInTouch() {
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
          text: "Thanks for contacting us. We'll get back to you shortly.",
          confirmButtonColor: "#f0ad4e",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again later.",
        confirmButtonColor: "#f0ad4e",
      });
    }
  };

  return (
    <section className="get-in-touch-section text-dark">
      <Container className="py-5">
        <Row className="align-items-center g-5">
          {/* Left Info Column */}
          <Col md={6}>
            <h2 className="fw-bold mb-4">Contact Us</h2>
            <p className="text-muted mb-4">
              Have questions or want to discuss how <strong>SKYCONNECT NEXUS</strong> can help your business? Feel free to reach out!
            </p>
            <ul className="list-unstyled text-muted">
              <li className="mb-3 d-flex align-items-start">
                <FaPhoneAlt className="text-warning me-3 mt-1" />
                Will be Updated Soon
              </li>
              <li className="mb-3 d-flex align-items-start">
                <FaEnvelope className="text-warning me-3 mt-1" />
                reach@skyconnectnexus.com
              </li>
              <li className="mb-3 d-flex align-items-start">
                <FaMapMarkerAlt className="text-warning me-3 mt-1" />
                USA | India
              </li>
            </ul>
          </Col>

          {/* Right Form Column */}
          <Col md={6}>
            <div className="p-4 bg-white shadow rounded-4">
              <Form ref={formRef} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col>
                    <Form.Control type="text" name="name" placeholder="Name" required />
                  </Col>
                  <Col>
                    <Form.Control type="email" name="email" placeholder="Email" required />
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Control type="text" name="phone" placeholder="Mobile Number" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="text" name="subject" placeholder="Subject" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control as="textarea" rows={4} name="message" placeholder="Message" required />
                </Form.Group>
                <div className="d-grid">
                  <Button type="submit" variant="warning" className="fw-semibold">
                    Send Message
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default GetInTouch;

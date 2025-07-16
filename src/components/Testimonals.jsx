import { Container, Card } from "react-bootstrap";
import Slider from "react-slick";
import testimonials from "../assets/testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992, // Tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // Phones
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-5 testimonials-section bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">What Our Clients Say</h2>
          <p className="text-muted">Real feedback from our valued partners and customers</p>
        </div>

        <Slider {...settings}>
          {testimonials.map((t, idx) => (
            <div key={idx} className="px-3">
              <Card className="testimonial-card h-100 shadow-sm">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="rounded-circle me-3"
                      width="55"
                      height="55"
                    />
                    <div>
                      <h6 className="mb-0 fw-semibold">{t.name}</h6>
                      <small className="text-muted">{t.title}</small>
                    </div>
                  </div>
                  <Card.Text className="fst-italic text-muted">“{t.quote}”</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
}

export default Testimonials;

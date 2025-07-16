import { Card } from "react-bootstrap";

function ServiceCard({ icon, title, description }) {
  return (
    <Card className="h-100 shadow-sm border-0 service-card">
      <Card.Body className="text-center">
        <div className="service-icon mb-3">{icon}</div>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text className="text-muted">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ServiceCard;

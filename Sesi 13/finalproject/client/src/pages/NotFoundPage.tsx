import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <Container className="py-5">
      <Card>
        <Card.Body>
          <Card.Title>Page Not Found</Card.Title>
          <Link to="/">
            <Button>Return To Homepage</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default NotFoundPage;

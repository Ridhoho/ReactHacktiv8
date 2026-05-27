import { Card } from "react-bootstrap";

type EmptyStateProps = {
  title: string;
};

function EmptyState({ title }: EmptyStateProps) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default EmptyState;

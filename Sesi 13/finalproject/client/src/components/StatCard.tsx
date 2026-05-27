import { Card } from "react-bootstrap";

type StatCardProps = {
  title: string;
  value: string;
  variant?: "success" | "danger";
};

function StatCard({ title, value, variant = "success" }: StatCardProps) {
  return (
    <Card className={`stat-card stat-card-${variant}`}>
      <Card.Body>
        <div className="stat-card-label">
          <span>{title} (Rp Juta)</span>
        </div>
        <div className="stat-card-value">{value}</div>
      </Card.Body>
    </Card>
  );
}

export default StatCard;

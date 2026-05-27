import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import type { CafeType } from "../types/cafe";
import { formatCurrency } from "../utils/formatCurrency";

type CafeCardProps = {
  cafe: CafeType;
};

function CafeCard({ cafe }: CafeCardProps) {
  return (
    <Link to={`/cafes/${cafe.cafeId}`} className="cafe-card-link">
      <Card className="cafe-card h-100">
        <Card.Body className="d-flex flex-column">
          <div className="d-flex justify-content-between gap-3">
            <Card.Title className="cafe-card-title">{cafe.name}</Card.Title>
            <span className="cafe-card-code">{cafe.cafeId}</span>
          </div>

          <div className="cafe-location">
            <p>
              <strong>Kota:</strong> {cafe.city}
            </p>
            <p>
              <strong>Provinsi:</strong> {cafe.province}
            </p>
          </div>

          <hr className="cafe-card-divider" />

          <div className="cafe-metrics">
            <p className="metric-success">
              Penjualan: <strong>{formatCurrency(cafe.sales)}</strong>
            </p>
            <p className="metric-danger">
              Ongkos: <strong>{formatCurrency(cafe.expenses)}</strong>
            </p>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default CafeCard;

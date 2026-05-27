import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { CafeWithDetail } from "../types/cafe";
import { getCafeById } from "../api/cafeApi";
import ErrorState from "../components/ErrorState";
import LoadingState from "../components/LoadingState";
import SalesChart from "../components/SalesChart";
import StatCard from "../components/StatCard";
import { formatCurrency } from "../utils/formatCurrency";

function CafeDetailPage() {
  const [cafe, setCafe] = useState<CafeWithDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showLoading, setShowLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { cafeId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const loadingTimer = setTimeout(() => {
      setShowLoading(true);
    }, 300);

    const getDetailCafe = async () => {
      try {
        setIsLoading(true);
        setShowLoading(false);
        setError(null);

        if (!cafeId) {
          clearTimeout(loadingTimer);
          setShowLoading(false);
          setError("Failed to fetch detail cafe");
          setIsLoading(false);
          return;
        }

        const data = await getCafeById(cafeId, controller.signal);
        setCafe(data);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          return;
        }

        console.error("Cannot get detail cafe", err);
        setError("Failed to fetch detail cafe");
      } finally {
        clearTimeout(loadingTimer);
        setShowLoading(false);

        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    getDetailCafe();

    return () => {
      clearTimeout(loadingTimer);
      controller.abort();
    };
  }, [cafeId]);

  if (isLoading && showLoading) {
    return <LoadingState />;
  }

  if (isLoading) {
    return null;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  if (cafe === null) {
    return <ErrorState message="Cafe detail not found" />;
  }

  if (cafe.detail === null) {
    return (
      <main className="dashboard-page">
        <Container fluid className="dashboard-container">
          <h1 className="detail-title">{cafe.name}</h1>
          <Card className="detail-info-card" key={cafe.cafeId}>
            <Card.Body>
              <Card.Text>Sales: {formatCurrency(cafe.sales)}</Card.Text>
              <Card.Text>Expenses: {formatCurrency(cafe.expenses)}</Card.Text>
            </Card.Body>
          </Card>
          <ErrorState message="Cafe Chart not found" />
          <Link to="/">
            <Button>Back To Homepage</Button>
          </Link>
        </Container>
      </main>
    );
  }

  return (
    <main className="dashboard-page">
      <Container fluid className="dashboard-container detail-container">
        <h1 className="detail-title">{cafe.name}</h1>

        <Row className="g-4 mb-4">
          <Col xs={12} md={6} xl={3}>
            <StatCard title="Sales" value={formatCurrency(cafe.sales)} />
          </Col>
          <Col xs={12} md={6} xl={3}>
            <StatCard
              title="Expenses"
              value={formatCurrency(cafe.expenses)}
              variant="danger"
            />
          </Col>
        </Row>

        <SalesChart detail={cafe.detail} />

        <Link to="/">
          <Button className="mt-4">Back To Homepage</Button>
        </Link>
      </Container>
    </main>
  );
}

export default CafeDetailPage;

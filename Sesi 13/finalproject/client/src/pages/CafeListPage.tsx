import { Col, Container, Form, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { CafeType } from "../types/cafe";
import { getCafes } from "../api/cafeApi";
import CafeCard from "../components/CafeCard";
import EmptyState from "../components/EmptyState";
import ErrorState from "../components/ErrorState";
import LoadingState from "../components/LoadingState";
import StatCard from "../components/StatCard";
import { formatCurrency } from "../utils/formatCurrency";

function CafeListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get("search") || "";

  const [cafes, setCafes] = useState<CafeType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showLoading, setShowLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState(params);
  const [debounceSearch, setDebounceSearch] = useState(params);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceSearch(search);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  useEffect(() => {
    const controller = new AbortController();
    const loadingTimer = setTimeout(() => {
      setShowLoading(true);
    }, 300);

    const query = debounceSearch.trim().toLowerCase();
    if (query) {
      setSearchParams({ search: query }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }

    const loadCafes = async () => {
      try {
        setIsLoading(true);
        setShowLoading(false);
        setError(null);

        const data = await getCafes(query, controller.signal);
        setCafes(data);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          return;
        }

        console.error("Cannot get cafes", err);
        setError("Failed to fetch cafes");
      } finally {
        clearTimeout(loadingTimer);
        setShowLoading(false);

        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    loadCafes();

    return () => {
      clearTimeout(loadingTimer);
      controller.abort();
    };
  }, [debounceSearch, setSearchParams]);

  if (isLoading && showLoading) {
    return <LoadingState />;
  }

  if (isLoading && cafes.length === 0) {
    return null;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  const totalSales = cafes.reduce((total, cafe) => total + cafe.sales, 0);
  const totalExpenses = cafes.reduce((total, cafe) => total + cafe.expenses, 0);

  return (
    <main className="dashboard-page">
      <Container fluid className="dashboard-container">
        <h1 className="dashboard-title">Dashboard Penjualan</h1>

        <Form.Control
          className="dashboard-search"
          type="text"
          placeholder="Cari toko..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <Row className="g-4 mb-4">
          <Col xs={12} md={6}>
            <StatCard title="Total Penjualan" value={formatCurrency(totalSales)} />
          </Col>
          <Col xs={12} md={6}>
            <StatCard
              title="Total Ongkos"
              value={formatCurrency(totalExpenses)}
              variant="danger"
            />
          </Col>
        </Row>

        {cafes.length === 0 ? (
          <EmptyState title="No Cafes Found" />
        ) : (
          <Row className="g-4">
            {cafes.map((cafe) => (
              <Col xs={12} md={6} xl={4} key={cafe.cafeId}>
                <CafeCard cafe={cafe} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </main>
  );
}

export default CafeListPage;

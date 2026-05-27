import { Card } from "react-bootstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import type { CafeDetail } from "../types/cafe";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

type SalesChartProps = {
  detail: CafeDetail;
};

function SalesChart({ detail }: SalesChartProps) {
  const chartData = {
    labels: detail.categories,
    datasets: detail.series.map((item, index) => ({
      label: item.name,
      data: item.data,
      borderColor: index === 0 ? "#4bc0c0" : "#f04b3f",
      backgroundColor:
        index === 0 ? "rgba(75, 192, 192, 0.2)" : "rgba(240, 75, 63, 0.08)",
      borderWidth: 3,
      pointRadius: 4,
      pointHoverRadius: 5,
      tension: 0.25,
      fill: index === 0,
    })),
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: detail.chartTitle,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Card className="chart-card">
      <Card.Header>Sales Trend</Card.Header>
      <Card.Body className="chart-card-body">
        <Line data={chartData} options={chartOptions} />
      </Card.Body>
    </Card>
  );
}

export default SalesChart;

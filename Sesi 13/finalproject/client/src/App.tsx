import { Route, Routes } from "react-router-dom";
import CafeListPage from "./pages/CafeListPage";
import CafeDetailPage from "./pages/CafeDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CafeListPage />} />
      <Route path="/cafes/:cafeId" element={<CafeDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;

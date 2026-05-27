import express from "express";
import cors from "cors";
import "dotenv/config";
import cafeRoutes from "./routes/cafeRoutes.js";
import type {Request, Response} from "express"

const app = express();
const port = process.env.PORT || 3000;
const clientUrl = process.env.CLIENT_URL || "http://localhost:5173";

app.use(
  cors({
    origin: clientUrl,
  }),
);
app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.use("/cafes", cafeRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`);
});

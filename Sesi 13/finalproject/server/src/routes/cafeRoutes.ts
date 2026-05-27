import { Router } from "express";
import { getCafeById, getCafes } from "../controllers/cafeController.js";

const router = Router();

router.get("/", getCafes);

router.get("/:cafeId", getCafeById);

export default router;

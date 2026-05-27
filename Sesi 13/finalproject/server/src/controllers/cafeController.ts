import prisma from "../lib/prisma.js";
import type { Request, Response } from "express";

export const getCafes = async (req: Request, res: Response) => {
  try {
    const rawSearch = req.query.search;

    if (rawSearch && typeof rawSearch !== "string") {
      return res.status(400).json({ message: "Search is not a string type" });
    }

    const search =
      typeof rawSearch === "string"
        ? rawSearch.trim().toLowerCase()
        : undefined;

    if (typeof search === "string" && search.length > 100) {
      return res
        .status(400)
        .json({ message: "Search cannot be more than 100 characters" });
    }

    const cafes = await prisma.cafe.findMany({
      where:
        typeof search === "string" && search.length > 0
          ? {
              name: {
                contains: search,
                mode: "insensitive",
              },
            }
          : undefined,
    });

    res.json(cafes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch cafes" });
  }
};

export const getCafeById = async (req: Request, res: Response) => {
  try {
    const cafeId =
      typeof req.params.cafeId === "string"
        ? req.params.cafeId.trim()
        : undefined;

    if (!cafeId) {
      return res.status(400).json({ message: "cafeId is missing" });
    }

    if (cafeId.length > 50) {
      return res
        .status(400)
        .json({ message: "cafeId cannot be more than 50 characters" });
    }

    const cafe = await prisma.cafe.findUnique({
      where: {
        cafeId,
      },
      include: {
        detail: true,
      },
    });

    if (!cafe) {
      return res.status(404).json({ message: "Cafe not found" });
    }

    res.json(cafe);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch detail cafe" });
  }
};

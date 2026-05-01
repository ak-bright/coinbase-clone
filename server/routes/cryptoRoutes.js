import express from "express";
import {
  getAllCrypto,
  getGainers,
  getNewListings,
  addCrypto,
  getLivePrices,
} from "../controllers/cryptoController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.get("/", getAllCrypto);
router.get("/gainers", getGainers);
router.get("/new", getNewListings);
router.get("/live-prices", getLivePrices);

// Protected routes
router.post("/", protect, addCrypto);

export default router;

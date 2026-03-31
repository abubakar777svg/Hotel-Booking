import express from "express";
import { protect } from "../middlewares/auth.js";
import {
  getUserData,
  storeRecentSearchedCities,
} from "../controllers/userController.js";
const router = express.Router();

router.get("/", protect, getUserData);
router.post("/store-recent-search", protect, storeRecentSearchedCities);

export default router;

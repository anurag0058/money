import express from "express";
import {
  addProduct,
  updateQuantity,
  getProducts,
} from "../controllers/inventoryHandler.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, addProduct);
router.put("/:id/quantity", verifyToken, updateQuantity);
router.get("/", verifyToken, getProducts);

export default router;

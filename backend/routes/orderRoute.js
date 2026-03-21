import express from "express";

import authMiddleware from "../middlewares/auth.js";
import {
  confirmPayment,
  createOrder,
  deleteOrder,
  getOrders,
  getUserOrders,
  updateOrderStatus,
} from "../controllers/orderController.js";

const orderRouter = express.Router();
orderRouter.post("/", authMiddleware, createOrder);
orderRouter.get("/confirm", confirmPayment);

orderRouter.get("/my", authMiddleware, getUserOrders);
orderRouter.get("/", getOrders);
orderRouter.put("/:id", updateOrderStatus);
orderRouter.delete("/:id", deleteOrder);

export default orderRouter;

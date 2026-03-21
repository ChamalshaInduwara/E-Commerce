import express from "express";

import authMiddleware from "../middleware/auth.js";
import { confirmPayment, createOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();
orderRouter.post("/", authMiddleware,createOrder)
orderRouter.get("/confirm", confirmPayment);
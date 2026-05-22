import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import {
  createWatch,
  deleteWatch,
  getWatches,
  getWatchesByBrand,
} from "../controllers/watchController.js";

const watchRouter = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(process.cwd(), "uploads");
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `watch-${unique}${ext}`);
  },
});
const upload = multer({ storage });

watchRouter.post("/", upload.single("image"), createWatch);
watchRouter.get("/", getWatches);
watchRouter.delete("/:id", deleteWatch);
watchRouter.get("/brand/:brandName", getWatchesByBrand);

export default watchRouter;

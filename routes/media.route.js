import express from "express";
import { createMedia, getAllMedia, getMediaById, updateMedia, deleteMedia } from "../controllers/media.controller.js";

const router = express.Router();

router.post("/media", createMedia);
router.get("/media", getAllMedia);
router.get("/media/:id", getMediaById);
router.put("/media/:id", updateMedia);
router.delete("/media/:id", deleteMedia);

export default router;

import express from "express";
const router = express.Router();
import Hotel from "../models/hotelModel.js";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
} from "../controllers/hotelsController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

// To create, update and delete hotl you have to be an Admin

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

//GET
router.get("/:id", getHotel);

//GET ALL
router.get("/", getHotels);

export default router;

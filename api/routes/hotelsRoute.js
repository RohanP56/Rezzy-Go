import express from "express";
import Hotel from "../models/hotelModel.js";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
} from "../controllers/hotelsController.js";

const router = express.Router();

//CREATE
router.post("/", createHotel);

//UPDATE
router.put("/:id", updateHotel);

//DELETE
router.delete("/:id", deleteHotel);

//GET
router.get("/:id", getHotel);

//GET ALL
router.get("/", getHotels);

export default router;

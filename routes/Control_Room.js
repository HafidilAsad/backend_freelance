import express from "express";
import {
  getControl_Rooms,
  getControl_RoomById,
  createControl_Room,
  updateControl_Room,
  deleteControl_Room,
} from "../controllers/Control_RoomController.js";

const router = express.Router();

router.get("/control_rooms", getControl_Rooms);
router.get("/control_rooms/:id", getControl_RoomById);
router.post("/control_rooms", createControl_Room);
router.patch("/control_rooms/:id", updateControl_Room);
router.delete("/control_rooms/:id", deleteControl_Room);

export default router;

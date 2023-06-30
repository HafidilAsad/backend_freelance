import express from "express";
import {
  getQualitys,
  getQualityById,
  createQuality,
  updateQuality,
  deleteQuality,
} from "../controllers/QualityController.js";

const router = express.Router();

router.get("/quality", getQualitys);
router.get("/quality/:id", getQualityById);
router.post("/qualitypost", createQuality);
router.patch("/quality/:id", updateQuality);
router.delete("/quality/:id", deleteQuality);
//router.post('/addcost', createCost);

export default router;

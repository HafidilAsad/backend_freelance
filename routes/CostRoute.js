import express from "express";
import {
  getCosts,
  getCostById,
  createCost,
  updateCost,
  deleteCost,
} from "../controllers/CostController.js";
 
const router = express.Router();
 
router.get('/costs', getCosts);
router.get('/costs/:id', getCostById);
router.post('/addcost', createCost);
router.patch('/costs/:id', updateCost);
router.delete('/costs/:id', deleteCost);

// router.get('/users/:id', getUserById);
// router.post('/users', createUser);
// router.patch('/users/:id', updateUser);
// router.delete('/users/:id', deleteUser);
//router.post('/addcost', createCost);
 
export default router;
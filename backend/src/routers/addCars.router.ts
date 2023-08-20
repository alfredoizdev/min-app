import express from "express";
import addCarController from "@controllers/addCar.controller";
import hasPermision from "@middleware/userAuth";

const router = express.Router();

router.post("/api/cars", hasPermision, addCarController);

export { router as addCarRouter };

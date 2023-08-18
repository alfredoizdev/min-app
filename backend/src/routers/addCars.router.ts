import express from "express";
import addCarController from "@controllers/addCar.controller";

const router = express.Router();

router.post("/api/cars", addCarController);

export { router as addCarRouter };

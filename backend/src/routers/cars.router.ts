import express from "express";
import getCarsController from "@controllers/getCars.controller";

const router = express.Router();

router.get("/api/cars", getCarsController);

export { router as carsRouter };

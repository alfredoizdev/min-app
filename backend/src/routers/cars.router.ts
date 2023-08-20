import express from "express";
import getCarsController from "@controllers/getCars.controller";
import hasPermision from "@middleware/userAuth";

const router = express.Router();

router.get("/api/cars", hasPermision, getCarsController);

export { router as carsRouter };

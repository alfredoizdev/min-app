import getCarDetailController from "@controllers/getCarDetail.controller";
import hasPermision from "@middleware/userAuth";
import express from "express";

const router = express.Router();

router.get("/api/car/:id", hasPermision, getCarDetailController);

export { router as carDetailRouter };

import getCarDetailController from "@controllers/getCarDetail.controller";
import express from "express";

const router = express.Router();

router.get("/api/car/:id", getCarDetailController);

export { router as carDetailRouter };

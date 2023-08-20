import express from "express";
import getUserController from "@controllers/getUser.controlller";
import hasPermision from "@middleware/userAuth";

const router = express.Router();

router.get("/api/getuser", hasPermision, getUserController);

export { router as getUserRouter };

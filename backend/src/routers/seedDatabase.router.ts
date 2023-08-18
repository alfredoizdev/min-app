import express from "express";
import seedDatabaseController from "@controllers/seedDatabase.controller";

const router = express.Router();

router.get("/api/seed", seedDatabaseController);

export { router as seedDatabaseRouter };

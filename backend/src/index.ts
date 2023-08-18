import "module-alias/register";
import express, { Express, json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { carsRouter } from "@routers/cars.router";
import { addCarRouter } from "@routers/addCars.router";
import { seedDatabaseRouter } from "@routers/seedDatabase.router";
import { carDetailRouter } from "@routers/carDetail.router";

dotenv.config();

const app: Express = express();
const env = process.env.NODE_ENV || "development";
const port = process.env.PORT;

const Start = async () => {
	const mongouri =
		env === "development"
			? process.env.MONGO_URI_DEV!
			: process.env.MONGO_URI_PROD!;

	console.log("HERE", mongouri);

	try {
		await mongoose.connect(mongouri);
		console.log("connected to db");
	} catch (error) {
		throw Error("Can't connected to db");
	}

	app.use(json());
	app.use(cors());

	app.use(carsRouter);
	app.use(addCarRouter);
	app.use(seedDatabaseRouter);
	app.use(carDetailRouter);

	app.listen(port, () => {
		console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
	});
};

Start();

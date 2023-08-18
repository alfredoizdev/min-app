import { Request, Response } from "express";
import Product from "@models/Car";
import { initialData } from "../database/seed";

const seedDatabaseController = async (req: Request, res: Response) => {
	await Product.deleteMany();
	await Product.insertMany(initialData.products);
	return res.status(200).json({ message: "database populate" });
};

export default seedDatabaseController;

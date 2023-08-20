import { Request, Response } from "express";
import { initialData } from "../database/seed";
import Product from "@models/Car";
import User from "@models/User";

const seedDatabaseController = async (req: Request, res: Response) => {
	await Product.deleteMany();
	await Product.insertMany(initialData.products);
	await User.deleteMany();
	await User.insertMany(initialData.users);
	return res.status(200).json({ message: "database populate" });
};

export default seedDatabaseController;

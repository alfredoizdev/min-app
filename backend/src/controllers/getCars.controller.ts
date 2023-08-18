import Car from "@models/Car";
import { Request, Response } from "express";

const getProductController = async (req: Request, res: Response) => {
	const car = await Car.find({});
	return res.status(200).json(car);
};

export default getProductController;

import Car from "@models/Car";
import { Request, Response } from "express";

const getCarDetailController = async (req: Request, res: Response) => {
	const { id } = req.params;
	const car = await Car.findById(id).exec();

	if (!car) return res.status(404).json({});

	res.status(200).json(car);
};

export default getCarDetailController;

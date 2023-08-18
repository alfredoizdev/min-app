import Car from "@models/Car";
import { Request, Response } from "express";

const addCarController = async (req: Request, res: Response) => {
	const { params } = req.body;
	const car = new Car(params);
	await car.save(req.body);
	return res.status(201).send(car);
};

export default addCarController;

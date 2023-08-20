import { NextFunction, Request, Response } from "express";
import { isValidToken } from "../helper/jwt";

const hasPermision = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { headers } = req;

	if (!headers["authorization"]) {
		return res.status(400).json({ message: "Token is not present" });
	}
	const token = headers["authorization"]?.split(" ");

	if (token) {
		try {
			await isValidToken(token[1]);
			next();
		} catch (error) {
			return res.status(400).json({ message: "Invalid token" });
		}
	}
};

export default hasPermision;

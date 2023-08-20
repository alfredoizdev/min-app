import { isValidToken } from "@helper/jwt";
import { Request, Response } from "express";

const getUserController = async (req: Request, res: Response) => {
	const { headers } = req;

	if (!headers["authorization"]) {
		return res.status(400).json({ message: "Token is not present" });
	}

	const token = headers["authorization"]?.split(" ");

	try {
		const user = await isValidToken(token[1]);
		return res.status(200).json(user);
	} catch (error) {
		return res.status(400).json({ message: "Invalid Token" });
	}
};

export default getUserController;

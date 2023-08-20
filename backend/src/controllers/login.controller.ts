import User from "@models/User";
import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import { singToken } from "@helper/jwt";
import { isValidEmail } from "@helper/validations";

const loginController = async (req: Request, res: Response) => {
	const { email, password } = req.body;

	if (!email) {
		return res.status(400).json({ message: "Email was pass as empty field" });
	}

	if (!isValidEmail(email)) {
		return res.status(400).json({ message: "Icorrect format for email" });
	}
	if (!password) {
		return res
			.status(400)
			.json({ message: "Password was pass as empty field" });
	}

	const exitingUser = await User.findOne({ email });

	if (!exitingUser) {
		return res.status(404).json({ message: "Incorrect credential" });
	}

	if (!bcryptjs.compareSync(password, exitingUser?.password)) {
		return res.status(404).json({ message: "Incorrect credential" });
	}

	const token = singToken(JSON.stringify(exitingUser._id), exitingUser.email);

	res.status(200).json(token);
};

export default loginController;

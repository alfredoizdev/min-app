import jwt from "jsonwebtoken";

export const singToken = (_id: string, email: string) => {
	if (!process.env.JWT_SECRET_SEED) {
		throw new Error(
			"Is not secret seed for json web token, check env variables"
		);
	}

	return jwt.sign(
		{
			_id,
			email,
		},
		process.env.JWT_SECRET_SEED,
		{ expiresIn: "30d" }
	);
};

export const isValidToken = (token: string): Promise<string> => {
	if (!process.env.JWT_SECRET_SEED) {
		throw new Error(
			"Is not secret seed for json web token, check env variables"
		);
	}

	if (token.length <= 10) {
		return Promise.reject("JWT is not valid");
	}

	return new Promise((resolve, reject) => {
		try {
			jwt.verify(token, process.env.JWT_SECRET_SEED || "", (err, payload) => {
				if (err) return reject("JWT is not valid");
				const { email } = payload as { email: string };

				resolve(email);
			});
		} catch (error) {
			reject("JWT is not valid");
		}
	});
};

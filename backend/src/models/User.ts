import mongoose, { Schema, model, Model } from "mongoose";
import { IUser } from "@interfaces/User";

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		last: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

userSchema.index({ title: "text", tags: "text" });

const User: Model<IUser> = mongoose.models.User || model("User", userSchema);

export default User;

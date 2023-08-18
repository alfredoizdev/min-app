import mongoose, { Schema, model, Model } from "mongoose";
import { ICar } from "@interfaces/Car";

const carSchema = new Schema(
	{
		mark: {
			type: String,
			required: true,
			default: "",
		},
		model: {
			type: String,
			required: true,
			default: "",
		},
		price: { type: Number, required: true, default: 0 },
		color: { type: String, required: true, default: "white" },
		year: { type: String, required: true },
		millage: { type: Number, required: true },
		category: {
			type: String,
			enum: ["Truck", "Sedan", "SUV"],
			message: "{VALUE} is not allowed category",
			default: "Sedan",
		},
	},
	{
		timestamps: true,
	}
);

carSchema.index({ title: "text", tags: "text" });

const Car: Model<ICar> = mongoose.models.Car || model("Product", carSchema);

export default Car;

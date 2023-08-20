import { IUser } from "@interfaces/User";
import bcryptjs from "bcryptjs";

type ValidTypes = "Truck" | "Sedan" | "SUV";

interface SeedProduct {
	mark: string;
	model: string;
	year: string;
	color: string;
	category: ValidTypes;
	millage: number;
	price: number;
}

interface SeedData {
	products: SeedProduct[];
	users: IUser[];
}

export const initialData: SeedData = {
	products: [
		{
			mark: "Toyota",
			model: "F10",
			year: "2020",
			price: 75000,
			color: "White",
			category: "Truck",
			millage: 19000,
		},
		{
			mark: "Tesla",
			model: "Y",
			year: "2022",
			price: 65000,
			color: "Blue",
			category: "SUV",
			millage: 20000,
		},
		{
			mark: "Honda",
			model: "Accord",
			year: "2019",
			price: 32000,
			color: "Red",
			category: "Sedan",
			millage: 120000,
		},
	],
	users: [
		{
			name: "Alex",
			last: "Con",
			email: "alfredodevelop@gmail.com",
			password: bcryptjs.hashSync("123456"),
		},
	],
};

export interface ICar {
	mark: string;
	model: string;
	year: string;
	color: string;
	category: "Truck" | "Sedan" | "SUV";
	millage: number;
	price: number;
}

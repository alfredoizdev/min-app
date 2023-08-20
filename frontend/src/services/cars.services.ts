import { fetchApi } from "../lib/axios";
import { ICar } from "../interfaces/Car";

export const getCars = async (): Promise<ICar[]> => {
	const { data } = await fetchApi.get<ICar[]>("cars", {
		headers: {
			Authorization: `Bearer ${getToken()}`,
		},
	});

	return data;
};

export const addCar = async (params: ICar): Promise<ICar> => {
	const { data } = await fetchApi.post(
		"cars",
		{ params },
		{
			headers: {
				Authorization: `Bearer ${getToken()}`,
			},
		}
	);

	return data;
};

export const getCarDetail = async (
	id: string | undefined
): Promise<ICar | null> => {
	if (!id) return null;

	const { data } = await fetchApi.get(`car/${id}`, {
		headers: {
			Authorization: `Bearer ${getToken()}`,
		},
	});

	return data;
};

export const getToken = (): string | null => {
	return localStorage.getItem("token") || null;
};

import { fetchApi } from "../lib/axios";
import { getToken } from "./cars.services";

interface authData {
	email: string;
	password: string;
}

export const loginUser = async (params: authData): Promise<string> => {
	const { email, password } = params;
	const { data } = await fetchApi.post<string>("login", { email, password });

	return data;
};

export const getUser = async () => {
	const { data } = await fetchApi.get<string>("getuser", {
		headers: {
			Authorization: `Bearer ${getToken()}`,
		},
	});

	return data;
};

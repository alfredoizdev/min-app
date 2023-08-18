import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { GridColDef } from "@mui/x-data-grid";
import { ICar } from "../../interfaces/Car";
import { getCars } from "../../services/cars.services";
import CustomTable from "../CustomTable/CustomTable";
import Main from "../../layout/main";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import AddCar from "../AddCar/AddCar";
import { useNavigate } from "react-router-dom";

const columns: GridColDef[] = [
	{ field: "mark", headerName: "Mark", width: 90 },
	{
		field: "model",
		headerName: "Model",
		width: 150,
		editable: false,
		sortable: false,
		disableColumnMenu: true,
	},
	{
		field: "year",
		headerName: "Year",
		width: 110,
		editable: false,
		sortable: false,
		disableColumnMenu: true,
	},
	{
		field: "millage",
		headerName: "Millage",
		type: "number",
		width: 110,
		editable: false,
		sortable: false,
		disableColumnMenu: true,
	},
	{
		field: "price",
		headerName: "Price",
		type: "number",
		width: 110,
		editable: false,
		sortable: false,
		disableColumnMenu: true,
	},
];

export default function Cars() {
	const [cars, setCars] = useState<ICar[]>([]);
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

	const { isLoading, isError } = useQuery({
		queryKey: ["cars"],
		queryFn: getCars,
		onSuccess: (data) => {
			if (data) {
				console.log(data);
				setCars(data);
			}
		},
		refetchOnWindowFocus: false,
	});

	const onclick = (params: ICar) => {
		const { _id } = params;
		navigate(`/car/${_id}`);
	};

	if (isLoading) {
		return <span>Loading...</span>;
	}

	if (isError) {
		return <span>Error</span>;
	}

	return (
		<Main>
			<Box sx={{ height: 400, width: "100%" }}>
				{cars && (
					<CustomTable columns={columns} data={cars} onClick={onclick} />
				)}
			</Box>
			<Box sx={{ py: 2, textAlign: "right" }}>
				<Fab color='primary' aria-label='add' onClick={() => setOpen(true)}>
					<AddIcon />
				</Fab>
			</Box>
			<AddCar open={open} setOpen={setOpen} />
		</Main>
	);
}

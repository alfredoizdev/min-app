import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { addCar } from "../../services/cars.services";

interface Props {
	open: boolean;
	setOpen: (value: React.SetStateAction<boolean>) => void;
}

interface FormData {
	formValue: {
		mark: string;
		model: string;
		year: string;
		color: string;
		category: string;
		millage: number;
		price: number;
	};
}

const ActionFormBar = styled("div")`
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-top: 5px;
	padding: 1px;
`;

const AddCar = ({ open, setOpen }: Props) => {
	const queryClient = useQueryClient();

	const createCar = useMutation({
		mutationFn: addCar,
		onSuccess: async () => {
			await queryClient.refetchQueries({ queryKey: ["cars"] });
			reset();
			setOpen(false);
		},
		onError() {
			console.log("error");
		},
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: {
			formValue: {
				mark: "",
				model: "",
				year: "",
				color: "",
				category: "",
				millage: 0,
				price: 0,
			},
		},
	});

	const handleOnClick = () => {
		return null;
	};

	const handleOnSubmit = ({ formValue }: FormData) => {
		createCar.mutate(formValue);
	};

	return (
		<Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
			<Typography sx={{ p: 2 }} variant='h1'>
				Add Car
			</Typography>
			<form noValidate onSubmit={handleSubmit(handleOnSubmit)}>
				<Box
					role='presentation'
					sx={{ width: 300, marginTop: 1, padding: "8px" }}
				>
					<Box paddingY={2}>
						<TextField
							id='mark'
							label='mark'
							variant='outlined'
							type='text'
							placeholder='Mark'
							fullWidth
							{...register("formValue.mark", {
								required: "The Mark field are required",
							})}
							error={!!errors.formValue?.mark}
							helperText={errors.formValue?.mark?.message}
						/>
					</Box>
					<Box paddingY={2}>
						<TextField
							id='model'
							label='model'
							variant='outlined'
							type='text'
							placeholder='Model'
							fullWidth
							{...register("formValue.model", {
								required: "The Model field are required",
							})}
							error={!!errors.formValue?.model}
							helperText={errors.formValue?.model?.message}
						/>
					</Box>
					<Box paddingY={2}>
						<TextField
							id='color'
							label='color'
							variant='outlined'
							type='string'
							placeholder='Color'
							fullWidth
							{...register("formValue.color", {
								required: "The Color field are required",
							})}
							error={!!errors.formValue?.color}
							helperText={errors.formValue?.color?.message}
						/>
					</Box>
					<Box paddingY={2}>
						<FormControl fullWidth>
							<InputLabel id='demo-simple-select-label'>Category</InputLabel>
							<Select
								labelId='demo-simple-select-label'
								id='demo-simple-select'
								label='Age'
								defaultValue={"Sedan"}
								{...register("formValue.category")}
							>
								<MenuItem value={"Sedan"}>Sedan</MenuItem>
								<MenuItem value={"Truck"}>Truck</MenuItem>
								<MenuItem value={"SUV"}>SUV</MenuItem>
							</Select>
						</FormControl>
					</Box>
					<Box paddingY={2}>
						<TextField
							id='year'
							label='year'
							variant='outlined'
							type='text'
							placeholder='Year'
							fullWidth
							{...register("formValue.year", {
								required: "The Year field are required",
							})}
							error={!!errors.formValue?.year}
							helperText={errors.formValue?.year?.message}
						/>
					</Box>
					<Box paddingY={2}>
						<TextField
							id='millage'
							label='millage'
							variant='outlined'
							type='number'
							placeholder='Millage'
							fullWidth
							{...register("formValue.millage", {
								required: "The Millage field are required",
							})}
							error={!!errors.formValue?.millage}
							helperText={errors.formValue?.millage?.message}
						/>
					</Box>
					<Box paddingY={2}>
						<TextField
							id='price'
							label='price'
							variant='outlined'
							type='number'
							placeholder='Price'
							fullWidth
							{...register("formValue.price", {
								required: "The Price field are required",
							})}
							error={!!errors.formValue?.price}
							helperText={errors.formValue?.price?.message}
						/>
					</Box>
					<ActionFormBar>
						<Button
							sx={{ mr: 1 }}
							onClick={handleOnClick}
							variant='contained'
							type='submit'
							color='primary'
							fullWidth
						>
							Save
						</Button>
						<Button
							onClick={() => setOpen(false)}
							variant='contained'
							type='submit'
							color='error'
							fullWidth
						>
							Cancel
						</Button>
					</ActionFormBar>
				</Box>
			</form>
		</Drawer>
	);
};

export default AddCar;

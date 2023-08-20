import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../services/auth.services";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { isEmail } from "../../utils/validations";
import { useEffect, useState } from "react";
import CustomNotification from "../CustomNotification/CustomNotification";

const LoginContent = styled("div")`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
`;

interface FormData {
	formValue: {
		email: string;
		password: string;
	};
}

const Login = () => {
	const navigate = useNavigate();
	const [message, setMessage] = useState("");
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem("token") || null;
		if (token) {
			navigate("/");
		}
	}, [navigate]);

	const authUser = useMutation({
		mutationFn: loginUser,
		onSuccess: (data) => {
			setOpen(false);
			setMessage("");
			reset();
			localStorage.setItem("token", data);
			navigate("/");
		},
		onError({ response }) {
			setOpen(true);
			setMessage(response.data?.message);
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
				email: "",
				password: "",
			},
		},
	});

	const handleOnSubmit = ({ formValue }: FormData) => {
		authUser.mutate(formValue);
	};

	return (
		<Grid container>
			<LoginContent>
				<form noValidate onSubmit={handleSubmit(handleOnSubmit)}>
					<Card sx={{ minWidth: 375 }}>
						<CardContent>
							<Typography
								sx={{ fontSize: 19 }}
								color='text.secondary'
								gutterBottom
							>
								Login
							</Typography>
							<Box paddingY={2}>
								<TextField
									id='email'
									label='email'
									variant='outlined'
									type='email'
									placeholder='Email'
									fullWidth
									{...register("formValue.email", {
										required: "The Email field are required",
										validate: isEmail,
									})}
									error={!!errors.formValue?.email}
									helperText={errors.formValue?.email?.message}
								/>
							</Box>
							<Box paddingY={2}>
								<TextField
									id='password'
									label='password'
									variant='outlined'
									type='password'
									placeholder='Password'
									fullWidth
									{...register("formValue.password", {
										required: "The Password field are required",
									})}
									error={!!errors.formValue?.password}
									helperText={errors.formValue?.password?.message}
								/>
							</Box>
						</CardContent>
						<CardActions>
							<Button type='submit' variant='contained' fullWidth>
								Login
							</Button>
						</CardActions>
					</Card>
				</form>
			</LoginContent>
			<CustomNotification open={open} setOpen={setOpen} message={message} />
		</Grid>
	);
};

export default Login;

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { removeCurrentUser } from "../../app/features/user/userSlice";

const Navigation = styled(Box)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Navbar = () => {
	const currentUser = useSelector((state: RootState) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleOnClick = () => {
		dispatch(removeCurrentUser);
		localStorage.removeItem("token");
		navigate("/login");
	};

	return (
		<Navigation>
			<Link to='/'>
				<Typography variant='h1'>App</Typography>
			</Link>
			{currentUser?.email && (
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Typography variant='body2' pr={1}>
						welcome: {currentUser.email}
					</Typography>
					<Button type='button' onClick={handleOnClick}>
						Logout
					</Button>
				</Box>
			)}
		</Navigation>
	);
};

export default Navbar;

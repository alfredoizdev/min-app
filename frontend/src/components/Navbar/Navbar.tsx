import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navigation = styled(Box)`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const Navbar = () => {
	return (
		<Navigation>
			<Link to='/'>
				<Typography variant='h1'>App</Typography>
			</Link>
		</Navigation>
	);
};

export default Navbar;

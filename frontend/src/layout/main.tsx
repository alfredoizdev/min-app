import Grid from "@mui/material/Grid";
import Navbar from "../components/Navbar/Navbar";

interface Props {
	children: string | JSX.Element | JSX.Element[];
}

const gridStyles = {
	paddingBottom: 2,
	paddingRight: 2,
	marginTop: 0,
	marginLeft: "auto",
	marginRight: "auto",
	maxWidth: 1200,
};

const Main = ({ children }: Props) => {
	return (
		<Grid sx={gridStyles} container justifyContent='center' spacing={2}>
			<Grid item xs={12} md={12}>
				<Navbar />
			</Grid>
			<Grid item xs={12} md={12}>
				{children}
			</Grid>
		</Grid>
	);
};

export default Main;

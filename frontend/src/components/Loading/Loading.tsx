import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
	return (
		<Box
			sx={{
				display: "flex",
				width: "100%",
				height: "100vh",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<CircularProgress />
		</Box>
	);
};

export default Loading;

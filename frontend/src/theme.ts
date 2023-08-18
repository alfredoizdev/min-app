import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
	palette: {
		primary: {
			main: "#8a2be2",
		},
		secondary: {
			main: "#19857b",
		},
		error: {
			main: red.A400,
		},
	},
	components: {
		MuiTypography: {
			variants: [
				{
					props: {
						variant: "h1",
					},
					style: {
						fontSize: 26,
						fontWeight: 400,
					},
				},
				{
					props: {
						variant: "h2",
					},
					style: {
						fontSize: 20,
						fontWeight: 400,
					},
				},
				{
					props: {
						variant: "body1",
					},
					style: {
						fontSize: 11,
					},
				},
				{
					props: {
						variant: "body2",
					},
					style: {
						fontSize: 14,
					},
				},
			],
		},
	},
});

export default theme;

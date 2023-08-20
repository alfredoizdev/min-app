import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

interface Props {
	open: boolean;
	message: string;
	setOpen: (value: React.SetStateAction<boolean>) => void;
}

const CustomNotification = ({ open, setOpen, message }: Props) => {
	return (
		<Snackbar
			open={open}
			autoHideDuration={5000}
			onClose={() => setOpen(false)}
			anchorOrigin={{ vertical: "top", horizontal: "center" }}
		>
			<Alert severity='error' sx={{ width: "100%" }}>
				{message}
			</Alert>
		</Snackbar>
	);
};

export default CustomNotification;

import { useParams } from "react-router-dom";
import Main from "../../layout/main";
import { useQuery } from "@tanstack/react-query";
import { getCarDetail } from "../../services/cars.services";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import USDollar from "../helpers/usDollars";
import Loading from "../Loading/Loading";

const HeaderBar = styled("div")`
	display: flex;
	justify-content: flex-start;
	align-items: baseline;
	margin-top: 5px;
	padding: 1px;
	width: 100%;
`;

const Car = () => {
	const { carid } = useParams();

	const { data, isLoading, isError } = useQuery(["item", carid], () =>
		getCarDetail(carid)
	);

	if (isLoading) {
		return <Loading />;
	}

	if (isError) {
		return <span>Error</span>;
	}

	if (carid === undefined) {
		return (
			<Main>
				<Typography variant='h1'>{carid && carid}</Typography>
			</Main>
		);
	}

	return (
		<Main>
			<>
				{data && (
					<Grid container>
						<Grid item xs={12} md={12}>
							<HeaderBar>
								<Typography mr={1} variant='h1'>
									{data.mark}
								</Typography>
								<Typography variant='h2'>{data.year}</Typography>
							</HeaderBar>
						</Grid>
						<Grid item xs={12} md={12}>
							<p>
								<span>Milles</span>: {data.millage}
							</p>
							<p>
								<span>Model</span>: {data.model}
							</p>
							<p>
								<span>Price</span>: {USDollar.format(data.price)}
							</p>
						</Grid>
					</Grid>
				)}
			</>
		</Main>
	);
};

export default Car;

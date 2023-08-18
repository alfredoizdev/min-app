import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";
import { ICar } from "../../interfaces/Car";

interface Props {
	columns: GridColDef[];
	onClick?: any;
	data: ICar[];
}

const CustomTable = ({ columns, data, onClick }: Props) => {
	const handleClick = (params: GridCellParams<ICar>) => {
		onClick?.(params.row);
	};

	return (
		<DataGrid
			rows={data}
			getRowId={(row) => row._id}
			columns={columns}
			initialState={{
				pagination: {
					paginationModel: {
						pageSize: 15,
					},
				},
			}}
			pageSizeOptions={[15]}
			disableRowSelectionOnClick
			checkboxSelection={false}
			onCellClick={(params) => handleClick(params)}
		/>
	);
};

export default CustomTable;

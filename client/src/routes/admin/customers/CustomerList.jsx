import { Link } from "react-router-dom";
import { api_base_url, generateCustomerData } from "../../../app/utils";

import {
	Avatar,
	Box,
	Button,
	CardMedia,
	Chip,
	Paper,
	Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import AdminTitle from "../../../components/AdminTitle";
import ViewAction from "../../../components/ViewAction";
// import { useGetCustomersQuery } from "../../../app/services/user";

const ImageColumn = ({ row }) => {
	return (
		<Avatar
			src={`${api_base_url}${row.img_url}`}
			sx={{ m: "auto", width: 60, height: 60 }}
		/>
	);
};

const customerSampleData = Array.from(Array(10), (val, index) =>
	generateCustomerData(index + 1)
);

const columns = [
	{
		field: "image",
		headerName: "Image",
		width: 100,
		headerAlign: "center",
		renderCell: (params) => <ImageColumn {...params} />,
	},
	{ field: "username", headerName: "Username", width: 150 },
	{ field: "email", headerName: "Email", width: 220 },
	{ field: "phone_number", headerName: "Phone Number", width: 200 },

	{
		field: "id",
		headerName: "Action",
		headerAlign: "center",
		width: 100,
		renderCell: (params) => <ViewAction to="customers" params={params} />,
	},
];

function CustomersList() {
	// const { data: customers = [] } = useGetCustomersQuery();
	return (
		<Box>
			<AdminTitle title="List of Customers" />
			<DataGrid
				rowHeight={90}
				rows={customerSampleData}
				columns={columns}
				pageSizeOptions={[5, 10, 25]}
				initialState={{
					pagination: { paginationModel: { pageSize: 5 } },
				}}
				sx={{
					boxShadow: 2,
					border: 1,
				}}
			/>
		</Box>
	);
}

export default CustomersList;

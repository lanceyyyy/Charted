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
import { useGetCustomersQuery } from "../../../app/services/user";

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
	const { data: customers = [] } = useGetCustomersQuery();
	return (
		<Box
			sx={{
				padding: 4,
			}}
		>
			<AdminTitle title="List of Customers" />
			<DataGrid
				rowHeight={90}
				rows={customers}
				columns={columns}
				pageSizeOptions={[5, 10, 25]}
				initialState={{
					pagination: { paginationModel: { pageSize: 5 } },
				}}
				sx={{
					background: "#fff",
					boxShadow:
						"inset 8px 8px 16px #c9c9c9, inset -8px -8px 16px #ffffff",
					border: "1px solid #E42A41",
				}}
			/>
		</Box>
	);
}

export default CustomersList;

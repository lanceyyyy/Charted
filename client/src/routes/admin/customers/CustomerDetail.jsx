import {
	Avatar,
	Box,
	Button,
	Chip,
	Divider,
	Paper,
	Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CircularProgress from "@mui/material/CircularProgress";

import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { Link, useParams } from "react-router-dom";
// import { useGetUserQuery } from "../../../features/apiSlice";
// import { api_base_url } from "../../../app/base_url";

const Title = ({ title }) => (
	<Box>
		<Box m={1}>
			<Typography variant="h6" fontWeight="bold">
				{title}
			</Typography>
		</Box>
		<Divider />
	</Box>
);
const Info = ({ title, value }) => (
	<Box>
		<Box m={1}>
			<Typography>{title}</Typography>
			<Typography variant="body2" color="gray">
				{value}
			</Typography>
		</Box>
		<Divider />
	</Box>
);

function CustomersDetail() {
	const { id } = useParams();
	// const { data: customer = {}, isLoading, isSuccess } = useGetUserQuery(id);

	const isLoading = false;
	const isSuccess = true;
	const customer = {
		first_name: "sample",
		last_name: "last_name",
		barangay: "barangay",
		municipality: "municipality",
		city: "city",
		postal: "postal",
		phone_number: "phone_number",
		email: "sample@email.com",
		password: "1234",
	};

	let content;
	if (isLoading) {
		content = (
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "40vh",
				}}
			>
				<CircularProgress size={150} />
			</Box>
		);
	} else if (isSuccess) {
		content = (
			<Box>
				<Typography variant="h4">Customer Detail</Typography>
				<Box
					display="flex"
					justifyContent="space-between"
					alignItems="flex-end"
				>
					<Box>
						<Typography variant="overline">User ID: </Typography>
						<Chip label={id} size="small" />
					</Box>
					<Button
						variant="outlined"
						color="secondary"
						LinkComponent={Link}
						to={`/admin/customers/${id}/update`}
					>
						<BorderColorOutlinedIcon sx={{ mr: 1, fontSize: 16 }} />
						Edit
					</Button>
				</Box>
				<Grid container spacing={3} sx={{ mt: 3 }}>
					<Grid xs={12} md={6}>
						<Avatar
							// src={`${api_base_url}${user.image_url}`}
							src={`${customer.image_url}`}
							alt="sample"
							sx={{
								height: 150,
								width: 150,
								m: "auto",
								boxShadow: 6,
							}}
						/>
					</Grid>
					<Grid xs={12} md={6}>
						<Paper elevation={3}>
							<Title title="Account" />
							<Info title="Email" value={customer.email} />
							<Info title="First Name" value={customer.first_name} />
							<Info title="Last Name" value={customer.last_name} />
						</Paper>
					</Grid>

					<Grid xs={12} md={6}>
						<Paper elevation={3}>
							<Title title="Address" />
							<Info title="Barangay" value={customer.barangay} />
							<Info title="Municipality" value={customer.municipality} />
							<Info title="City" value={customer.city} />
							<Info title="Postal" value={customer.postal} />
						</Paper>
					</Grid>
				</Grid>
			</Box>
		);
	}
	return <Box>{content}</Box>;
}

export default CustomersDetail;

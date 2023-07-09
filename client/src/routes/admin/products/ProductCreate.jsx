// Libraries
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

// MUI Component
import Grid from "@mui/material/Unstable_Grid2";
import {
	Box,
	Button,
	Divider,
	FormControl,
	FormControlLabel,
	InputLabel,
	MenuItem,
	Paper,
	Rating,
	Select,
	Switch,
	TextField,
	Typography,
} from "@mui/material";
import { MuiFileInput } from "mui-file-input";

// Custom Component
import AdminTitle from "../../../components/AdminTitle";

// Mui icons
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import LocalDrinkOutlinedIcon from "@mui/icons-material/LocalDrinkOutlined";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";
import YardIcon from "@mui/icons-material/Yard";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import PetsIcon from "@mui/icons-material/Pets";

import { useCreateProductMutation } from "../../../app/services/product";

import { enqueueSnackbar } from "notistack";

function ProductCreate() {
	const navigate = useNavigate();
	const [createProduct] = useCreateProductMutation();

	const formik = useFormik({
		initialValues: {
			name: "",
			description: "",
			image: null,
			price: 0,
			stocks: 10,
			availability: true,
		},
	});

	const onSubmit = async () => {
		const new_product = new FormData();
		new_product.append("name", formik.values.name);
		new_product.append("description", formik.values.description);
		new_product.append("category", formik.values.category);
		new_product.append("price", formik.values.price);
		new_product.append("stocks", formik.values.stocks);
		new_product.append("availability", formik.values.availability);
		new_product.append("image", formik.values.image);
		await createProduct(new_product)
			.unwrap()
			.then((res) => {
				console.log("Create Product Successfully", res);
				enqueueSnackbar("Create Product Successfully!", {
					variant: "success",
				});
				navigate(`/admin/products/${res.id}`);
			})
			.catch((err) => console.error(err));
	};

	return (
		<Box
			sx={{
				padding: 4,
			}}
		>
			<AdminTitle title="Create Product" />
			<Box component="form" sx={{ mb: 5 }}>
				<Grid container spacing={3}>
					<Grid xs={12} md={6}>
						<Paper
							elevation={4}
							sx={{
								borderRadius: "5px",
								background: "linear-gradient(145deg, #e6e6e6,#ffffff)",
								boxShadow: "8px 8px 16px #c9c9c9, -8px -8px 16px #ffffff",
								padding: 2,
							}}
						>
							<Typography variant="h5" sx={{ px: 2, py: 1.5 }}>
								Product Information
							</Typography>
							<Divider />
							<Box sx={{ px: 2, pt: 2 }}>
								<TextField
									label="Product Name"
									name="name"
									value={formik.values.name}
									onChange={formik.handleChange}
									fullWidth
								/>
							</Box>

							<Box sx={{ px: 2, pt: 2 }}>
								<MuiFileInput
									value={formik.values.image}
									onChange={(e) => formik.setFieldValue("image", e)}
									placeholder="Insert an Image"
								/>
							</Box>
							<Box sx={{ px: 2, py: 2 }}>
								<TextField
									label="Desription"
									name="description"
									value={formik.values.description}
									onChange={formik.handleChange}
									multiline
									rows={3}
									fullWidth
								/>
							</Box>
						</Paper>
					</Grid>

					<Grid xs={12} md={6}>
						<Paper
							elevation={4}
							sx={{
								borderRadius: "5px",
								background: "linear-gradient(145deg, #e6e6e6,#ffffff)",
								boxShadow: "8px 8px 16px #c9c9c9, -8px -8px 16px #ffffff",
								padding: 2,
							}}
						>
							<Typography variant="h5" sx={{ px: 2, py: 1.5 }}>
								ECONOMIC INFO
							</Typography>
							<Divider />

							<Box sx={{ px: 2, pt: 2 }}>
								<TextField
									label="Price"
									name="price"
									type="number"
									value={formik.values.price}
									onChange={formik.handleChange}
									fullWidth
								/>
							</Box>
							<Box sx={{ px: 2, pt: 2 }}>
								<TextField
									label="Current Stocks"
									name="stocks"
									type="number"
									value={formik.values.stocks}
									onChange={formik.handleChange}
									fullWidth
								/>
							</Box>
							<Box sx={{ px: 2, py: 2 }}>
								<FormControlLabel
									control={<Switch />}
									name="availability"
									label="Availability"
									labelPlacement="top"
									checked={formik.values.availability}
									onChange={formik.handleChange}
								/>
							</Box>
						</Paper>
					</Grid>

					<Grid xs={12}>
						<Button
							variant="contained"
							sx={{ width: { xs: "100%", md: 200 } }}
							onClick={onSubmit}
						>
							Create Product
						</Button>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}

export default ProductCreate;

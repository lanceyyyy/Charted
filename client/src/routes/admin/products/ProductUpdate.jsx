// Libraries
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
// import {
// 	useGetProductQuery,
// 	useUpdatePlantProductMutation,
// 	useUpdateProductMutation,
// } from "../../../app/services/product";
import LoadingProgress from "../../../components/LoadingProgress";
import { enqueueSnackbar } from "notistack";
const product = {
  name: "sample",
  description: "sample description",
  img_url: "sample.jpg",
  price: 1000,
  stocks: 10,
  availability: true,
};

function ProductUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  // const {
  // 	data: product = {},
  // 	isLoading,
  // 	isSuccess,
  // } = useGetProductQuery(id);
  // const [updatePlantProduct] = useUpdatePlantProductMutation();
  // const [updateProduct] = useUpdateProductMutation();

  const isLoading = false;
  const isSuccess = true;

  const formik = useFormik({
    initialValues: {
      name: product.name,
      description: product.description,
      image: null,
      price: product.price,
      stocks: product.stocks,
      availability: product.availability,
    },
  });

  useEffect(() => {
    formik.setValues({
      name: product.name,
      description: product.description,
      image: null,
      price: product.price,
      stocks: product.stocks,
      availability: product.availability,
    });
  }, [product]);

  const onSubmit = async () => {
    console.log(formik.values);
    if (
      formik.values.name !== product.name ||
      formik.values.description !== product.description ||
      formik.values.stocks !== product.stocks ||
      formik.values.price !== product.price ||
      formik.values.type !== product.type ||
      formik.values.image !== null
    ) {
      const product = new FormData();

      product.append("name", formik.values.name);
      product.append("description", formik.values.description);
      product.append("price", formik.values.price);
      product.append("stocks", formik.values.stocks);

      console.log(product);

      if (formik.values.image !== null)
        product.append("image", formik.values.image);

      const new_data = { id, product };
      console.log({ new_data });

      // 	if (formik.values.category !== "Plant") {
      // 		await updateProduct(new_data).unwrap();
      // 		enqueueSnackbar("Update Product Successfully!", {
      // 			variant: "success",
      // 		});
      // 	} else {
      // 		await updatePlantProduct(new_data).unwrap();
      // 		enqueueSnackbar("Update Plant Product Successfully!", {
      // 			variant: "success",
      // 		});
      // 	}
      // 	navigate(`/admin/products/${id}`);
    }
  };

  let content;
  if (isLoading) {
    content = <LoadingProgress />;
  } else if (isSuccess) {
    content = (
      <Box>
        <AdminTitle title="Update Product" />
        <Box component="form" sx={{ mb: 5 }}>
          <Grid container spacing={3}>
            <Grid xs={12} md={6}>
              <Paper elevation={4}>
                <Typography variant="h5" sx={{ px: 2, py: 1.5 }}>
                  BASIC INFO
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
                    placeholder={product?.img_name}
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
              <Paper elevation={4}>
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
                Update Product
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        padding: 4,
      }}
    >
      {content}
    </Box>
  );
}

export default ProductUpdate;

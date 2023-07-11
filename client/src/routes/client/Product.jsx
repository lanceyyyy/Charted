import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { enqueueSnackbar } from "notistack";

import {
	Box,
	Button,
	Card,
	CardMedia,
	Stack,
	Typography,
} from "@mui/material";

import { PHPPrice } from "../../app/utils";
import { userSelector } from "../../app/features/userSlice";
import { useGetProductQuery } from "../../app/services/product";
import {
	useAddToCartMutation,
	useGetCartByUserQuery,
} from "../../app/services/cart-items";

function Product() {
	const { id } = useParams();
	const { data: product = {} } = useGetProductQuery(id);

	const user = useSelector(userSelector);
	const [addToCart] = useAddToCartMutation(user.id);
	const { data: cart_items = [] } = useGetCartByUserQuery(user.id);

	const handleAddToCart = async () => {
		if (user.id) {
			if (!cart_items.some((e) => e.product.id === product.id)) {
				await addToCart({ customer: user.id, product: product.id })
					.unwrap()
					.then((res) => {
						enqueueSnackbar("Added to cart successfully!", {
							variant: "success",
						});
					});
			} else {
				enqueueSnackbar("Product is already in the Cart!", {
					variant: "warning",
					preventDuplicate: true,
				});
			}
		} else {
			enqueueSnackbar("Please Log in First!", {
				variant: "warning",
				preventDuplicate: true,
			});
		}
	};
	return (
		<Box>
			<Typography textAlign="center" variant="h3" mb={3}>
				Product Detail
			</Typography>
			<Stack direction={{ md: "row" }} spacing={4} justifyContent="center">
				<Box sx={{ width: { xs: "100%", md: 400 } }}>
					<Card
						sx={{
							width: { xs: 280, md: 400 },
							m: { xs: "auto", md: 0 },
						}}
						elevation={9}
					>
						<CardMedia
							sx={{
								height: { xs: 280, md: 400 },
								width: { xs: 280, md: 400 },
								backgroundColor: "primary.main",
							}}
							image={`/images/sample-product.png`}
						/>
					</Card>
				</Box>
				<Stack mt={{ xs: 3, md: 0 }}>
					<Box textAlign={{ xs: "center", md: "left" }}>
						<Typography variant="h5" fontWeight="bold">
							{"Product Name"}
						</Typography>
						<Typography variant="h6">
							Description: {"product.description"}
						</Typography>
						<Typography variant="h6">
							Price: {PHPPrice.format(1232)}
						</Typography>
						<Typography variant="h6">
							Stocks: {"product.stocks"}
						</Typography>
					</Box>
					<Stack
						direction={{ xs: "row", md: "column" }}
						justifyContent={"center"}
					>
						<Button variant="contained" onClick={handleAddToCart}>
							Add To Cart
						</Button>
					</Stack>
				</Stack>
			</Stack>
		</Box>
	);
}

export default Product;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
	AppBar,
	Badge,
	Box,
	Button,
	Container,
	Divider,
	IconButton,
	Menu,
	MenuItem,
	Stack,
	Toolbar,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { userSelector } from "../../app/features/userSlice";
import { useGetCartByUserQuery } from "../../app/services/cart-items";

const MenuSelect = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<IconButton
				onClick={handleClick}
				sx={{
					color: "primary.red",
				}}
				size="large"
			>
				<MenuIcon sx={{ fontSize: { xs: 35, md: 50 } }} />
			</IconButton>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				sx={{
					"& .MuiList-padding": {
						padding: 0,
					},
				}}
			>
				<Box
					component={Link}
					to="/products"
					sx={{ textDecoration: "none", color: "inherit" }}
				>
					<MenuItem
						onClick={handleClose}
						sx={{
							backgroundColor: "primary.red",
							color: "primary.text",
							fontSize: {
								xs: "13px",
								md: "18px",
							},
							"&:hover": {
								color: "primary.red",
							},
						}}
					>
						Products
					</MenuItem>
				</Box>
				<MenuItem
					onClick={handleClose}
					sx={{
						backgroundColor: "primary.red",
						color: "primary.text",
						fontSize: {
							xs: "13px",
							md: "18px",
						},
						"&:hover": {
							color: "primary.red",
						},
					}}
				>
					Customize
				</MenuItem>
				<Box
					component={Link}
					to="/contact"
					sx={{ textDecoration: "none", color: "inherit" }}
				>
					<MenuItem
						onClick={handleClose}
						sx={{
							backgroundColor: "primary.red",
							color: "primary.text",
							fontSize: {
								xs: "13px",
								md: "18px",
							},
							"&:hover": {
								color: "primary.red",
							},
						}}
					>
						Contact Us
					</MenuItem>
				</Box>
			</Menu>
		</Box>
	);
};

const ProfileMenuSelect = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<IconButton
				onClick={handleClick}
				sx={{
					color: "primary.red",
				}}
				size="large"
			>
				<AccountCircleOutlinedIcon
					sx={{
						fontSize: { xs: 28, md: 35 },
					}}
				/>
			</IconButton>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				sx={{
					"& .MuiList-padding": {
						padding: 0,
					},
				}}
			>
				<Box
					component={Link}
					to="/customers"
					sx={{ textDecoration: "none", color: "inherit" }}
				>
					<MenuItem
						onClick={handleClose}
						sx={{
							backgroundColor: "primary.red",
							color: "primary.text",
							fontSize: {
								xs: "13px",
								md: "18px",
							},
							"&:hover": {
								color: "primary.red",
							},
						}}
					>
						Profile
					</MenuItem>
				</Box>
				<Box
					component={Link}
					to="/customers/order-history"
					sx={{ textDecoration: "none", color: "inherit" }}
				>
					<MenuItem
						onClick={handleClose}
						sx={{
							backgroundColor: "primary.red",
							color: "primary.text",
							fontSize: {
								xs: "13px",
								md: "18px",
							},
							"&:hover": {
								color: "primary.red",
							},
						}}
					>
						Order History
					</MenuItem>
				</Box>
				<Divider />
				<Box sx={{ textDecoration: "none", color: "inherit" }}>
					<MenuItem
						onClick={handleClose}
						sx={{
							backgroundColor: "primary.red",
							color: "primary.text",
							fontSize: {
								xs: "13px",
								md: "18px",
							},
							"&:hover": {
								color: "primary.red",
							},
						}}
					>
						Logout
					</MenuItem>
				</Box>
			</Menu>
		</Box>
	);
};

const CartItemsButton = () => {
	const [totalItems, setTotalItems] = useState(0);
	const user = useSelector(userSelector);
	const { data: cart_items = [] } = useGetCartByUserQuery(user.id);

	useEffect(() => {
		let total_num = cart_items.reduce((total, item) => {
			return total + item.quantity;
		}, 0);
		setTotalItems(total_num);
	}, [cart_items]);

	return (
		<IconButton
			size="large"
			sx={{ color: "primary.red" }}
			LinkComponent={Link}
			to="/customers/cart-items"
		>
			<Badge badgeContent={totalItems} color="error">
				<ShoppingCartOutlinedIcon
					sx={{
						fontSize: { xs: 28, md: 35 },
					}}
				/>
			</Badge>
		</IconButton>
	);
};

function ClientNavbar({ children }) {
	const user = useSelector(userSelector);
	return (
		<Box>
			<AppBar
				position="sticky"
				sx={{ backgroundColor: "#FFFFFF", paddingY: 0.5 }}
			>
				<Toolbar>
					<MenuSelect />
					<Box component={Link} to="/" sx={{ flexGrow: 1 }}>
						<Box
							component="img"
							sx={{
								flexGrow: 3,
								width: { xs: 200, md: 260 },
								aspectRatio: "auto",
								objectFit: "contain",
								height: 100,
							}}
							alt="Navbar Icon"
							src="/header-logo.png"
						/>
					</Box>

					{user.id ? (
						<Stack direction={{ xs: "column", md: "row" }}>
							<ProfileMenuSelect />
							<CartItemsButton />
						</Stack>
					) : (
						<Stack direction={{ xs: "column", md: "row" }}>
							<Button
								sx={{ color: "primary.red" }}
								LinkComponent={Link}
								to="/login"
							>
								Login
							</Button>
							<Button
								sx={{ color: "primary.red" }}
								LinkComponent={Link}
								to="/sign-up"
							>
								Sign Up
							</Button>
						</Stack>
					)}
				</Toolbar>
			</AppBar>
			<Box>{children}</Box>
		</Box>
	);
}

export default ClientNavbar;

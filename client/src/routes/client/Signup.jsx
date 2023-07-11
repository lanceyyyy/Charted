import { enqueueSnackbar } from "notistack";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import {
	Box,
	Button,
	Divider,
	Grid,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import { useSignUpCustomerMutation } from "../../app/services/user";

export default function Signup() {
	const navigate = useNavigate();
	const [signUpCustomer] = useSignUpCustomerMutation();

	const formik = useFormik({
		initialValues: {
			username: "",
			first_name: "",
			last_name: "",

			barangay: "",
			municipality: "",
			city: "",
			postal: "",
			phone_number: "",

			email: "",
			password: "",
			repassword: "",
		},
	});

	const onSubmit = async () => {
		if (formik.values.password === formik.values.repassword) {
			const new_customer = new FormData();
			new_customer.append("username", formik.values.username);
			new_customer.append("name", formik.values.name);
			new_customer.append("barangay", formik.values.barangay);
			new_customer.append("municipality", formik.values.municipality);
			new_customer.append("city", formik.values.city);
			new_customer.append("postal", formik.values.postal);
			new_customer.append("phone_number", formik.values.phone_number);
			new_customer.append("email", formik.values.email);
			new_customer.append("password", formik.values.password);

			await signUpCustomer(new_customer)
				.unwrap()
				.then((res) => {
					console.log("Create Customer Successfully", res);
					enqueueSnackbar("Account created successfully!", {
						variant: "success",
					});

					navigate(`/login`);
				})
				.catch((err) => console.error(err));
		} else {
			enqueueSnackbar("Password don't match!", { variant: "error" });
		}
	};

	return (
		<Box
			sx={{
				backgroundImage: "url(/login-bg.svg)",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				minHeight: "85vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: {
					xs: "column",
					lg: "row",
				},
			}}
		>
			<Box
				sx={{
					width: "20%",
					marginRight: "2%",
				}}
			>
				<Box
					component="img"
					sx={{ width: "100%" }}
					src="/hero-colored.png"
				></Box>
			</Box>
			<Box component="form" sx={{ marginY: "20px" }}>
				<Grid container>
					<Grid>
						<Paper
							elevation={4}
							sx={{
								padding: 3,
							}}
						>
							<Typography variant="h5" textAlign="center">
								Sign-up to CharTed Parol
							</Typography>
							<Divider />
							<Box sx={{ px: 2, pt: 2 }}>
								<TextField
									label="Email Address"
									required
									name="email_address"
									fullWidth
									sx={{
										paddingBottom: "10px",
									}}
									value={formik.values.email}
									onChange={formik.handleChange}
								/>
								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
									}}
								>
									<TextField
										label="First Name"
										required
										name="first_name"
										fullWidth
										sx={{
											paddingBottom: "10px",
											marginRight: "5px",
										}}
										value={formik.values.first_name}
										onChange={formik.handleChange}
									/>
									<TextField
										label="Last Name"
										required
										name="last_name"
										fullWidth
										sx={{
											paddingBottom: "10px",
										}}
										value={formik.values.last_name}
										onChange={formik.handleChange}
									/>
								</Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
									}}
								>
									<TextField
										label="Username"
										required
										name="username"
										fullWidth
										sx={{
											paddingBottom: "10px",
											marginRight: "5px",
										}}
										value={formik.values.username}
										onChange={formik.handleChange}
									/>
									<TextField
										label="Phone Number"
										required
										name="phone_number"
										fullWidth
										sx={{
											paddingBottom: "10px",
										}}
										value={formik.values.phone_number}
										onChange={formik.handleChange}
									/>
								</Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
									}}
								>
									<TextField
										label="Password"
										required
										name="password"
										fullWidth
										sx={{
											paddingBottom: "10px",
											marginRight: "5px",
										}}
										value={formik.values.password}
										onChange={formik.handleChange}
									/>
									<TextField
										label="Retype Password"
										required
										name="re_password"
										fullWidth
										sx={{
											paddingBottom: "10px",
										}}
										value={formik.values.repassword}
										onChange={formik.handleChange}
									/>
								</Box>

								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
									}}
								>
									<TextField
										label="Barangay"
										required
										name="barangay"
										fullWidth
										sx={{
											paddingBottom: "10px",
											marginRight: "5px",
										}}
										value={formik.values.barangay}
										onChange={formik.handleChange}
									/>
									<TextField
										label="Municipality"
										required
										name="municipality"
										fullWidth
										sx={{
											paddingBottom: "10px",
										}}
										value={formik.values.municipality}
										onChange={formik.handleChange}
									/>
								</Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
									}}
								>
									<TextField
										label="City"
										required
										name="city"
										fullWidth
										sx={{
											paddingBottom: "10px",
											marginRight: "5px",
										}}
										value={formik.values.city}
										onChange={formik.handleChange}
									/>
									<TextField
										label="Postal Code"
										required
										name="postal"
										fullWidth
										sx={{
											paddingBottom: "10px",
										}}
										value={formik.values.postal}
										onChange={formik.handleChange}
									/>
								</Box>
								<Button
									sx={{
										backgroundColor: "primary.red",
										color: "primary.text",
									}}
									onClick={onSubmit}
								>
									Sign-up
								</Button>
								<Box
									sx={{
										display: "flex",
										justifyContent: "end",
									}}
								>
									<Button LinkComponent={Link} to="/login">
										Already has an account?
									</Button>
								</Box>
							</Box>
						</Paper>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}

import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useLoginCustomerMutation } from "../../app/services/user";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { enqueueSnackbar } from "notistack";
import { setUser } from "../../app/features/userSlice";

export default function Login() {
  const [loginCustomer, { data }] = useLoginCustomerMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
  });
  const admin_username = "superadmin";
  const password = "admin123";

  const onSubmit = async () => {
    if (
      formik.values.username === admin_username &&
      formik.values.password === password
    ) {
      navigate("/admin");
      enqueueSnackbar("Login Successfully", { variant: "success" });
    } else {
      enqueueSnackbar("Wrong input email or password", {
        variant: "warning",
        preventDuplicate: true,
      });
    }
  };
  useEffect(() => {
    if (data) {
      if (data.id) {
        dispatch(setUser(data));
        enqueueSnackbar("Login Successfully", { variant: "success" });
        navigate("/admin");
      } else {
        enqueueSnackbar("Wrong input email or password", {
          variant: "warning",
          preventDuplicate: true,
        });

        console.log(data.error);
      }
    }
  }, [data]);

  return (
    <Box
      sx={{
        backgroundImage: "url(/login-bg.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "85vh",
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
      <Box component="form">
        <Grid container>
          <Grid>
            <Paper
              elevation={4}
              sx={{
                padding: 3,
              }}
            >
              <Typography variant="h5" textAlign="center">
                CharTed Parol Admin Account
              </Typography>
              <Divider />
              <Box sx={{ px: 2, pt: 2 }}>
                <TextField
                  label="Username"
                  required
                  name="username"
                  fullWidth
                  sx={{
                    paddingBottom: "10px",
                  }}
                  value={formik.values.username}
                  onChange={formik.handleChange}
                />
                <TextField
                  label="Password"
                  required
                  type="password"
                  name="password"
                  fullWidth
                  sx={{
                    paddingBottom: "10px",
                  }}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                <Button
                  sx={{
                    backgroundColor: "primary.red",
                    color: "primary.text",
                  }}
                  onClick={onSubmit}
                >
                  Login
                </Button>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <Button LinkComponent={Link} to="/sign-up">
                    Sign-up
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

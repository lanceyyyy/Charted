import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CircularProgress from "@mui/material/CircularProgress";

import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { Link, useParams } from "react-router-dom";

import { useGetCustomerQuery } from "../../app/services/user";
import { useSelector } from "react-redux";
import { userSelector } from "../../app/features/userSlice";
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
  const user = useSelector(userSelector);
  const {
    data: customer = {},
    isLoading,
    isSuccess,
  } = useGetCustomerQuery(user.id);
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
      <Box
        sx={{
          backgroundImage: `url(/backgroundhome1.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",

          alignItems: "center",
          flexDirection: "column",
          paddingY: "30px",
        }}
      >
        {/*  <Button
          alignSelf="end"
          variant="outlined"
          color="secondary"
          LinkComponent={Link}
          to={`/admin/products/${user.id}/update`}
        >
          <BorderColorOutlinedIcon sx={{ mr: 1, fontSize: 16 }} />
          Edit
        </Button> */}
        <Typography pb="10px" variant="h3" color="primary.text">
          Welcome {user.first_name}!
        </Typography>
        <Box
          sx={{
            width: "60%",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            padding: 5,
          }}
        >
          <Box
            sx={{
              marginTop: "20px",
            }}
          >
            <Typography variant="h6" textAlign="left" color="primary.red">
              Basic Information
            </Typography>
            <Divider />
            <TextField
              sx={{
                marginTop: "10px",
                marginLeft: "10px",
              }}
              label="Username"
              value={user.username}
            />
            <TextField
              sx={{
                marginTop: "10px",
                marginLeft: "10px",
              }}
              label="First Name"
              value={user.first_name}
            />
            <TextField
              sx={{
                marginTop: "10px",
                marginLeft: "10px",
              }}
              label="Last Name"
              value={user.last_name}
            />
            <TextField
              sx={{
                marginTop: "10px",
                marginLeft: "10px",
              }}
              label="Phone Number"
              value={user.phone_number}
            />
            <TextField
              sx={{
                marginTop: "10px",
                marginLeft: "10px",
              }}
              label="E-mail"
              value={user.email}
            />
          </Box>
          <Box
            sx={{
              marginTop: "20px",
            }}
          >
            <Typography variant="h6" textAlign="left" color="primary.red">
              Address
            </Typography>
            <Divider />
            <TextField
              sx={{
                marginTop: "10px",
                marginRight: "10px",
              }}
              label="Barangay"
              value={user.barangay}
            />
            <TextField
              sx={{
                marginTop: "10px",
                marginRight: "10px",
              }}
              label="Municipality"
              value={user.municipality}
            />
            <TextField
              sx={{
                marginTop: "10px",
                marginRight: "10px",
              }}
              label="City"
              value={user.city}
            />
            <TextField
              sx={{
                marginTop: "10px",
                marginRight: "10px",
              }}
              label="Postal Code"
              value={user.postal_code}
            />
          </Box>

          <Box
            sx={{
              marginTop: "20px",
            }}
          >
            <Typography variant="h6" textAlign="left" color="primary.red">
              Password
            </Typography>
            <Divider />
            <TextField
              sx={{
                marginTop: "10px",
                marginRight: "10px",
              }}
              label="Password"
              value={user.password}
            />
          </Box>
        </Box>
      </Box>
    );
  }
  return <Box>{content}</Box>;
}

export default CustomersDetail;

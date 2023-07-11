import {
  Box,
  Chip,
  CircularProgress,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useGetCustomerQuery } from "../../app/services/user";
import { useParams } from "react-router-dom";

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

export default function Profile() {
  const { id } = useParams();
  const { data: customer = {}, isLoading, isSuccess } = useGetCustomerQuery(id);
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
        </Box>
        <Grid container spacing={3} sx={{ mt: 3 }}>
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
  return (
    <Box
      sx={{
        backgroundImage: `url(/backgroundhome1.svg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          padding: "15px",
        }}
      >
        <Typography color="primary.text" variant="h4">
          Welcome to CharTed Parol
        </Typography>
      </Box>
      {content}
    </Box>
  );
}

import { Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import GroupIcon from "@mui/icons-material/Group";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FlareIcon from "@mui/icons-material/Flare";
import AdminTitle from "../../components/AdminTitle";

import { generateProductData } from "../../app/utils";
import { useGetProductsQuery } from "../../app/services/product";
import { useGetCustomersQuery } from "../../app/services/user";
import { useGetOrdersQuery } from "../../app/services/order";

const DataSummary = ({ title, num, Icon }) => {
  return (
    <Grid xs={12} md={6} lg={3}>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          display: "flex",
          justifyContent: "space-around",
          borderRadius: "10px",
          background: "linear-gradient(145deg, #e6e6e6, #ffffff)",
          boxShadow: "8px 8px 16px #c9c9c9, -8px -8px 16px #ffffff",
        }}
      >
        <Box sx={{}}>
          <Icon
            sx={{
              fontSize: 50,
              color: (theme) => theme.palette.primary.main,
            }}
          />
        </Box>
        <Box textAlign="end ">
          <Typography variant="h5">{num}</Typography>
          <Typography sx={{ color: "primary.red" }} variant="body1">
            {title}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

function Dashboard() {
  const { data: products = [], isLoading, isSuccess } = useGetProductsQuery();
  const { data: users = [], isLoadings, isSuccesss } = useGetCustomersQuery();
  const { data: orders = [], Loadings, Successs } = useGetOrdersQuery();
  return (
    <Box
      sx={{
        padding: 4,
      }}
    >
      <AdminTitle title="Dashboard " />
      <Box>
        <Grid container spacing={3}>
          <DataSummary title="Customers" num={users.length} Icon={GroupIcon} />
          <DataSummary
            title="Total Products"
            num={products.length}
            Icon={FlareIcon}
          />
          <DataSummary
            title="Pending Orders"
            num={orders.length}
            Icon={LocalShippingIcon}
          />
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;

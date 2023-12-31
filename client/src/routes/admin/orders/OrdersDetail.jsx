import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DateTime } from "luxon";

import {
  Box,
  Button,
  CardMedia,
  Chip,
  Divider,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Unstable_Grid2";
import { DataGrid } from "@mui/x-data-grid";

import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { PHPPrice, api_base_url } from "../../../app/utils";

import LoadingProgress from "../../../components/LoadingProgress";
import {
  useChangeStatusOrderMutation,
  useGetOrderQuery,
} from "../../../app/services/order";

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

const ImageColumn = ({ row }) => {
  return (
    <Paper sx={{ m: "auto" }}>
      <CardMedia
        image={`${api_base_url}${row.product.image_url}`}
        sx={{ height: 60, width: 60 }}
      />
    </Paper>
  );
};

const CategoryInfo = ({ row }) => {
  if (row.type === "regular") {
    return <Chip label="Regular" color="primary" />;
  } else {
    return <Chip label="Customizable" color="secondary" />;
  }
};

const CustomPhotoColumn = ({ row }) => {
  if (row.product.category === "customizable") {
    return (
      <Paper sx={{ m: "auto" }}>
        <CardMedia
          image={`${api_base_url}${row.image_url}`}
          sx={{ height: 60, width: 60 }}
        />
      </Paper>
    );
  }
};

const columns = [
  {
    field: "name",
    headerName: "Product",
    width: 200,
    valueFormatter: (product) => product.value.name,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
    valueFormatter: (price) => PHPPrice.format(price.value),
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 100,
    valueFormatter: (qty) => `${qty.value} ${qty.value > 1 ? "items" : "item"}`,
  },
  {
    field: "type",
    headerName: "Category",
    width: 125,
    headerAlign: "center",
    renderCell: (params) => <CategoryInfo {...params} />,
  },
];

const StatusInfo = ({ status }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(status);
  const handleChange = (e) => setCurrentStatus(e.target.value);
  const { id } = useParams();
  const [changeStatusOrder] = useChangeStatusOrderMutation();

  const handleSaveClick = async () => {
    await changeStatusOrder({ id, data: { status: currentStatus } }).then(
      (res) => {
        console.log("Status Changed successfully", res);
      }
    );
  };
  // useEffect(() => {
  // 	if (status === "Delivered" || status === "Cancelled") {
  // 		setIsDisabled(true);
  // 	}
  // }, [status]);
  return (
    <Paper
      elevation={3}
      sx={{
        background: "linear-gradient(145deg, #e6e6e6, #ffffff)",
        boxShadow: "7px 7px 14px #e0e0e0, -7px -7px 14px #ffffff",
        padding: 3,
      }}
    >
      <Title title="Status" />
      <Box
        sx={{
          display: "flex",
          height: 100,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <FormControl sx={{ width: { xs: "50%", md: "80%" } }}>
          <Select id="status" value={currentStatus} onChange={handleChange}>
            <MenuItem value={"To Process"}>
              <Chip label="To Process" color="warning" />
            </MenuItem>
            <MenuItem value={"On Its Way"}>
              <Chip label="On Its Way" color="info" />
            </MenuItem>
            <MenuItem value={"Delivered"}>
              <Chip label="Delivered" color="success" />
            </MenuItem>
            <MenuItem value={"Cancelled"}>
              <Chip label="Cancelled" color="error" />
            </MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          disabled={isDisabled}
          onClick={handleSaveClick}
        >
          Save
        </Button>
      </Box>
    </Paper>
  );
};

const order = {
  customer: {
    username: "sample-username",
    first_name: "sample",
    last_name: "last_name",
    barangay: "barangay",
    municipality: "municipality",
    city: "city",
    postal: "postal",
    phone_number: "phone_number",
    email: "sample@email.com",
    password: "1234",
  },
  total_price: 1230,
  total_quantity: 12,
  status: "To Process",
  order_items: [],
  createdAt: new Date(),
};

function OrdersDetail() {
  const { id } = useParams();
  const { data: order = [], isSuccess, isLoading } = useGetOrderQuery(id);

  let content;
  if (isLoading) {
    content = <LoadingProgress />;
  } else if (isSuccess) {
    content = (
      <Box>
        <Grid container spacing={4}>
          <Grid xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                background: "linear-gradient(145deg, #e6e6e6, #ffffff)",
                boxShadow: "7px 7px 14px #e0e0e0, -7px -7px 14px #ffffff",
                padding: 3,
              }}
            >
              <Title title="User Details" />
              <Info title="User Name" value={order.customer.username} />
              <Info title="First Name" value={order.customer.first_name} />
              <Info title="Last Name" value={order.customer.last_name} />
              <Info title="Email" value={order.customer.email} />
            </Paper>
          </Grid>
          <Grid xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                background: "linear-gradient(145deg, #e6e6e6, #ffffff)",
                boxShadow: "7px 7px 14px #e0e0e0, -7px -7px 14px #ffffff",
                padding: 3,
              }}
            >
              <Title title="User Address" />
              <Info title="Barangay" value={order.customer.username} />
              <Info title="Municipality" value={order.customer.first_name} />
              <Info title="City" value={order.customer.last_name} />
              <Info title="Postal" value={order.customer.email} />
              <Info title="Phone Number" value={order.customer.phone_number} />
            </Paper>
          </Grid>
          <Grid xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                background: "linear-gradient(145deg, #e6e6e6, #ffffff)",
                boxShadow: "7px 7px 14px #e0e0e0, -7px -7px 14px #ffffff",
                padding: 3,
              }}
            >
              <Title title="Order Details" />
              <Info
                title="Date Created"
                value={DateTime.fromISO(order.createdAt).toLocaleString(
                  DateTime.DATE_MED_WITH_WEEKDAY
                )}
              />
              <Info
                title="Total Price"
                value={PHPPrice.format(order.total_price)}
              />
              <Info
                title="Total Quantity"
                value={`${order.total_quantity} ${
                  order.total_quantity > 1 ? "items" : "item"
                }`}
              />
            </Paper>
          </Grid>
          <Grid xs={12}>
            <StatusInfo {...order} />
          </Grid>
          <Grid xs={12}>
            <DataGrid
              rowHeight={100}
              rows={order?.order_items}
              columns={columns}
              pageSizeOptions={[5, 10, 25]}
              initialState={{
                pagination: { paginationModel: { pageSize: 5 } },
              }}
              sx={{
                background: "#fff",
                boxShadow:
                  "inset 8px 8px 16px #c9c9c9, inset -8px -8px 16px #ffffff",
                border: "1px solid #000",
                padding: 1,
              }}
            />
          </Grid>
        </Grid>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        padding: 4,
      }}
    >
      <Typography variant="h4">Order Details</Typography>

      <Box>
        <Typography variant="overline">Order ID: </Typography>
        <Chip label={id} size="small" />
      </Box>

      {content}
    </Box>
  );
}

export default OrdersDetail;

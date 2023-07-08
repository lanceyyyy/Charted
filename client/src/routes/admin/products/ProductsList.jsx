import {
  PHPPrice,
  api_base_url,
  generateProductData,
} from "../../../app/utils";
import { Link } from "react-router-dom";

import { Box, CardMedia, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

// Custom Components
import AdminTitle from "../../../components/AdminTitle";
import ViewAction from "../../../components/ViewAction";

// import { useGetProductsQuery } from "../../../app/services/product";

const ImageColumn = ({ row }) => {
  return (
    <Paper sx={{ m: "auto" }}>
      <CardMedia
        // image={`${api_base_url}${row.img_url}`}
        image={`${row.img_url}`}
        sx={{
          height: 70,
          width: 70,
          backgroundColor: (theme) => theme.palette.primary.main,
        }}
      />
    </Paper>
  );
};

const productSampleData = Array.from(Array(10), (val, index) =>
  generateProductData(index + 1)
);

const columns = [
  {
    field: "image",
    headerName: "Image",
    headerAlign: "center",
    width: 150,
    renderCell: (params) => <ImageColumn {...params} />,
  },
  { field: "name", headerName: "Name", width: 200 },
  {
    field: "price",
    headerName: "Price",
    width: 120,
    valueFormatter: (price) => PHPPrice.format(price.value),
  },
  { field: "stocks", headerName: "Stocks", type: "number", width: 120 },
  {
    field: "id",
    headerName: "Action",
    headerAlign: "center",
    width: 100,
    renderCell: (params) => <ViewAction to="products" params={params} />,
  },
];

function ProductsList() {
  // const { data = [] } = useGetProductsQuery();
  return (
    <Box
      sx={{
        padding: 4,
      }}
    >
      <AdminTitle title="List of Products" />
      <DataGrid
        rowHeight={100}
        rows={productSampleData}
        columns={columns}
        pageSizeOptions={[5, 10, 25]}
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        sx={{
          background: "#fff",
          boxShadow: "inset 8px 8px 16px #c9c9c9, inset -8px -8px 16px #ffffff",
          border: "1px solid #E42A41",
          padding: 1,
        }}
      />
    </Box>
  );
}

export default ProductsList;

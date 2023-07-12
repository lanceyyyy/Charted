import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { PHPPrice, api_base_url } from "../../app/utils";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../app/services/product";

const CardProduct = ({ name, price, id, image_url, description }) => {
  return (
    <Grid xs={12} sm={6} md={3}>
      <Box>
        <Card
          elevation={3}
          sx={{
            width: { xs: 300, sm: 250, md: 275 },
            m: { xs: "auto", md: 0 },
          }}
        >
          <CardActionArea
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              padding: 3,
            }}
            LinkComponent={Link}
            to={`/products/${id}`}
          >
            <CardMedia
              image={`${api_base_url}${image_url}`}
              sx={{
                height: { xs: 300, sm: 250, md: 225 },
                width: { xs: 300, sm: 250, md: 225 },
                backgroundColor: "primary.main",
              }}
            />
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight="bold">
                {name}
              </Typography>
              <Typography>{description}</Typography>
              <Typography fontWeight="caption" color="primary.red">
                {PHPPrice.format(price)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Grid>
  );
};

function Products() {
  const { data: products = [], isLoading, isSuccess } = useGetProductsQuery();
  return (
    <Box
      sx={{
        backgroundImage: `url(/customize-bg.svg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Container>
        <Typography
          color="primary.text"
          pt={5}
          variant="h3"
          textAlign="center"
          sx={{ mb: 3 }}
        >
          Products
        </Typography>

        <Grid container spacing={3}>
          {products
            .filter((item) => item.availability === true && item.stocks > 1)
            .map((item) => (
              <CardProduct key={item.id} {...item} />
            ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Products;

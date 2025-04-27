import { FC } from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const featuredProducts = [
  {
    id: 1,
    title: 'Plantillas Ortopédicas',
    description: 'Plantillas personalizadas para mayor comodidad y soporte.',
    image: '/products/plantillas.jpg',
    price: '$99.900',
  },
  {
    id: 2,
    title: 'Rodillera Terapéutica',
    description: 'Soporte ajustable para rehabilitación y prevención de lesiones.',
    image: '/products/rodillera.jpg',
    price: '$79.900',
  },
  {
    id: 3,
    title: 'Faja Lumbar',
    description: 'Faja ergonómica para soporte y alivio de dolor lumbar.',
    image: '/products/faja.jpg',
    price: '$89.900',
  },
];

const FeaturedProducts: FC = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Productos Destacados
        </Typography>
        <Grid container spacing={4}>
          {featuredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {product.title}
                  </Typography>
                  <Typography color="text.secondary" paragraph>
                    {product.description}
                  </Typography>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {product.price}
                  </Typography>
                  <Button
                    component={RouterLink}
                    to={`/productos/${product.id}`}
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Ver Detalles
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            component={RouterLink}
            to="/productos"
            variant="outlined"
            color="primary"
            size="large"
          >
            Ver Todos los Productos
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedProducts; 
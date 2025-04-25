import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography, Chip } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  isNew?: boolean;
  discount?: number;
  categories: string[];
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Prótesis de pierna',
    price: '$2,999.99',
    image: '/products/prosthetic-leg.jpg', // You'll need to add these images
    description: 'Prótesis de alta tecnología para máxima comodidad y movilidad',
    isNew: true,
    categories: ['Prótesis', 'Premium'],
  },
  {
    id: 2,
    name: 'Faja Lumbar',
    price: '$149.99',
    image: '/products/back-brace.jpg',
    description: 'Soporte ergonómico para la zona lumbar con ajuste personalizado',
    discount: 15,
    categories: ['Soportes', 'Espalda'],
  },
  {
    id: 3,
    name: 'Collar Cervical',
    price: '$89.99',
    image: '/products/neck-brace.jpg',
    description: 'Collar cervical ajustable para alivio del dolor y recuperación',
    categories: ['Soportes', 'Cuello'],
  },
  {
    id: 4,
    name: 'Silla de Ruedas Plegable',
    price: '$599.99',
    image: '/products/wheelchair.jpg',
    description: 'Silla de ruedas ligera y plegable para máxima portabilidad',
    isNew: true,
    categories: ['Movilidad', 'Premium'],
  },
];

const FeaturedProducts = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'text.primary',
          }}
        >
          Productos Destacados
        </Typography>

        <Box
          sx={{
            display: { xs: 'none', md: 'grid' },
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 3,
          }}
        >
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Box>

        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <Slider {...sliderSettings}>
            {featuredProducts.map((product) => (
              <Box key={product.id} sx={{ p: 1 }}>
                <ProductCard product={product} />
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

const ProductCard = ({ product }: { product: Product }) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ duration: 0.2 }}
  >
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'visible',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        '&:hover': {
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
        },
      }}
    >
      {product.isNew && (
        <Chip
          label="Nuevo"
          color="primary"
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            zIndex: 1,
            fontWeight: 'bold',
          }}
        />
      )}
      {product.discount && (
        <Chip
          label={`-${product.discount}%`}
          color="secondary"
          sx={{
            position: 'absolute',
            top: product.isNew ? 56 : 16,
            right: 16,
            zIndex: 1,
            fontWeight: 'bold',
          }}
        />
      )}
      <Box sx={{ position: 'relative', paddingTop: '75%' }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, pt: 3 }}>
        <Box sx={{ mb: 1 }}>
          {product.categories.map((category) => (
            <Chip
              key={category}
              label={category}
              size="small"
              sx={{
                mr: 0.5,
                mb: 0.5,
                backgroundColor: 'rgba(76,161,175,0.1)',
                color: 'primary.main',
              }}
            />
          ))}
        </Box>
        <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 600 }}>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {product.description}
        </Typography>
        <Typography
          variant="h6"
          color="primary.main"
          sx={{
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          {product.discount ? (
            <>
              <Typography
                component="span"
                sx={{
                  textDecoration: 'line-through',
                  color: 'text.secondary',
                  fontSize: '0.9em',
                }}
              >
                {product.price}
              </Typography>
              {`$${(parseFloat(product.price.replace('$', '')) * (1 - product.discount / 100)).toFixed(2)}`}
            </>
          ) : (
            product.price
          )}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            borderRadius: 2,
            py: 1,
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          Ver más
        </Button>
      </CardActions>
    </Card>
  </motion.div>
);

export default FeaturedProducts; 
import { FC } from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const HeroSection: FC = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              component="h1"
              variant="h2"
              color="text.primary"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 2,
              }}
            >
              Soluciones Ortopédicas Personalizadas
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              paragraph
              sx={{ mb: 4 }}
            >
              Mejora tu calidad de vida con nuestros productos y servicios ortopédicos especializados.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                component={RouterLink}
                to="/productos"
                variant="contained"
                color="primary"
                size="large"
              >
                Ver Productos
              </Button>
              <Button
                component={RouterLink}
                to="/servicios"
                variant="outlined"
                color="primary"
                size="large"
              >
                Nuestros Servicios
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/hero-image.jpg"
              alt="Productos ortopédicos"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection; 
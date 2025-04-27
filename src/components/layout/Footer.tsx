import { Box, Container, Typography, Link, IconButton, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const FooterLink = styled(Link)({
  color: '#fff',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'text.primary',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: '1fr 1fr 1fr',
            },
            gap: 4,
          }}
        >
          {/* Columna 1: Información de contacto */}
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              OrtoWay
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Expertos en productos ortopédicos y soluciones personalizadas para tu bienestar.
            </Typography>
            <Typography variant="body2">
              Calle Principal #123, Ciudad
              <br />
              +57 123 456 7890
              <br />
              contacto@ortoway.com
            </Typography>
          </Box>

          {/* Columna 2: Enlaces rápidos */}
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Enlaces rápidos
            </Typography>
            <Stack spacing={1}>
              <FooterLink component={RouterLink} to="/">Inicio</FooterLink>
              <FooterLink component={RouterLink} to="/productos">Productos</FooterLink>
              <FooterLink component={RouterLink} to="/servicios">Servicios</FooterLink>
              <FooterLink component={RouterLink} to="/blog">Blog</FooterLink>
              <FooterLink component={RouterLink} to="/contacto">Contacto</FooterLink>
            </Stack>
          </Box>

          {/* Columna 3: Redes sociales */}
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Síguenos
            </Typography>
            <Box sx={{ mb: 2 }}>
              <IconButton
                href="https://facebook.com/ortoway"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'white', mr: 1 }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://wa.me/573123456789"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'white', mr: 1 }}
              >
                <WhatsAppIcon />
              </IconButton>
              <IconButton
                href="https://instagram.com/ortoway"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'white' }}
              >
                <InstagramIcon />
              </IconButton>
            </Box>
            <Typography variant="body2">
              Horario de atención:
              <br />
              Lunes a Viernes: 8:00 AM - 6:00 PM
              <br />
              Sábados: 9:00 AM - 2:00 PM
            </Typography>
          </Box>
        </Box>

        {/* Copyright */}
        <Typography
          variant="body2"
          sx={{
            mt: 4,
            pt: 2,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
          }}
        >
          © {new Date().getFullYear()} OrtoWay. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 
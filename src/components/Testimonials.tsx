import { Box, Container, Typography, Avatar, Paper } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  text: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ana María Rodríguez',
    image: '/testimonials/ana.jpg',
    text: 'La prótesis que me proporcionaron cambió mi vida. La atención personalizada y el seguimiento post-venta fueron excepcionales.',
    role: 'Paciente',
  },
  {
    id: 2,
    name: 'Carlos Mendoza',
    image: '/testimonials/carlos.jpg',
    text: 'Excelente servicio y productos de alta calidad. La faja lumbar me ha ayudado enormemente con mi problema de espalda.',
    role: 'Deportista',
  },
  {
    id: 3,
    name: 'Laura Sánchez',
    image: '/testimonials/laura.jpg',
    text: 'El equipo de OrtoWay fue muy profesional y atento. Me ayudaron a encontrar la solución perfecta para mi recuperación.',
    role: 'Fisioterapeuta',
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    cssEase: 'cubic-bezier(0.87, 0, 0.13, 1)',
    customPaging: () => (
      <Box
        sx={{
          width: 8,
          height: 8,
          backgroundColor: 'primary.main',
          borderRadius: '50%',
          opacity: 0.3,
          transition: 'all 0.3s ease',
          '&:hover': {
            opacity: 0.5,
          },
        }}
      />
    ),
  };

  return (
    <Box
      sx={{
        py: 12,
        backgroundColor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: 'linear-gradient(180deg, rgba(168,230,207,0.1) 0%, rgba(255,255,255,0) 100%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              textAlign: 'center',
              mb: 8,
              color: 'text.primary',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 60,
                height: 4,
                backgroundColor: 'primary.main',
                borderRadius: 2,
              },
            }}
          >
            Testimonios
          </Typography>
        </motion.div>

        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <Box key={testimonial.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 5 },
                    mx: 'auto',
                    maxWidth: 800,
                    borderRadius: 4,
                    backgroundColor: 'background.default',
                    position: 'relative',
                    overflow: 'visible',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: 4,
                      background: 'linear-gradient(45deg, rgba(76,161,175,0.1) 0%, rgba(168,230,207,0.1) 100%)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      position: 'relative',
                    }}
                  >
                    <Avatar
                      src={testimonial.image}
                      alt={testimonial.name}
                      sx={{
                        width: 120,
                        height: 120,
                        mb: 3,
                        border: 4,
                        borderColor: 'primary.main',
                        boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
                      }}
                    />
                    <FormatQuoteIcon
                      sx={{
                        fontSize: 48,
                        color: 'primary.main',
                        mb: 2,
                        opacity: 0.8,
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 4,
                        fontSize: '1.25rem',
                        fontStyle: 'italic',
                        color: 'text.secondary',
                        lineHeight: 1.8,
                        maxWidth: '90%',
                        position: 'relative',
                        '&::before, &::after': {
                          content: '""',
                          position: 'absolute',
                          width: 40,
                          height: 1,
                          backgroundColor: 'primary.main',
                          opacity: 0.3,
                        },
                        '&::before': {
                          top: -16,
                          left: '50%',
                          transform: 'translateX(-50%)',
                        },
                        '&::after': {
                          bottom: -16,
                          left: '50%',
                          transform: 'translateX(-50%)',
                        },
                      }}
                    >
                      "{testimonial.text}"
                    </Typography>
                    <Typography
                      variant="h6"
                      component="p"
                      sx={{
                        color: 'text.primary',
                        mb: 0.5,
                        fontWeight: 600,
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 500,
                      }}
                    >
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Testimonials; 
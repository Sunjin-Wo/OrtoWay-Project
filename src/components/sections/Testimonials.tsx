import { FC } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Avatar,
  Rating,
  Stack
} from '@mui/material';

interface TestimonialProps {
  name: string;
  role: string;
  comment: string;
  rating: number;
  image: string;
}

const testimonialData: TestimonialProps[] = [
  {
    name: "María García",
    role: "Paciente",
    comment: "El servicio y atención fueron excelentes. Los productos ortopédicos han mejorado significativamente mi calidad de vida.",
    rating: 5,
    image: "/testimonials/avatar1.jpg"
  },
  {
    name: "Carlos Rodríguez",
    role: "Deportista",
    comment: "Los productos son de alta calidad y el asesoramiento profesional fue fundamental para mi recuperación.",
    rating: 5,
    image: "/testimonials/avatar2.jpg"
  },
  {
    name: "Ana Martínez",
    role: "Fisioterapeuta",
    comment: "Recomiendo ampliamente sus productos. La calidad y el servicio son excepcionales.",
    rating: 5,
    image: "/testimonials/avatar3.jpg"
  }
];

const Testimonials: FC = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            mb: 6,
            fontWeight: 'bold',
            color: 'primary.main'
          }}
        >
          Testimonios
        </Typography>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {testimonialData.map((testimonial, index) => (
            <Paper
              key={index}
              sx={{
                flex: 1,
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                height: '100%',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  transition: 'transform 0.3s ease-in-out'
                }
              }}
            >
              <Avatar
                src={testimonial.image}
                alt={testimonial.name}
                sx={{
                  width: 80,
                  height: 80,
                  mb: 2,
                  border: 2,
                  borderColor: 'primary.main'
                }}
              />
              <Typography variant="h6" gutterBottom>
                {testimonial.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                {testimonial.role}
              </Typography>
              <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
              <Typography variant="body1" color="text.secondary">
                "{testimonial.comment}"
              </Typography>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Testimonials; 
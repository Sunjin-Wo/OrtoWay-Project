import { FC } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  IconButton,
  useTheme,
  alpha,
  Stack
} from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HealingIcon from '@mui/icons-material/Healing';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const services = [
  {
    icon: <AssignmentIcon sx={{ fontSize: 48 }} />,
    title: 'Evaluación Personalizada',
    description: 'Análisis detallado de tus necesidades ortopédicas por profesionales expertos.',
    highlight: 'Atención individualizada'
  },
  {
    icon: <LocalHospitalIcon sx={{ fontSize: 48 }} />,
    title: 'Consulta Especializada',
    description: 'Atención médica especializada para diagnóstico y tratamiento ortopédico.',
    highlight: 'Profesionales certificados'
  },
  {
    icon: <HealingIcon sx={{ fontSize: 48 }} />,
    title: 'Terapia y Rehabilitación',
    description: 'Programas de rehabilitación personalizados con seguimiento continuo.',
    highlight: 'Recuperación efectiva'
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 48 }} />,
    title: 'Soporte Continuo',
    description: 'Asesoramiento y seguimiento post-tratamiento para garantizar tu recuperación.',
    highlight: 'Disponibilidad 24/7'
  },
];

const Services: FC = () => {
  const theme = useTheme();

  return (
    <Box 
      sx={{ 
        py: 12,
        background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${alpha(theme.palette.primary.main, 0.05)} 100%)`
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            component="h2"
            variant="h2"
            color="primary"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 4,
                backgroundColor: theme.palette.primary.main,
                borderRadius: 2
              }
            }}
          >
            Nuestros Servicios
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mt: 3, mb: 6, maxWidth: 600, mx: 'auto' }}
          >
            Ofrecemos soluciones ortopédicas integrales con la más alta calidad y tecnología
          </Typography>
        </Box>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={4}
          flexWrap="wrap"
          useFlexGap
          sx={{
            '& > *': {
              minWidth: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(25% - 24px)' }
            }
          }}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2,
                overflow: 'hidden',
                transition: 'all 0.3s ease-in-out',
                flex: 1,
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: theme.shadows[10],
                  '& .service-icon': {
                    transform: 'scale(1.1)',
                    color: theme.palette.primary.main
                  }
                },
              }}
            >
              <CardContent sx={{ p: 4, flexGrow: 1 }}>
                <Box
                  sx={{
                    mb: 3,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 80
                  }}
                >
                  <IconButton
                    className="service-icon"
                    sx={{
                      p: 2,
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      color: 'text.primary',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        backgroundColor: alpha(theme.palette.primary.main, 0.15)
                      }
                    }}
                    disableRipple
                  >
                    {service.icon}
                  </IconButton>
                </Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h3"
                  sx={{
                    fontWeight: 'bold',
                    mb: 2
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {service.description}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="primary"
                  sx={{
                    mt: 'auto',
                    pt: 2,
                    borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                    fontWeight: 'medium'
                  }}
                >
                  {service.highlight}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Services; 
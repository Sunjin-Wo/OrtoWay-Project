import { Box, Container, Grid as MuiGrid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import BuildIcon from '@mui/icons-material/Build';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { motion } from 'framer-motion';

const Grid = styled(MuiGrid)({});

const ServiceIconWrapper = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  backgroundColor: theme.palette.background.paper,
  marginBottom: theme.spacing(2),
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '50%',
    border: `2px solid ${theme.palette.primary.main}`,
    opacity: 0,
    transition: 'all 0.3s ease',
  },
  '&:hover::before': {
    opacity: 1,
    transform: 'scale(1.1)',
  },
}));

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <PersonIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Asesoría personalizada',
    description: 'Expertos calificados te guiarán en la elección del producto ideal para tus necesidades específicas.',
  },
  {
    icon: <BuildIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Fabricación a medida',
    description: 'Creamos productos ortopédicos personalizados que se ajustan perfectamente a tu anatomía.',
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Envíos nacionales',
    description: 'Entregamos nuestros productos en todo el país, asegurando que lleguen en perfectas condiciones.',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Atención postventa',
    description: 'Seguimiento continuo y soporte técnico para garantizar tu satisfacción con nuestros productos.',
  },
];

const Services = () => {
  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: 'background.default',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: 'linear-gradient(180deg, rgba(76,161,175,0.05) 0%, rgba(255,255,255,0) 100%)',
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
              mb: 6,
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
            Nuestros Servicios
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={service.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    backgroundColor: 'transparent',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      '& .service-icon': {
                        transform: 'rotateY(180deg)',
                      },
                    },
                  }}
                >
                  <ServiceIconWrapper className="service-icon" sx={{ transition: 'transform 0.6s' }}>
                    {service.icon}
                  </ServiceIconWrapper>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      mb: 2,
                      color: 'text.primary',
                      fontWeight: 600,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -8,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 40,
                        height: 2,
                        backgroundColor: 'primary.main',
                        borderRadius: 1,
                        opacity: 0,
                        transition: 'all 0.3s ease',
                      },
                      '&:hover::after': {
                        opacity: 1,
                        width: '80%',
                      },
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      flexGrow: 1,
                      lineHeight: 1.7,
                    }}
                  >
                    {service.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services; 
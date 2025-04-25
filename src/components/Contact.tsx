import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  IconButton,
  Tooltip,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import { motion } from 'framer-motion';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      message: true,
    });
    if (isFormValid()) {
      console.log('Form submitted:', formData);
    }
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== '' &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      formData.message.trim() !== ''
    );
  };

  const getHelperText = (field: keyof ContactForm) => {
    if (!touched[field]) return '';
    if (field === 'email' && formData[field] && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData[field])) {
      return 'Correo electrónico inválido';
    }
    return formData[field].trim() === '' ? 'Este campo es requerido' : '';
  };

  return (
    <Box
      sx={{
        py: 12,
        backgroundColor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
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
            Contáctanos
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 5 },
                  height: '100%',
                  borderRadius: 4,
                  backgroundColor: 'background.paper',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 4,
                    height: '100%',
                    backgroundColor: 'primary.main',
                    borderRadius: '4px 0 0 4px',
                  },
                }}
              >
                <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
                  Envíanos un mensaje
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Nombre"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur('name')}
                    error={touched.name && formData.name.trim() === ''}
                    helperText={getHelperText('name')}
                    margin="normal"
                    required
                    sx={{
                      mb: 3,
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Correo electrónico"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur('email')}
                    error={touched.email && getHelperText('email') !== ''}
                    helperText={getHelperText('email')}
                    margin="normal"
                    required
                    sx={{
                      mb: 3,
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Mensaje"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={() => handleBlur('message')}
                    error={touched.message && formData.message.trim() === ''}
                    helperText={getHelperText('message')}
                    margin="normal"
                    required
                    multiline
                    rows={4}
                    sx={{
                      mb: 4,
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    endIcon={<SendIcon />}
                    disabled={!isFormValid()}
                    sx={{
                      py: 1.5,
                      color: 'white',
                      fontWeight: 'bold',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    Enviar consulta
                  </Button>
                </form>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 5 },
                  height: '100%',
                  borderRadius: 4,
                  backgroundColor: 'background.paper',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
                  Información de contacto
                </Typography>
                
                <Box sx={{ mb: 4 }}>
                  {[
                    {
                      icon: <LocationOnIcon />,
                      text: 'Calle Principal #123, Ciudad',
                      tooltip: 'Visítanos',
                    },
                    {
                      icon: <PhoneIcon />,
                      text: '+57 123 456 7890',
                      tooltip: 'Llámanos',
                    },
                    {
                      icon: <EmailIcon />,
                      text: 'contacto@ortoway.com',
                      tooltip: 'Escríbenos',
                    },
                  ].map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2,
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'translateX(8px)',
                        },
                      }}
                    >
                      <Tooltip title={item.tooltip} arrow>
                        <IconButton
                          sx={{
                            mr: 2,
                            color: 'primary.main',
                            backgroundColor: 'rgba(76,161,175,0.1)',
                            '&:hover': {
                              backgroundColor: 'rgba(76,161,175,0.2)',
                            },
                          }}
                        >
                          {item.icon}
                        </IconButton>
                      </Tooltip>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'text.primary',
                          fontWeight: 500,
                        }}
                      >
                        {item.text}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box
                  sx={{
                    flexGrow: 1,
                    minHeight: 300,
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 2,
                    boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d-74.0!3d4.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMzYnMDAuMCJOIDc0wrAwMCcwMC4wIlc!5e0!3m2!1sen!2sco!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      border: 0,
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 
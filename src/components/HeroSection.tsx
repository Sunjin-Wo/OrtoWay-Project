import { Box, Button, Container, Typography, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const HeroSection = () => {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '80vh', md: '90vh' },
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'background.default',
        overflow: 'hidden',
      }}
    >
      {/* Background image with gradient overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("/hero-background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(76,161,175,0.95) 0%, rgba(168,230,207,0.8) 100%)',
            opacity: 0.9,
          },
        }}
      />

      <Container maxWidth="lg">
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            textAlign: { xs: 'center', md: 'left' },
            gap: 3,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                maxWidth: '800px',
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              Recupera tu libertad con OrtoWay
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h4"
              sx={{
                color: 'white',
                maxWidth: '600px',
                mb: 4,
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
              }}
            >
              Productos ortopédicos hechos para ti
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{
                fontSize: '1.2rem',
                py: 1.5,
                px: 4,
                borderRadius: 2,
                backgroundColor: 'white',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  transform: 'translateY(-2px)',
                },
                boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
              }}
            >
              Explorar productos
            </Button>
          </motion.div>
        </Box>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <IconButton
          onClick={scrollToNextSection}
          sx={{
            color: 'white',
            backgroundColor: 'rgba(255,255,255,0.1)',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.2)',
            },
          }}
        >
          <KeyboardArrowDownIcon fontSize="large" />
        </IconButton>
      </motion.div>
    </Box>
  );
};

export default HeroSection; 
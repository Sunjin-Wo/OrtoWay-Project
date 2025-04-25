import { Box, Paper, Typography } from '@mui/material';

const LocationMap = () => {
  return (
    <Paper sx={{ p: 2, borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Nuestra Ubicación
      </Typography>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '400px',
          overflow: 'hidden',
          borderRadius: 1,
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
    </Paper>
  );
};

export default LocationMap; 
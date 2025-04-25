import { useState } from 'react';
import {
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  Snackbar,
} from '@mui/material';

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrar con backend
    setShowSuccess(true);
    setEmail('');
  };

  return (
    <Paper sx={{ p: 4, backgroundColor: 'background.paper', borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Suscríbete a nuestro Newsletter
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Recibe las últimas novedades, promociones y consejos de salud
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Tu correo electrónico"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Suscribirse
        </Button>
      </Box>
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
      >
        <Alert severity="success">
          ¡Gracias por suscribirte a nuestro newsletter!
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default NewsletterSubscribe; 
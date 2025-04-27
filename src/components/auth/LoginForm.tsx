import { FC, useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  useTheme,
  alpha
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';

interface LoginFormProps {
  onSwitchToRegister: () => void;
}

const LoginForm: FC<LoginFormProps> = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Verificación temporal de credenciales de administrador
    if (formData.email === 'root' && formData.password === '12345678') {
      console.log('Credenciales correctas, redirigiendo...');
      navigate('/admin/dashboard');
    } else {
      console.log('Credenciales incorrectas');
      alert('Credenciales incorrectas. Por favor, verifique sus datos.');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: 400,
        mx: 'auto'
      }}
    >
      <Box
        sx={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          backgroundColor: alpha(theme.palette.primary.main, 0.1),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 3
        }}
      >
        <LockOutlinedIcon color="primary" sx={{ fontSize: 32 }} />
      </Box>

      <Typography component="h1" variant="h4" gutterBottom fontWeight="bold">
        Iniciar Sesión
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Bienvenido de nuevo
      </Typography>

      <TextField
        fullWidth
        label="Usuario"
        name="email"
        type="text"
        autoComplete="username"
        value={formData.email}
        onChange={handleChange}
        margin="normal"
        required
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        label="Contraseña"
        name="password"
        type={showPassword ? 'text' : 'password'}
        autoComplete="current-password"
        value={formData.password}
        onChange={handleChange}
        margin="normal"
        required
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
                aria-label="toggle password visibility"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ mb: 3 }}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        size="large"
        sx={{
          mb: 3,
          py: 1.5,
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: `0 8px 20px ${alpha(theme.palette.primary.main, 0.4)}`
          }
        }}
      >
        Iniciar Sesión
      </Button>
    </Box>
  );
};

export default LoginForm; 
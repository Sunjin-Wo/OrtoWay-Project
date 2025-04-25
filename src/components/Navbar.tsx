import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

const navItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Productos', path: '/productos' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contacto', path: '/contacto' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ py: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <MedicalServicesIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h6" component="div" sx={{ color: 'primary.main' }}>
          OrtoWay
        </Typography>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} sx={{ justifyContent: 'center' }}>
            <ListItemText
              primary={item.label}
              sx={{ color: 'text.primary', textAlign: 'center' }}
            />
          </ListItem>
        ))}
        <ListItem sx={{ justifyContent: 'center', mt: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              color: 'text.primary',
              fontWeight: 'bold',
            }}
          >
            Agendar cita
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" color="default" elevation={1}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <MedicalServicesIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                color: 'primary.main',
                fontWeight: 'bold',
              }}
            >
              OrtoWay
            </Typography>
          </Box>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  sx={{ color: 'text.primary' }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  ml: 2,
                  color: 'text.primary',
                  fontWeight: 'bold',
                }}
              >
                Agendar cita
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
      <Toolbar /> {/* This is for spacing below the fixed AppBar */}
    </>
  );
};

export default Navbar; 
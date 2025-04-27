import { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  Avatar,
  Divider,
  useTheme,
  alpha
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  CalendarMonth as CalendarIcon,
  People as PeopleIcon,
  Assignment as AssignmentIcon,
  Settings as SettingsIcon,
  Message as MessageIcon,
  LocationOn as LocationIcon,
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const DRAWER_WIDTH = 280;

const menuItems = [
  { text: 'Dashboard', icon: DashboardIcon, path: '/admin/dashboard' },
  { text: 'Calendario', icon: CalendarIcon, path: '/admin/calendar' },
  { text: 'Pacientes', icon: PeopleIcon, path: '/admin/patients' },
  { text: 'Mensajes', icon: MessageIcon, path: '/admin/messages' },
  { text: 'Ubicación', icon: LocationIcon, path: '/admin/location' },
  { text: 'Reportes', icon: AssignmentIcon, path: '/admin/reports' },
  { text: 'Configuración', icon: SettingsIcon, path: '/admin/settings' },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: open ? DRAWER_WIDTH : theme.spacing(9),
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: open ? DRAWER_WIDTH : theme.spacing(9),
            boxSizing: 'border-box',
            borderRight: 'none',
            boxShadow: `0 0 20px ${alpha(theme.palette.primary.main, 0.1)}`,
            backgroundColor: theme.palette.background.paper,
            transition: theme.transitions.create(['width'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
            overflowX: 'hidden',
          },
        }}
      >
        <Box sx={{ 
          p: 2, 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: open ? 'space-between' : 'center',
          backgroundColor: alpha(theme.palette.primary.main, 0.03)
        }}>
          {open && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: theme.palette.primary.main
                }}
              >
                A
              </Avatar>
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  Admin
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Administrador
                </Typography>
              </Box>
            </Box>
          )}
          <IconButton onClick={handleDrawerToggle}>
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
        <Divider />
        <List sx={{ mt: 1 }}>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  py: 1.5,
                  backgroundColor: location.pathname === item.path ? alpha(theme.palette.primary.main, 0.08) : 'transparent',
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.12),
                  }
                }}
                onClick={() => navigate(item.path)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : 'auto',
                    justifyContent: 'center',
                    color: location.pathname === item.path ? theme.palette.primary.main : 'inherit'
                  }}
                >
                  <item.icon />
                </ListItemIcon>
                {open && (
                  <ListItemText 
                    primary={item.text}
                    sx={{
                      opacity: open ? 1 : 0,
                      '& .MuiTypography-root': {
                        fontWeight: location.pathname === item.path ? 600 : 400,
                        color: location.pathname === item.path ? theme.palette.primary.main : 'inherit'
                      }
                    }}
                  />
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          backgroundColor: alpha(theme.palette.background.default, 0.7),
          minHeight: '100vh'
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout; 
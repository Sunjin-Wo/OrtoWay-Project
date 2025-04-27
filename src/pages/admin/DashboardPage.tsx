import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  useTheme,
  alpha,
  Card,
  CardContent
} from '@mui/material';
import {
  People as PeopleIcon,
  CalendarToday as CalendarIcon,
  Assignment as AssignmentIcon,
  Timeline as TimelineIcon,
  MoreVert as MoreVertIcon,
  Add as AddIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon
} from '@mui/icons-material';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const theme = useTheme();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const navigate = useNavigate();

  const stats = [
    { 
      title: 'Pacientes Totales',
      value: '150',
      icon: PeopleIcon,
      trend: '+12%',
      trendUp: true
    },
    { 
      title: 'Citas Pendientes',
      value: '12',
      icon: CalendarIcon,
      trend: '+3%',
      trendUp: true
    },
    { 
      title: 'Tratamientos Activos',
      value: '45',
      icon: AssignmentIcon,
      trend: '-5%',
      trendUp: false
    },
    { 
      title: 'Consultas este Mes',
      value: '78',
      icon: TimelineIcon,
      trend: '+18%',
      trendUp: true
    }
  ];

  const recentAppointments = [
    {
      id: 1,
      patient: 'Ana María López',
      date: '2024-03-20',
      time: '09:00 AM',
      type: 'Control',
      status: 'Pendiente'
    },
    {
      id: 2,
      patient: 'Carlos Rodríguez',
      date: '2024-03-20',
      time: '10:30 AM',
      type: 'Primera Vez',
      status: 'Confirmada'
    },
    {
      id: 3,
      patient: 'Laura Martínez',
      date: '2024-03-20',
      time: '11:45 AM',
      type: 'Emergencia',
      status: 'En Proceso'
    },
    {
      id: 4,
      patient: 'Juan Pablo García',
      date: '2024-03-20',
      time: '02:15 PM',
      type: 'Control',
      status: 'Pendiente'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pendiente':
        return 'warning';
      case 'confirmada':
        return 'success';
      case 'en proceso':
        return 'info';
      default:
        return 'default';
    }
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    return { days, firstDay };
  };

  const { days, firstDay } = getDaysInMonth(currentMonth);
  const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  return (
    <DashboardLayout>
      <Box sx={{ py: 4 }}>
        <Container maxWidth="xl">
          <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
                Dashboard de Administración
              </Typography>
              <Typography color="text.secondary">
                Bienvenido de nuevo, Admin
              </Typography>
            </Box>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                color: 'white',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: `0 8px 20px ${alpha(theme.palette.primary.main, 0.4)}`
                },
                transition: 'all 0.3s ease-in-out'
              }}
            >
              Nueva Cita
            </Button>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <Grid item xs={12} sm={6} md={3} key={stat.title}>
                      <Paper
                        sx={{
                          p: 3,
                          display: 'flex',
                          flexDirection: 'column',
                          borderRadius: 2,
                          background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.background.paper, 0.9)} 100%)`,
                          boxShadow: `0 2px 12px ${alpha(theme.palette.primary.main, 0.08)}`,
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.12)}`
                          },
                          transition: 'all 0.3s ease-in-out'
                        }}
                      >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                          <Icon sx={{ fontSize: 40, color: 'primary.main' }} />
                          <Chip
                            label={stat.trend}
                            size="small"
                            color={stat.trendUp ? 'success' : 'error'}
                            sx={{ fontWeight: 'bold' }}
                          />
                        </Box>
                        <Typography variant="h4" component="div" fontWeight="bold" gutterBottom>
                          {stat.value}
                        </Typography>
                        <Typography color="text.secondary">
                          {stat.title}
                        </Typography>
                      </Paper>
                    </Grid>
                  );
                })}
              </Grid>

              <Paper
                sx={{
                  mt: 3,
                  p: 3,
                  borderRadius: 2,
                  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.background.paper, 0.9)} 100%)`,
                  boxShadow: `0 2px 12px ${alpha(theme.palette.primary.main, 0.08)}`
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6" fontWeight="bold">
                    Citas Recientes
                  </Typography>
                  <Button
                    color="primary"
                    size="small"
                    sx={{ textTransform: 'none' }}
                  >
                    Ver todas
                  </Button>
                </Box>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Paciente</TableCell>
                        <TableCell>Fecha</TableCell>
                        <TableCell>Hora</TableCell>
                        <TableCell>Tipo</TableCell>
                        <TableCell>Estado</TableCell>
                        <TableCell align="right">Acciones</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {recentAppointments.map((appointment) => (
                        <TableRow key={appointment.id} hover>
                          <TableCell>{appointment.patient}</TableCell>
                          <TableCell>{appointment.date}</TableCell>
                          <TableCell>{appointment.time}</TableCell>
                          <TableCell>{appointment.type}</TableCell>
                          <TableCell>
                            <Chip
                              label={appointment.status}
                              size="small"
                              color={getStatusColor(appointment.status) as any}
                              sx={{ fontWeight: 500 }}
                            />
                          </TableCell>
                          <TableCell align="right">
                            <IconButton size="small">
                              <MoreVertIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>

            <Grid item xs={12} lg={4}>
              <Card
                sx={{
                  borderRadius: 2,
                  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.background.paper, 0.9)} 100%)`,
                  boxShadow: `0 2px 12px ${alpha(theme.palette.primary.main, 0.08)}`
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6" fontWeight="bold">
                      Calendario
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <IconButton size="small" onClick={handlePrevMonth}>
                        <ChevronLeftIcon />
                      </IconButton>
                      <IconButton size="small" onClick={handleNextMonth}>
                        <ChevronRightIcon />
                      </IconButton>
                    </Box>
                  </Box>
                  
                  <Typography variant="subtitle1" color="text.secondary" align="center" sx={{ mb: 2 }}>
                    {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                  </Typography>

                  <Grid container spacing={1} sx={{ textAlign: 'center' }}>
                    {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((day) => (
                      <Grid item xs={12/7} key={day}>
                        <Typography variant="caption" color="text.secondary">
                          {day}
                        </Typography>
                      </Grid>
                    ))}
                    
                    {Array.from({ length: firstDay }).map((_, index) => (
                      <Grid item xs={12/7} key={`empty-${index}`}>
                        <Box sx={{ py: 1 }} />
                      </Grid>
                    ))}
                    
                    {Array.from({ length: days }).map((_, index) => (
                      <Grid item xs={12/7} key={index}>
                        <Box
                          sx={{
                            py: 1,
                            borderRadius: 1,
                            cursor: 'pointer',
                            '&:hover': {
                              backgroundColor: alpha(theme.palette.primary.main, 0.08)
                            },
                            ...(index + 1 === new Date().getDate() && currentMonth.getMonth() === new Date().getMonth() && {
                              backgroundColor: alpha(theme.palette.primary.main, 0.12),
                              color: theme.palette.primary.main,
                              fontWeight: 'bold'
                            })
                          }}
                        >
                          {index + 1}
                        </Box>
                      </Grid>
                    ))}
                  </Grid>

                  <Box sx={{ mt: 3, textAlign: 'center' }}>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => navigate('/admin/calendar')}
                      sx={{ textTransform: 'none' }}
                    >
                      Ver calendario completo
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </DashboardLayout>
  );
};

export default DashboardPage; 
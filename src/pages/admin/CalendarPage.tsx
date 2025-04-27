import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  IconButton,
  Button,
  Grid,
  useTheme,
  alpha,
  Tooltip,
  Badge
} from '@mui/material';
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Add as AddIcon,
  ViewDay as ViewDayIcon,
  ViewWeek as ViewWeekIcon,
  ViewModule as ViewMonthIcon,
  Today as TodayIcon,
  Circle as CircleIcon
} from '@mui/icons-material';
import DashboardLayout from '../../components/layout/DashboardLayout';

const HOURS = Array.from({ length: 24 }, (_, i) => i);
const DAYS_OF_WEEK = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

// Datos de ejemplo para las citas
const SAMPLE_APPOINTMENTS = [
  { id: 1, title: 'Consulta - Ana García', start: '10:00', end: '11:00', color: '#4CAF50' },
  { id: 2, title: 'Control - Juan Pérez', start: '14:30', end: '15:30', color: '#2196F3' },
  { id: 3, title: 'Emergencia - María López', start: '16:00', end: '17:00', color: '#f44336' },
];

const CalendarPage = () => {
  const theme = useTheme();
  const [view, setView] = useState<'day' | 'week' | 'month'>('week');
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleViewChange = (newView: 'day' | 'week' | 'month') => {
    setView(newView);
  };

  const handlePrevious = () => {
    const newDate = new Date(currentDate);
    switch (view) {
      case 'day':
        newDate.setDate(currentDate.getDate() - 1);
        break;
      case 'week':
        newDate.setDate(currentDate.getDate() - 7);
        break;
      case 'month':
        newDate.setMonth(currentDate.getMonth() - 1);
        break;
    }
    setCurrentDate(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(currentDate);
    switch (view) {
      case 'day':
        newDate.setDate(currentDate.getDate() + 1);
        break;
      case 'week':
        newDate.setDate(currentDate.getDate() + 7);
        break;
      case 'month':
        newDate.setMonth(currentDate.getMonth() + 1);
        break;
    }
    setCurrentDate(newDate);
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  const getWeekDates = () => {
    const dates = [];
    const curr = new Date(currentDate);
    const first = curr.getDate() - curr.getDay();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(curr.setDate(first + i));
      dates.push(new Date(date));
    }
    return dates;
  };

  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const renderDayView = () => (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider', backgroundColor: alpha(theme.palette.primary.main, 0.03) }}>
        <Typography variant="h6" align="center">
          {DAYS_OF_WEEK[currentDate.getDay()]}, {currentDate.getDate()} de {MONTHS[currentDate.getMonth()]}
        </Typography>
      </Box>
      <Box sx={{ flex: 1, overflow: 'auto' }}>
        {HOURS.map((hour) => (
          <Box
            key={hour}
            sx={{
              display: 'flex',
              borderBottom: 1,
              borderColor: 'divider',
              minHeight: 80
            }}
          >
            <Box
              sx={{
                width: 100,
                p: 1,
                borderRight: 1,
                borderColor: 'divider',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: alpha(theme.palette.background.default, 0.5)
              }}
            >
              <Typography variant="body2" color="text.secondary">
                {`${hour.toString().padStart(2, '0')}:00`}
              </Typography>
            </Box>
            <Box sx={{ flex: 1, position: 'relative', p: 1 }}>
              {SAMPLE_APPOINTMENTS.map(apt => (
                parseInt(apt.start) === hour && (
                  <Paper
                    key={apt.id}
                    sx={{
                      p: 1,
                      mb: 1,
                      backgroundColor: alpha(apt.color, 0.1),
                      borderLeft: 3,
                      borderColor: apt.color,
                      '&:hover': {
                        backgroundColor: alpha(apt.color, 0.2),
                        transform: 'translateY(-2px)',
                        transition: 'all 0.3s ease'
                      }
                    }}
                  >
                    <Typography variant="subtitle2" sx={{ color: apt.color }}>
                      {apt.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {apt.start} - {apt.end}
                    </Typography>
                  </Paper>
                )
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );

  const renderWeekView = () => (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Grid container sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Grid item xs={1} component="div" sx={{ borderRight: 1, borderColor: 'divider', p: 2 }} />
        {getWeekDates().map((date, index) => (
          <Grid 
            item 
            xs 
            component="div"
            key={index}
            sx={{ 
              p: 2, 
              textAlign: 'center',
              backgroundColor: date.toDateString() === new Date().toDateString() 
                ? alpha(theme.palette.primary.main, 0.05)
                : 'transparent',
              borderRight: 1,
              borderColor: 'divider'
            }}
          >
            <Typography
              variant="subtitle2"
              color="text.secondary"
              gutterBottom
            >
              {DAYS_OF_WEEK[date.getDay()]}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: date.toDateString() === new Date().toDateString() ? 'bold' : 'normal',
                color: date.toDateString() === new Date().toDateString() 
                  ? theme.palette.primary.main
                  : 'text.primary'
              }}
            >
              {date.getDate()}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ flex: 1, overflow: 'auto' }}>
        <Grid container>
          <Grid item xs={1} component="div">
            <Box>
              {HOURS.map((hour) => (
                <Box
                  key={hour}
                  sx={{
                    height: 80,
                    borderBottom: 1,
                    borderRight: 1,
                    borderColor: 'divider',
                    p: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: alpha(theme.palette.background.default, 0.5)
                  }}
                >
                  <Typography variant="caption" color="text.secondary">
                    {`${hour.toString().padStart(2, '0')}:00`}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
          {getWeekDates().map((date, dateIndex) => (
            <Grid item xs component="div" key={dateIndex}>
              {HOURS.map((hour) => (
                <Box
                  key={hour}
                  sx={{
                    height: 80,
                    borderBottom: 1,
                    borderRight: 1,
                    borderColor: 'divider',
                    p: 1,
                    position: 'relative',
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.02)
                    }
                  }}
                >
                  {SAMPLE_APPOINTMENTS.map(apt => (
                    parseInt(apt.start) === hour && dateIndex === currentDate.getDay() && (
                      <Paper
                        key={apt.id}
                        elevation={0}
                        sx={{
                          p: 1,
                          mb: 1,
                          backgroundColor: alpha(apt.color, 0.1),
                          borderLeft: 3,
                          borderColor: apt.color,
                          borderRadius: '4px 8px 8px 4px',
                          '&:hover': {
                            backgroundColor: alpha(apt.color, 0.2),
                            transform: 'translateY(-2px)',
                            transition: 'all 0.3s ease',
                            boxShadow: `0 4px 12px ${alpha(apt.color, 0.2)}`
                          }
                        }}
                      >
                        <Typography variant="subtitle2" sx={{ color: apt.color, fontWeight: 500 }}>
                          {apt.title}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {apt.start} - {apt.end}
                        </Typography>
                      </Paper>
                    )
                  ))}
                </Box>
              ))}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );

  const renderMonthView = () => {
    const { firstDay, daysInMonth } = getDaysInMonth();
    const totalSlots = Math.ceil((firstDay + daysInMonth) / 7) * 7;

    return (
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 2 }}>
        <Typography variant="h6" align="center" gutterBottom>
          {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
        </Typography>
        <Grid container spacing={1}>
          {DAYS_OF_WEEK.map(day => (
            <Grid item xs component="div" key={day}>
              <Typography
                variant="subtitle2"
                align="center"
                color="text.secondary"
                sx={{ 
                  mb: 2,
                  fontWeight: 500,
                  fontSize: '0.875rem'
                }}
              >
                {day.slice(0, 3)}
              </Typography>
            </Grid>
          ))}
          {Array.from({ length: totalSlots }).map((_, index) => {
            const dayNumber = index - firstDay + 1;
            const isCurrentMonth = dayNumber > 0 && dayNumber <= daysInMonth;
            const isToday = isCurrentMonth && 
              dayNumber === new Date().getDate() && 
              currentDate.getMonth() === new Date().getMonth() &&
              currentDate.getFullYear() === new Date().getFullYear();

            // Determinar si hay eventos para este día (ejemplo)
            const hasEvents = dayNumber === 15 || dayNumber === 20 || dayNumber === 25;

            return (
              <Grid item xs component="div" key={index}>
                {isCurrentMonth ? (
                  <Paper
                    elevation={0}
                    sx={{
                      p: 1,
                      height: 100,
                      backgroundColor: isToday 
                        ? alpha(theme.palette.primary.main, 0.08)
                        : alpha(theme.palette.background.paper, 0.6),
                      border: 1,
                      borderColor: isToday 
                        ? theme.palette.primary.main 
                        : alpha(theme.palette.divider, 0.1),
                      borderRadius: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      cursor: 'pointer',
                      overflow: 'hidden',
                      '&:hover': {
                        backgroundColor: isToday 
                          ? alpha(theme.palette.primary.main, 0.12)
                          : alpha(theme.palette.primary.main, 0.04),
                        transform: 'translateY(-2px)',
                        transition: 'all 0.2s ease',
                        boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.08)}`
                      }
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: isToday ? 600 : hasEvents ? 500 : 400,
                        color: isToday ? theme.palette.primary.main : 'text.primary',
                        mb: 1
                      }}
                    >
                      {dayNumber}
                    </Typography>
                    {hasEvents && (
                      <Box sx={{ mt: 'auto' }}>
                        <Box 
                          sx={{ 
                            p: 0.75,
                            backgroundColor: alpha(theme.palette.primary.main, 0.08),
                            borderRadius: 1,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                            mb: 0.5
                          }}
                        >
                          <CircleIcon sx={{ fontSize: 8, color: theme.palette.primary.main }} />
                          <Typography variant="caption" sx={{ color: theme.palette.primary.main, fontWeight: 500 }}>
                            2 citas
                          </Typography>
                        </Box>
                      </Box>
                    )}
                  </Paper>
                ) : (
                  <Box 
                    sx={{ 
                      height: 100,
                      backgroundColor: alpha(theme.palette.background.paper, 0.3),
                      borderRadius: 2
                    }} 
                  />
                )}
              </Grid>
            );
          })}
        </Grid>
      </Box>
    );
  };

  return (
    <DashboardLayout>
      <Box sx={{ py: 3 }}>
        <Container maxWidth="xl">
          <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="h4" fontWeight="bold">
                Calendario
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton onClick={handlePrevious}>
                  <ChevronLeftIcon />
                </IconButton>
                <IconButton onClick={handleNext}>
                  <ChevronRightIcon />
                </IconButton>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={handleToday}
                  startIcon={<TodayIcon />}
                  sx={{ ml: 1 }}
                >
                  Hoy
                </Button>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Box sx={{ 
                display: 'flex',
                gap: 0.5,
                backgroundColor: alpha(theme.palette.primary.main, 0.08),
                borderRadius: 1,
                p: 0.5
              }}>
                <Tooltip title="Vista diaria">
                  <IconButton 
                    size="small"
                    onClick={() => handleViewChange('day')}
                    sx={{ 
                      backgroundColor: view === 'day' ? 'white' : 'transparent',
                      boxShadow: view === 'day' ? 1 : 0
                    }}
                  >
                    <ViewDayIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Vista semanal">
                  <IconButton 
                    size="small"
                    onClick={() => handleViewChange('week')}
                    sx={{ 
                      backgroundColor: view === 'week' ? 'white' : 'transparent',
                      boxShadow: view === 'week' ? 1 : 0
                    }}
                  >
                    <ViewWeekIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Vista mensual">
                  <IconButton 
                    size="small"
                    onClick={() => handleViewChange('month')}
                    sx={{ 
                      backgroundColor: view === 'month' ? 'white' : 'transparent',
                      boxShadow: view === 'month' ? 1 : 0
                    }}
                  >
                    <ViewMonthIcon />
                  </IconButton>
                </Tooltip>
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
          </Box>

          <Paper
            sx={{
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: `0 0 20px ${alpha(theme.palette.primary.main, 0.1)}`,
              height: 'calc(100vh - 180px)'
            }}
          >
            {view === 'day' && renderDayView()}
            {view === 'week' && renderWeekView()}
            {view === 'month' && renderMonthView()}
          </Paper>
        </Container>
      </Box>
    </DashboardLayout>
  );
};

export default CalendarPage; 
import { useState } from 'react';
import {
  Paper,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { Calendar } from '@mui/x-date-pickers/Calendar';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const ActivityCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  // Mock data - esto se reemplazará con datos del backend
  const activities = [
    {
      date: new Date(),
      title: 'Taller de Rehabilitación',
      time: '10:00 AM',
      description: 'Taller grupal de ejercicios de rehabilitación',
    },
    {
      date: new Date(),
      title: 'Charla Informativa',
      time: '2:00 PM',
      description: 'Nuevos avances en prótesis ortopédicas',
    },
  ];

  return (
    <Paper sx={{ p: 3, borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Calendario de Actividades
      </Typography>
      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Calendar
            value={selectedDate}
            onChange={(newValue) => setSelectedDate(newValue)}
          />
        </LocalizationProvider>
        <Box sx={{ flex: 1, minWidth: 300 }}>
          <Typography variant="subtitle1" gutterBottom>
            Actividades del día
          </Typography>
          <List>
            {activities.map((activity, index) => (
              <Box key={index}>
                <ListItem>
                  <ListItemText
                    primary={activity.title}
                    secondary={`${activity.time} - ${activity.description}`}
                  />
                </ListItem>
                {index < activities.length - 1 && <Divider />}
              </Box>
            ))}
          </List>
        </Box>
      </Box>
    </Paper>
  );
};

export default ActivityCalendar; 
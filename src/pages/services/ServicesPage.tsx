import { Container, Grid, Typography, Box } from '@mui/material';
import SearchBar from '../../components/search/SearchBar';
import AppointmentForm from '../../components/appointments/AppointmentForm';
import NewsletterSubscribe from '../../components/newsletter/NewsletterSubscribe';
import LocationMap from '../../components/maps/LocationMap';
import ActivityCalendar from '../../components/calendar/ActivityCalendar';

const ServicesPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {/* Buscador */}
        <Grid item xs={12}>
          <SearchBar />
        </Grid>

        {/* Formulario de Citas */}
      </Grid>
    </Container>
  );
};

export default ServicesPage; 
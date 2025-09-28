import { Box, Typography, Button } from '@mui/material';
import LocationImage from '../assets/Location.jpg';

const Location = () => {
  return (
    <Box sx={{ position: 'relative', width: '100vw', ml: -12, px: { xs: 2, md: 0 } }}>
      <Box sx={{
        display: 'flex',
        backgroundImage: 'linear-gradient(135deg, #3A5A40 5%, #121212 80%, #3A5A40)',
        backgroundSize: '200% 200%',
        animation: 'gradientShift 8s ease infinite',
        '@keyframes gradientShift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        flexDirection: { xs: 'column', md: 'row' },
        gap: 4,
        alignItems: 'center',
        p: 4,
        boxShadow: 3,
      }}>
        {/* Left side - Image */}
        <Box sx={{
          flex: 1,
          minHeight: 500,
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 0.1)), url(${LocationImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          order: { xs: 2, md: 1 },
          boxShadow: 3
        }} />

        {/* Right side - Text content */}
        <Box sx={{
          flex: 1,
          order: { xs: 1, md: 2 },
          minWidth: 0,
          p: 3
        }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              color: '#F5F5F5',
              textAlign: { xs: 'center', md: 'center' },
              textShadow: '4px 4px 5px rgba(1, 1, 1, 1)'
            }}
          >
            Your Local Fence Company!
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              fontWeight: 400,
              mb: 3,
              color: '#F5F5F5',
              textAlign: { xs: 'center', md: 'center' },
              lineHeight: 1.6
            }}
          >
            Fence Co companies are located in 21 cities in nine different states serving Atlanta, Charlotte, Clayton, Creedmoor, Durham,
            Fayetteville, and Brunswick CO, Greensboro, Harnett County, Holly Springs, Nash County, Raleigh, Jacksonville, Orlando, Tampa, Nashville,
            Boise, Baton Rouge, East Atlanta, Pittsburgh, Columbus, and Northwest Arkansas.
            We are expanding our operations to become the go-to answer for anyone asking, "What's the best fence company near me?"
          </Typography>
          <Box sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'center' },
            mt: 4
          }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                color: 'white',
                fontSize: '1.1rem',
                px: 6,
                py: 2,
                backgroundColor: '#3A5A40',
                '&:hover': {
                  backgroundColor: '#3A5A40',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px   #f5f5f53b'
                },
                transition: 'all 0.3s ease'
              }}
            >
              FIND A LOCATION
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Location;
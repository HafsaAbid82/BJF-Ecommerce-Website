import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import Fade from '@mui/material/Fade';
import Image from '../assets/BJF-Logo.png';

const Franchise = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <Box
      ref={ref}
      sx={{
        width: '100vw',
        backgroundColor: '#000000',
        py: 8,
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'linear-gradient(135deg, #121212 20%, #3A5A40 60%, #121212)',
        backgroundSize: '200% 200%',
        animation: 'gradientShift 8s ease infinite',
        '@keyframes gradientShift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        display: 'flex',
        flexDirection: 'row'
      }}
    >
      <Container maxWidth="lg">
        <Fade in={inView} timeout={1000}>
          <Grid container spacing={6} alignItems="center">
            {/* Image Circle - Left Side */}
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  width: { xs: 200, md: 250 },
                  height: { xs: 200, md: 250 },
                  borderRadius: '50%',
                  backgroundImage: `url(${Image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '3px solid #3A5A40',
                  boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
                  mx: 'auto',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 0 30px rgba(0, 0, 0, 0.8)'
                  }
                }}
              />
            </Grid>

            {/* Content - Right Side */}
            <Grid item xs={12} md={7}>
              <Box sx={{ textAlign: { xs: 'center', md: 'center' } }}>
                <Typography
                  variant="h3"
                  component="h1"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: '#F5F5F5',
                    textShadow: '4px 4px 5px rgba(0, 0, 0, 1)',
                    fontSize: { xs: '1.8rem', md: '2.25rem' }
                  }}
                >
                  Want to Start Your Own Fence Company?
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#F5F5F5',
                    mb: 4,
                    lineHeight: 1.7,
                    fontSize: '1.1rem',
                    width: 800,
                    ml: 4
                  }}
                >
                  Fence Co offers you a unique franchise opportunity with us. The franchise taps into the home improvement market worth over $300 billion dollars. Our fence franchise offers you one of the most affordable and profitable ways to run a successful business in this booming industry.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#3A5A40',
                    color: '#F5F5F5',
                    px: 4,
                    py: 2,
                    fontSize: '1rem',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: '#3A5A40',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 8px #f5f5f53b'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  LEARN ABOUT FRANCHISE OPPORTUNITIES
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Fade>
      </Container>
    </Box>
  );
};

export default Franchise;
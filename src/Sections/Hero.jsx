import { useState } from 'react';
import { Box, Typography, Button, Container, useTheme, useMediaQuery } from '@mui/material';
import Bg from '../assets/Bg.jpg';
import FenceModal from '../Components/FenceModal';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isFenceModalOpen, setIsFenceModalOpen] = useState(false);

  const handleFenceModalOpen = () => setIsFenceModalOpen(true);
  const handleFenceModalClose = () => setIsFenceModalOpen(false);

  const styles = {
    heroBox: {
      width: '110vw',
      height: '80vh',
      minHeight: '600px',
      backgroundImage: `linear-gradient(to right, rgba(44, 43, 43, 0.36) 30%, rgba(0, 0, 0, 0.25)), url(${Bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      color: '#F5F5F5',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      marginTop: '80px',
      left: '50%',
      right: '50%',
      marginLeft: '-50vw',
      marginRight: '-50vw',
    },
    container: {
      position: 'relative',
      zIndex: 2,
      display: 'flex',
      justifyContent: 'flex-start',
      pl: { xs: 4, md: 12 }
    },
    contentBox: {
      maxWidth: { xs: '100%', md: '60%' },
      textAlign: 'left',
      pr: 4
    },
    heading: {
      fontWeight: 700,
      color: '#F5F5F5',
      mb: 3,
      textShadow: '2px 1px 2px rgba(0, 0, 0, 1)',
      fontSize: { xs: '1.5rem', md: '2.5rem' },
      lineHeight: 1.2
    },
    subheading: {
      mb: 4,
      textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
      fontSize: { xs: '1.25rem', md: '1.5rem' },
      lineHeight: 1.6
    },
    button: {
      color: '#F5F5DC',
      px: 2,
      py: 2,
      fontWeight: 'bold',
      fontSize: '1rem',
      backgroundColor: '#3A5A40',
      '&:hover': {
        backgroundColor: '#3A5A40',
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 8px #f5f5f53b'
      },
      transition: 'all 0.3s ease'
    }
  };

  return (
    <>
      <Box sx={styles.heroBox}>
        <Container maxWidth="xl" sx={styles.container}>
          <Box sx={styles.contentBox}>
            <Typography
              variant="h2"
              component="h1"
              sx={styles.heading}
            >
              A FENCE COMPANY YOU CAN TRUST
            </Typography>

            <Typography
              variant="h6"
              component="p"
              sx={styles.subheading}
            >
              Add protection, privacy, and value to your home<br />
              Your Local Fence Company.
            </Typography>

            <Button
              variant="contained"
              sx={styles.button}
              onClick={handleFenceModalOpen}
            >
              Get Your Quote
            </Button>
          </Box>
        </Container>
      </Box>
      <FenceModal
        open={isFenceModalOpen}
        onClose={handleFenceModalClose}
      />
    </>
  );
};

export default Hero;
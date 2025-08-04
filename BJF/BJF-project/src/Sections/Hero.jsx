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
      backgroundImage: `linear-gradient(to right, rgba(67, 78, 82, 0.7) 30%, rgba(67, 78, 82, 0.2)), url(${Bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      color: '#F5F5DC',
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
      color: '#067f46',
      mb: 3,
      textShadow: '2px 1px 2px rgb(243, 236, 236)',
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
      fontSize: '1rem',
      backgroundColor: '#067f46',
      '&:hover': {
        backgroundColor: '#055c33',
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 8px rgba(6, 127, 70, 0.4)'
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
              Add protection, privacy, and value to your home with Big Jerry's Fencing<br />
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
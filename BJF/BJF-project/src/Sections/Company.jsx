import { Box, Typography, Button, Container, Grid, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { useInView } from 'react-intersection-observer';
import Fade from '@mui/material/Fade';
import VideoThumbnail from '../assets/thumbnail.jpg';
import FenceModal from '../Components/FenceModal';

const Company = () => {
  const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [isFenceModalOpen, setIsFenceModalOpen] = useState(false);
    const [ref, inView] = useInView({
      threshold: 0.3,
      triggerOnce: true
    });
  const handleFenceModalOpen = () => setIsFenceModalOpen(true);
    const handleFenceModalClose = () => setIsFenceModalOpen(false);
  

  const features = [
    'Hassle-free Proven Process',
    'Draw Your Fence Tool',
    'Fast, Efficient Quotes',
    'Premium Fence Products',
    'High Quality Fence Installations',
    '20 Locations and Growing!'
  ];

  const handlePlayVideo = () => {
    window.open('https://youtu.be/_esGgeCngD4', '_blank');
  };

  return (
    <>
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
        borderTop: '1px solid rgba(6, 127, 70, 0.3)',
        borderBottom: '1px solid rgba(6, 127, 70, 0.3)'
      }}
    >
      <Container maxWidth="lg">
        <Fade in={inView} timeout={1000}>
          <Box>
            {/* Centered Heading */}
            <Typography 
              variant="h3" 
              component="h2"
              sx={{
                fontWeight: 600,
                mb: 6,
                color: '#067f46',
                textShadow: '2px 2px 3px rgb(243, 236, 236)',
                textAlign: 'center',
                fontSize: { xs: '1.8rem', md: '2.5rem' }
              }}
            >
              Choosing the Right Fence Company
            </Typography>

            {/* Content Grid - Text Left, Video Right */}
            <Grid container spacing={6} alignItems="center">
              {/* Text Content - Left Column */}
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 4 }}>
                  {features.map((feature, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ 
                        color: '#067f46',
                        mr: 2,
                        fontSize: '1.5rem'
                      }}>
                        ✔
                      </Box>
                      <Typography 
                        variant="h6"
                        sx={{
                          color: '#a8c9ba',
                          fontSize: '1.1rem',
                          ml:4
                        }}
                      >
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>

              {/* Video Thumbnail - Right Column */}
              <Grid item xs={12} md={6}>
                <Box 
                  sx={{
                    position: 'relative',
                    borderRadius: 2,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    '&:hover .play-button': {
                      transform: 'scale(1.1)'
                    }
                  }}
                  onClick={handlePlayVideo}
                >
                  <Box
                    component="img"
                    src={VideoThumbnail}
                    alt="Fence installation video thumbnail"
                    sx={{
                      width: 600 ,
                      height: 'auto',
                      display: 'block',
                      ml: 20,
                      filter: 'brightness(0.8)',
                      transition: 'filter 0.3s ease',
                      '&:hover': {
                        filter: 'brightness(0.6)'
                      }
                    }}
                  />
                  <IconButton
                    className="play-button"
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '60%',
                      transform: 'translate(-50%, -50%)',
                      color: '#067f46',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(5px)',
                      width: 80,
                      height: 80,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(6, 127, 70, 0.5)',
                        color: '#fff',
                      }
                    }}
                  >
                    <PlayCircleFilledWhiteIcon sx={{ fontSize: 60 }} />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>

            {/* Centered Button */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
              <Button
                variant="contained"
                sx={{
                  color: '#F5F5DC',
                  px: 4,
                  py: 2,
                  fontSize: '1rem',
                  fontWeight: 600,
                  backgroundColor: '#067f46',
                  '&:hover': {
                    backgroundColor: '#055c33',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 8px rgba(6, 127, 70, 0.4)'
                  },
                  transition: 'all 0.3s ease'
                }}
                onClick={handleFenceModalOpen}
              >
                GET YOUR QUOTE
              </Button>
            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
    <FenceModal 
        open={isFenceModalOpen} 
        onClose={handleFenceModalClose} 
      />
    </>
  );
};

export default Company;
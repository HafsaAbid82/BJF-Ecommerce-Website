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
    window.open('https://www.youtube.com/', '_blank');
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
          borderTop: '1px solid #3A5A40',
          borderBottom: '1px solid #3A5A40'
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
                  color: '#F5F5F5',
                  textShadow: '2px 2px 3px rgba(0, 0, 0, 1)',
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
                          color: '#3A5A40',
                          mr: 2,
                          fontSize: '1.5rem'
                        }}>
                          ✔
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            color: '#F5F5F5',
                            fontSize: '1.1rem',
                            ml: 4
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
                        width: 500,
                        height: 350,
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
                        top: '40%',
                        left: '56%',
                        color: '#203624ff',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(5px)',
                        width: 80,
                        height: 80,

                        '&:hover': {
                          backgroundColor: '#203624ff',
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
                    backgroundColor: '#3A5A40',
                    '&:hover': {
                      backgroundColor: '#3A5A40',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 8px #f5f5f53b'
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
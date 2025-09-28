import { Box, Typography, Button, Container, Grid, IconButton } from '@mui/material';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { useInView } from 'react-intersection-observer';
import Fade from '@mui/material/Fade';
import Vs from '../assets/Vs.jpg';
import MPP from '../assets/MPP.jpg';
import HOA from '../assets/HOA.jpg';
import Cap from '../assets/Cap.jpg';

const Video = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const preparationSteps = [
    {
      videoUrl: "https://www.youtube.com/",
      thumbnail: Vs
    },
    {
      videoUrl: "https://www.youtube.com/",
      thumbnail: MPP
    },
    {
      videoUrl: "https://www.youtube.com/",
      thumbnail: HOA
    },
    {
      videoUrl: "https://www.youtube.com/",
      thumbnail: Cap
    }
  ];

  const handlePlayVideo = (url) => {
    if (url !== "#") {
      window.open(url, '_blank');
    }
  };

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
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(136, 189, 168, 0.05) 0%, transparent 25%),
          radial-gradient(circle at 80% 70%, rgba(136, 189, 168, 0.05) 0%, transparent 25%),
          linear-gradient(to bottom, #000000, #0a0a0a)
        `,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(to right, transparent, #88BDA8, transparent)',
          zIndex: 1
        }
      }}
    >
      {/* Floating background elements */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
        '& > div': {
          position: 'absolute',
          borderRadius: '50%',
          background: 'rgba(136, 189, 168, 0.1)',
          animation: 'float 15s infinite linear',
          opacity: 0.6
        }
      }}>
        {[...Array(8)].map((_, i) => (
          <Box key={i} sx={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 2}s`,
            '@keyframes float': {
              '0%': { transform: 'translateY(0) translateX(0) rotate(0deg)' },
              '50%': { transform: `translateY(${Math.random() * 100 - 50}px) translateX(${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg)` },
              '100%': { transform: 'translateY(0) translateX(0) rotate(0deg)' }
            }
          }} />
        ))}
      </Box>

      <Container maxWidth="lg">
        <Fade in={inView} timeout={1000}>
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                textAlign: 'center',
                color: '#F5F5F5',
                textShadow: '2px 2px 3px rgba(0, 0, 0, 1)',
                fontSize: { xs: '1.8rem', md: '2.2rem' },
                textTransform: 'uppercase'
              }}
            >
              Preparing for your fence
            </Typography>

            <Typography
              variant="h5"
              component="h3"
              sx={{
                fontWeight: 600,
                mb: 8,
                textAlign: 'center',
                color: '#F5F5F5',
                fontSize: '1.25rem'
              }}
            >
              What are your next steps before installation?
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {preparationSteps.map((step, index) => (
                <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Box
                    sx={{
                      p: 3,
                      height: 200,
                      width: 400,
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 20px rgba(6, 127, 70, 0.2)',
                        overflow: 'hidden',
                        backgroundImage: `
                                      linear-gradient(135deg, 
                                     rgba(0, 0, 0, 0.95) 0%, 
                                     rgba(1, 87, 48, 0.29) 50%, 
                                     rgba(0, 0, 0, 0.95) 100%),
                                     repeating-linear-gradient(
                                     45deg,
                                      rgba(6, 127, 70, 0.05) 0px,
                                      rgba(6, 127, 70, 0.05) 1px,
                                      transparent 1px,
                                       transparent 10px
                                       ) `,
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '1px',
                          background: 'linear-gradient(to right, transparent, #88BDA8, transparent)',
                          zIndex: 1
                        }
                      }
                    }}
                  >
                    {/* Video Thumbnail */}
                    <Box
                      sx={{
                        position: 'relative',
                        borderRadius: '4px',
                        overflow: 'hidden',
                        height: '180px',
                        cursor: 'pointer',
                        '&:hover .play-button': {
                          transform: 'scale(1.1)'
                        }
                      }}
                      onClick={() => handlePlayVideo(step.videoUrl)}
                    >
                      <Box
                        component="img"
                        src={step.thumbnail}
                        alt={step.title}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: 'brightness(0.7)',
                          transition: 'filter 0.3s ease',
                          '&:hover': {
                            filter: 'brightness(0.5)'
                          }
                        }}
                      />
                      <IconButton
                        className="play-button"
                        sx={{
                          position: 'absolute',
                          top: '40%',
                          left: '40%',
                          color: '#1a291dff',
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          backdropFilter: 'blur(5px)',
                          width: 60,
                          height: 60,
                          '&:hover': {
                            backgroundColor: '#3A5A40',
                            color: '#fff',
                          }
                        }}
                      >
                        <PlayCircleFilledWhiteIcon sx={{ fontSize: 40 }} />
                      </IconButton>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>

            {/* Centered Button */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
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
                GET STARTED WITH YOUR FENCE PROJECT
              </Button>
            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default Video;
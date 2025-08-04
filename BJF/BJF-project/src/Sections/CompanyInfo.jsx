import { Box, Typography, Button, Container, Grid, useTheme, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Fade from '@mui/material/Fade';
import FenceModal from '../Components/FenceModal';

const CompanyInfo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isFenceModalOpen, setIsFenceModalOpen] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const handleFenceModalOpen = () => setIsFenceModalOpen(true);
  const handleFenceModalClose = () => setIsFenceModalOpen(false);


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
      {/* Floating background elements - moved outside Fade component */}
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
          <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <Grid container spacing={6} justifyContent="center">
              <Grid item xs={12} md={6}>
                <Typography 
                  variant="h5" 
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: '#067f46',
                    fontSize: '1.5rem'
                  }}
                >
                  Over a Decade of Trust and Experience
                </Typography>
                <Typography 
                 variant="body1"
                 component="p" 
                 sx={{ 
                 mb: 4,
                 maxWidth: '800px',
                  mx: 'auto',
                 lineHeight: 1.6,
                 fontSize: { xs: '1rem', md: '1.1rem' },
                 color: '#a8c9ba!important', 
                }}
                >
                  Tackling Diverse Fencing Challenges: With over ten years of experience as your local fence company,
                  Big Jerry's Fencing has encountered and successfully managed a wide array of fencing requests. 
                  From custom designs to unique challenges, our expertise ensures your fencing project is in capable hands.
                </Typography>
                
                <Typography 
                  variant="h5" 
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: '#067f46',
                    fontSize: '1.5rem'
                  }}
                >
                  Comprehensive Estimates and Sketches
                </Typography>
                <Typography 
                 variant="body1"
                 component="p" 
                  sx={{ 
                  mb: 4,
                  maxWidth: '800px',
                  mx: 'auto',
                  lineHeight: 1.6,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  color: '#a8c9ba!important', 
                }}
                >
                  Detailed and Transparent Quoting Process: Our estimates are thorough, providing sketches, warranty information,
                  and detailed product descriptions. This transparency helps you understand exactly what you're getting, 
                  ensuring your satisfaction with the final product.
                </Typography>
                
                <Typography 
                  variant="h5" 
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: '#067f46',
                    fontSize: '1.5rem'
                  }}
                >
                  The Right Material and the Right Style for Your Fence
                </Typography>
                <Typography 
                  variant="body1"
                  sx={{
                    color: '#a8c9ba!important',
                    maxWidth: '800px',
                    mb: 4,
                    lineHeight: 1.7,
                    fontSize: '1.1rem'
                  }}
                >
                  Guided Selection and Quotes: Choosing the right material for your fence can be daunting.
                  We provide multiple quotes and discuss the benefits of each fence type,
                  helping you make an informed decision that suits your specific needs.
                </Typography>

                <Typography 
                  variant="h5" 
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: '#067f46',
                    fontSize: '1.5rem'
                  }}
                >
                  Real People, Real Service
                </Typography>
                <Typography 
                  variant="body1"
                  sx={{
                    color: '#a8c9ba!important',
                    maxWidth: '800px',
                    lineHeight: 1.7,
                    fontSize: '1.1rem'
                  }}
                >
                  Proud to be Your Local Fence Company: Our quotes are crafted by real people who take the time to understand your needs.
                  This personalized approach sets us apart, ensuring you receive a service that truly caters to your requirements.
                </Typography>
                
                <Typography 
                  variant="h5" 
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: '#067f46',
                    fontSize: '1.5rem'
                  }}
                >
                  Choose Big Jerry's Fencing for Peace of Mind
                </Typography>
                <Typography 
                  variant="body1"
                  sx={{
                    color: '#a8c9ba!important',
                    maxWidth: '800px',
                    mb: 6,
                    lineHeight: 1.7,
                    fontSize: '1.1rem'
                  }}
                >
                  Protecting What Matters Most: With Big Jerry's Fencing, you're not just installing a fence; 
                  you're ensuring the safety of your kids, pets, and property. 
                  Choose us for a fence that not only secures but also enhances the appeal of your property.
                </Typography>

                {/* Action Buttons */}
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        backgroundColor: '#067f46',
                    color: '#F5F5DC',
                    px: 4,
                    py: 2,
                    fontSize: '0.75rem',
                    fontWeight: 600,
                     '&:hover': {
                    backgroundColor: '#055c33',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 8px rgba(6, 127, 70, 0.4)'
                  },
                  transition: 'all 0.3s ease'
                      }}
                    >
                      FIND A LOCATION
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        backgroundColor: '#067f46',
                    color: '#F5F5DC',
                    px: 4,
                    py: 2,
                    fontSize: '0.75rem',
                    fontWeight: 600,
                     '&:hover': {
                    backgroundColor: '#055c33',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 8px rgba(6, 127, 70, 0.4)'
                  },
                  transition: 'all 0.3s ease'
                      }}
                      onClick={handleFenceModalOpen}
                    >
                      GET A PERSONALIZED QUOTE
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#067f46',
                    color: '#F5F5DC',
                    px: 4,
                    py: 2,
                    fontSize: '0.75rem',
                    fontWeight: 600,
                     '&:hover': {
                    backgroundColor: '#055c33',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 8px rgba(6, 127, 70, 0.4)'
                  },
                  transition: 'all 0.3s ease'
                  }}
                >
                  LEARN ABOUT FRANCHISE OPPORTUNITIES
                </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
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

export default CompanyInfo;
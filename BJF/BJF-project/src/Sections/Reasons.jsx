import { Box, Typography, Container, Grid, Button, useTheme, useMediaQuery } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Fade from '@mui/material/Fade';
import FenceModal from '../Components/FenceModal';

const Reasons = () => {
   const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isFenceModalOpen, setIsFenceModalOpen] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const handleFenceModalOpen = () => setIsFenceModalOpen(true);
  const handleFenceModalClose = () => setIsFenceModalOpen(false);

  const reasons = [
    {
      number: "1",
      title: "Expert Consultation",
      description: "Our unique DRAW YOUR FENCE tool lets you design your layout using satellite imagery with live consultant support for a tailor-made solution."
    },
    {
      number: "2",
      title: "Decade of Experience",
      description: "With over ten years in business, we've handled every fencing challenge imaginable with professional expertise."
    },
    {
      number: "3",
      title: "Comprehensive Services",
      description: "From pet safety to pool regulations and HOA requirements, we offer solutions for every scenario."
    },
    {
      number: "4",
      title: "Detailed Estimates",
      description: "Get sketches, warranty info, and product descriptions showing exactly how your fence will look on your property."
    },
    {
      number: "5",
      title: "Quality Materials",
      description: "Choose from premium materials and styles to perfectly match your property's aesthetic and functional needs."
    },
    {
      number: "6",
      title: "Personalized Quotes",
      description: "Real people craft your estimate after understanding your specific requirements and preferences."
    },
    {
      number: "7",
      title: "Easy Financing",
      description: "Flexible payment options to make your perfect fence affordable with budget-friendly plans."
    },
    {
      number: "8",
      title: "Satisfaction Guarantee",
      description: "Professional installation backed by our commitment to your complete satisfaction with the final result."
    }
  ];

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
      }}
    >
      <Container maxWidth="lg">
        <Fade in={inView} timeout={1000}>
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            {/* Header Section */}
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography 
                variant="h3" 
                component="h2"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: '#067f46',
                  textShadow: '2px 2px 3px rgb(243, 236, 236)',
                  fontSize: { xs: '1.8rem', md: '2.5rem' },
                  textTransform: 'uppercase'
                }}
              >
                Still on the Fence?
              </Typography>
              <Typography 
                variant="h5"
                sx={{
                  color: '#a8c9ba',
                  fontSize: '1.2rem',
                  maxWidth: '800px',
                  mx: 'auto'
                }}
              >
                Here are eight more reasons to let the experts at Big Jerry's Fencing Company help you get the ideal fence for your needs.
              </Typography>
            </Box>

            {/* Reasons Grid - Adjusted for 4 columns on desktop */}
            <Grid container spacing={4} justifyContent="center">
              {reasons.map((reason, index) => (
                <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex' }}>
                  <Box
                    sx={{
                      p: 3,
                      width: 200,
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
                    }}
                    }}
                  >
                    
                      
                       <Grid sx={{ display: 'flex', flexDirection: 'row'}} > 
                        <Typography variant="h4"  component="h2"
                      sx={{
                        fontWeight: 800,
                        color: '#F5F5DC',
                        fontSize: '3rem',
                        minHeight: '80px',
                        mt:-2,
                        mr: 1
                      }}
                    >         {reason.number} 
                     </Typography>
                    <Typography 
                      variant="h6" 
                      sx={{
                        fontWeight: 600,
                        color: '#F5F5DC',
                        fontSize: '1rem',
                        minHeight: '80px',
                      }}
                    >
                      {reason.title}
                    </Typography>
                    </Grid>   
                    <Typography 
                      variant="body1"
                      sx={{
                        color: '#a8c9ba !important',
                        lineHeight: 1.6,
                        fontSize: '0.95rem'
                      }}
                    >
                      {reason.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            {/* CTA Button */}
            <Box sx={{ textAlign: 'center', mt: 6 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#067f46',
                  color: '#F5F5DC',
                  px: 6,
                  py: 1.5,
                  fontSize: '1rem',
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
                GET YOUR FREE ESTIMATE
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

export default Reasons;
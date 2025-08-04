import { useState } from 'react';
import { Box, Typography, Button, Container, Fade, useTheme, useMediaQuery } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import WoodFence from '../assets/wdfence.jpg';
import AluminumFence from '../assets/Iafence.jpg';
import VinylFence from '../assets/Vfence.jpg';
import ChainLinkFence from '../assets/Chfence.jpg';
import FarmFence from '../assets/Fwfence.jpg';
import CompositeFence from '../assets/Stfence.jpg';
import FenceModal from '../Components/FenceModal';

const fenceTypes = [
  { name: 'WOOD FENCES', img: WoodFence },
  { name: 'ALUMINUM FENCES', img: AluminumFence },
  { name: 'VINYL FENCES', img: VinylFence },
  { name: 'CHAIN LINK FENCES', img: ChainLinkFence },
  { name: 'WIRE FARM FENCES', img: FarmFence },
  { name: 'SimTek COMPOSITE FENCES', img: CompositeFence }
];

const FenceTypesGrid = () => (
  <Box sx={{ 
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
    gap: 4,
    mt: 4
  }}>
    {fenceTypes.map((fence) => (
      <Box
        key={fence.name}
        sx={{
          position: 'relative',
          height: 200,
          borderRadius: 1,
          overflow: 'hidden',
          boxShadow: 3,
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: 6,
            '& .fence-overlay': {
              backgroundColor: 'rgba(0,0,0,0.2)'
            }
          },
          transition: 'all 0.3s ease'
        }}
      >
        <Box
          component="img"
          src={fence.img}
          alt={fence.name}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            backdropFilter: 'blur(5px)',
            transition: 'all 0.3s ease',
          }}
        />
        <Box
          className="fence-overlay"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease'
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'transparent',
              fontWeight: 700,
              border: 'none',
              color: '#F5F5DC',
              px: 4,
              py: 2,
              fontSize: '1.5rem',
              '&:hover': {
                backgroundColor: 'transparent'
              }
            }}
          >
            {fence.name}
          </Button>
        </Box>
      </Box>
    ))}
  </Box>
);

const FenceTypes = () => {
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
          minHeight: '60vh',
          backgroundColor: '#000000',
          mr: 50,
          ml: -20,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Fade in={inView} timeout={1000}>
          <Container>
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                fontWeight: 700, 
                mb: 3,
                color: '#F5F5DC',
                pt: 5,
                textAlign: 'center'
              }}
            >
              We make buying fences<br />
              <Box component="span" sx={{ color: '#067f46' }}>FAST & EASY</Box>
            </Typography>
            <Typography 
              variant="h6" 
              component="p" 
              sx={{ 
                mb: 5,
                color: '#F5F5DC',
                textAlign: 'center',
                fontSize: '1.25rem'
              }}
            >
              So you can protect your loved ones and your investments.
            </Typography>
            
            <FenceTypesGrid />
            
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#067f46',
                  color: '#F5F5DC',
                  px: 4,
                  py: 2,
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
                GET YOUR QUOTE
              </Button>
            </Box>
            
            <Typography 
              variant="h6" 
              component="p" 
              sx={{ 
                mt: 4,
                mb: 4,
                textAlign: 'left',
                color: '#067f46',
                fontSize: '1rem'
              }}
            >
              **Fence style options and offerings may vary by location.**
            </Typography>
          </Container>
        </Fade>
      </Box>
      <FenceModal 
        open={isFenceModalOpen} 
        onClose={handleFenceModalClose} 
      />
    </>
  );
};

export default FenceTypes;
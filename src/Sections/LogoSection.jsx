import { Box, Container } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import Fade from '@mui/material/Fade';
import Logo from '../assets/Logo.png';
import Coc from '../assets/Coc.png';

const LogoSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <Box
      ref={ref}
      sx={{
        width: '100vw',
        height: 280,
        py: 2,
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        position: 'relative',
        backgroundImage: 'linear-gradient(135deg, #000000 30%, #3A5A40 60%, #000000)',
        backgroundSize: '200% 200%',
        animation: 'gradientShift 8s ease infinite',
        '@keyframes gradientShift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        borderTop: '1px solid rgba(245, 245, 220, 0.2)',
        borderBottom: '1px solid rgba(245, 245, 220, 0.2)'
      }}
    >
      <Container maxWidth="lg">
        <Fade in={inView} timeout={800}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',

              mt: -2,

            }}
          >
            <Box
              component="img"
              src={Coc}
              alt="Chamber of Commerce Logo"
              sx={{
                width: { xs: '150px', md: '180px' },
                height: 'auto',
                transition: 'transform 0.4s ease',
                filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))',
                '&:hover': {
                  transform: 'scale(1.05) rotate(-2deg)'
                }
              }}
            />
            <Box
              component="img"
              src={Logo}
              alt="Company Logo"
              sx={{
                width: { xs: '220px', md: '400px' },
                height: 'auto',
                transition: 'transform 0.4s ease',
                filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))',
                '&:hover': {
                  transform: 'scale(1.03) rotate(1deg)'
                }
              }}
            />
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default LogoSection;
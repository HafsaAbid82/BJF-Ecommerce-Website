import { Box, Typography, Grid, Container } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import Fade from '@mui/material/Fade';
import Image1 from '../assets/Draw.png';
import Image2 from '../assets/Est.jpg';
import Image3 from '../assets/inst.jpg';
import Image4 from '../assets/enj.png';

const Steps = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const steps = [
    {
      title: "Draw Your Fence",
      description: "Simply answer a few questions and sketch out where your fence will be installed.",
      image: Image1
    },
    {
      title: "Get A Quote",
      description: "Get a fast and accurate quote without an on-site visit!",
      image: Image2
    },
    {
      title: "Installation",
      description: "Our team of experienced fence contractors will install your fence right the first time.",
      image: Image3
    },
    {
      title: "Enjoy!",
      description: "Enjoy the privacy, protection and increased property value that your new fence brings!",
      image: Image4
    }
  ];

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
      }}
    >
      <Container maxWidth="lg">
        <Fade in={inView} timeout={1000}>
          <Box>
            <Typography 
              variant="h3" 
              component="h2"
              sx={{
                fontWeight: 800,
                mb: 6,
                color: '#067f46',
                textShadow: '1px 1px 2px rgb(243, 236, 236)',
                textAlign: 'center',
                fontSize: { xs: '1.6rem', md: '2.2 rem' }
              }}
            >
              Four Easy Steps to the Perfect Fence for Your Residential or Commercial Property
            </Typography>
            
            <Grid container spacing={4}>
              {steps.map((step, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box sx={{
                    height: 350,
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 3,
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
},
                    }
                  }}>
                    <Box 
                      component="img"
                      src={step.image}
                      alt={step.title}
                      sx={{
                        width: 210,
                        height: '180px',
                        objectFit: 'cover',
                        borderRadius: 1,
                        mb: 3,
                        display: 'flex',
                    flexDirection: 'row',
                      }}
                    />
                    <Typography 
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: '#067f46',
                        fontSize: 20,
                         display: 'flex',
                    flexDirection: 'row',
                    ml: 4
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography 
                      variant="body1"
                      sx={{
                        color: '#F5F5DC!important',
                        width: 210,
                        lineHeight: 1.6,
                         display: 'flex',
                    flexDirection: 'row',
                      }}
                    >
                      {step.description}
                    </Typography>
                   </Box>
                </Grid>
                
              ))}
            </Grid>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default Steps;
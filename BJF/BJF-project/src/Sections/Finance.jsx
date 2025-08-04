import { Box, Typography, Button, Container, Fade, TextField, Slider, Paper } from '@mui/material';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Finance = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  const [amount, setAmount] = useState(7500);
  const [rate, setRate] = useState(6.7); // Changed default to match image
  const [term, setTerm] = useState(60);

  const calculatePayment = () => {
    const monthlyRate = rate / 100 / 12;
    const payment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term));
    return payment.toFixed(2);
  };

  const monthlyPayment = calculatePayment();

  return (
    <Box 
      ref={ref}
      sx={{
        width: '100vw',
        backgroundColor: '#000000',
        py: 10,
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

      <Fade in={inView} timeout={1000}>
        <Container maxWidth="lg">
          {/* Header Section */}
          <Box sx={{ 
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            mb: 6
          }}>
            <Typography 
              variant="body1"
              component="p" 
              sx={{ 
                fontWeight: 400,
                mb: 2,
                color: '#a8c9ba!important', 
                textTransform: 'uppercase',
                letterSpacing: 1
              }}
            >
              FINANCING AVAILABLE
            </Typography>
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                fontWeight: 600, 
                mb: 3,
                color: '#067f46',
                fontSize: { xs: '1.8rem', md: '2.5rem' }
              }}
            >
              Finance Your Project
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
  Need financing? Big Jerry's Fencing has you covered. Bad credit? No problem. 
  Click below to get started on your loan application and start receiving multiple 
  competitive offers directly from lenders with ZERO impact to your credit.
</Typography>
            
            <Button
              variant="contained"
              sx={{
                color: '#F5F5DC',
                px: 4,
                py: 2,
                fontSize: '0.75rem',
                fontWeight: 500,
                 backgroundColor: '#067f46',
                  '&:hover': {
                    backgroundColor: '#055c33',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 8px rgba(6, 127, 70, 0.4)'
                  },
                  transition: 'all 0.3s ease',
                mb: 6
              }}
            >
              SEE IF YOU QUALIFY FOR FINANCING
            </Button>
          </Box>

          {/* Calculator Section */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 4
            }}
          >
            {/* Calculator Inputs */}
            <Paper
              elevation={3}
              sx={{
                p: { xs: 3, md: 4 },
                backgroundColor: 'rgba(0,0,0,0.7)',
                borderRadius: 2,
                border: '1px solid rgba(6, 127, 70, 0.3)',
                backdropFilter: 'blur(8px)',
                mt:-6
              }}
            >
              <Typography
                variant="h5"
                component="h4"
                sx={{
                  fontWeight: 400,
                  mb: 3,
                  color: '#067f46',
                  fontSize: '1.25rem',
                  textAlign: 'left',
                }}
              >
                Monthly Payment Fence Calculator
              </Typography>
              
              {/* Amount Input */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="body1" sx={{ mb: 1, color: '#a8c9ba!important', textAlign: 'left' }}>
                  Fence Financing Amount ($)
                </Typography>
                <TextField
                  fullWidth
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  sx={{
                    mb: 1,
                    '& .MuiOutlinedInput-root': {
                      color: '#F5F5DC',
                      backgroundColor: 'rgba(168, 201, 186, 0.1)',
                      '& fieldset': {
                        borderColor: 'rgba(6, 127, 70, 0.5)',
                      },
                      '&:hover fieldset': {
                        borderColor: '#067f46',
                      },
                    },
                  }}
                />
                <Typography variant="body2" sx={{ color: '#a8c9ba', opacity: 0.8, textAlign: 'left' }}>
                  Min: $0 - Max: $50,000
                </Typography>
              </Box>

              {/* Interest Rate Slider */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="body1" sx={{ mb: 1, color: '#a8c9ba!important', textAlign: 'left' }}>
                  Interest Rate % (APR): {rate}%
                </Typography>
                <Slider
                  value={rate}
                  onChange={(_, value) => setRate(value)}
                  min={0}
                  max={20}
                  step={0.1}
                  valueLabelDisplay="auto"
                  sx={{
                    color: '#067f46',
                    '& .MuiSlider-thumb': {
                      '&:hover, &.Mui-focusVisible': {
                        boxShadow: '0 0 0 8px rgba(6, 127, 70, 0.16)',
                      },
                    },
                  }}
                />
              </Box>

              {/* Loan Term Slider */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="body1" sx={{ mb: 1, color: '#a8c9ba!important', textAlign: 'left' }}>
                  Length of Loan (months): {term}
                </Typography>
                <Slider
                  value={term}
                  onChange={(_, value) => setTerm(value)}
                  min={12}
                  max={84}
                  step={6}
                  valueLabelDisplay="auto"
                  sx={{
                    color: '#067f46',
                  }}
                />
              </Box>
            </Paper>
            
            {/* Summary Section */}
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 3, md: 4 },
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  borderRadius: 2,
                  border: '1px solid rgba(6, 127, 70, 0.3)',
                  width: 400,
                  backdropFilter: 'blur(8px)',
                  height: 100,
                  mt: -6
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: 3,
                    color: '#067f46',
                    fontWeight: 200,
                    fontSize: '1.25rem',
                   textAlign: 'left'
                  }}
                >
                Summary
              </Typography>
              
              <Box
            sx={{
              p: 2,
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 2,
              borderTop: '1px solid rgba(6, 127, 70, 0.3)'
            }}
          >
            <Typography
              variant="h6"
              sx={{ mb: 1, color: '#a8c9ba', fontWeight: 600, fontSize:22, textAlign: 'left', ml:-2 }}
            >
              Monthly Payment
              </Typography>
                <Typography
              variant="h3"
              sx={{ color: '#067f46', fontWeight: 600, fontSize: 20, textAlign: 'right' }}
            >
              ${monthlyPayment}
            </Typography>
          </Box>
            </Paper>
          </Box>
        </Container>
      </Fade>
    </Box>
  );
}

export default Finance;
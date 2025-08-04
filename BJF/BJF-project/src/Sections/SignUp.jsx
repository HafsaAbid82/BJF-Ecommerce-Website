import { Box, Typography, Container, TextField, Button } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import Fade from '@mui/material/Fade';
import { useState } from 'react';


const mockApi = {
  signUp: async (data) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    const subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
    const newSubscriber = {
      ...data,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };
    localStorage.setItem('subscribers', JSON.stringify([...subscribers, newSubscriber]));
    return { success: true, message: 'Subscription successful!' };
  }
};
const SignUp = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await mockApi.signUp({ name, email });
      if (response.success) {
        setSubmitted(true);
      } else {
        setError(response.message || 'Sign up failed');
      }
    } catch (err) {
      setError('An error occurred during sign up');
    } finally {
      setLoading(false);
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
      <Container maxWidth="md">
        <Fade in={inView} timeout={1000}>
          <Box sx={{ 
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {!submitted ? (
              <>
                <Typography 
                  variant="h4" 
                  component="h2"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: '#067f46',
                    textShadow: '2px 2px 2px rgb(243, 236, 236)',
                    fontSize: { xs: '1rem', md: '1.75rem' }
                  }}
                >
                  Monthly Email Updates, News, and Insider Info
                </Typography>
                <Typography 
                  variant="h5"
                  sx={{
                    fontWeight: 500,
                    mb: 4,
                    color: '#a8c9ba',
                    fontSize: { xs: '1.1rem', md: '1.3rem' }
                  }}
                >
                  from Big Jerry's Fencing
                </Typography>
                
                {error && (
                  <Typography color="error" sx={{ mb: 2, color: '#ff6b6b' }}>
                    {error}
                  </Typography>
                )}
                
                <Box 
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    width: '100%',
                    maxWidth: '500px'
                  }}
                >
                  <TextField
                    variant="outlined"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#88BDA8',
                        },
                        '&:hover fieldset': {
                          borderColor: '#88BDA8',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#88BDA8',
                        },
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        borderRadius: '4px',
                        color: '#F5F5DC'
                      },
                      '& .MuiInputBase-input': {
                        color: '#F5F5DC',
                      }
                    }}
                  />
                  <TextField
                    variant="outlined"
                    placeholder="Your email address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#88BDA8',
                        },
                        '&:hover fieldset': {
                          borderColor: '#88BDA8',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#88BDA8',
                        },
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        borderRadius: '4px',
                        color: '#F5F5DC'
                      },
                      '& .MuiInputBase-input': {
                        color: '#F5F5DC',
                      }
                    }}
                  />
                  
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={loading}
                    sx={{
                      backgroundColor: '#067f46',
                      color: '#F5F5DC',
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                      '&:hover': {
                        backgroundColor: '#055c33',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 8px rgba(6, 127, 70, 0.4)'
                      },
                      '&:disabled': {
                        backgroundColor: '#055c33',
                        opacity: 0.7,
                        transform: 'none',
                        boxShadow: 'none'
                      },
                      transition: 'all 0.3s ease',
                      mt: 2
                    }}
                  >
                    {loading ? 'Processing...' : 'Sign Up'}
                  </Button>
                </Box>
              </>
            ) : (
              <Box sx={{ textAlign: 'center' }}>
                <Typography 
                  variant="h3" 
                  component="h2"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    color: '#067f46',
                    textShadow: '2px 2px 3px rgb(243, 236, 236)',
                    fontSize: { xs: '1.5rem', md: '2.5rem' }
                  }}
                >
                  Thanks for Signing Up!
                </Typography>
                <Typography 
                  variant="h5"
                  sx={{
                    fontWeight: 500,
                    mb: 2,
                    color: '#a8c9ba',
                    fontSize: { xs: '1.1rem', md: '1.5rem' }
                  }}
                >
                  Monthly Email Updates, News, and Insider Info
                </Typography>
                <Typography 
                  variant="h6"
                  sx={{
                    fontWeight: 400,
                    color: '#a8c9ba',
                    fontSize: { xs: '1rem', md: '1.3rem' }
                  }}
                >
                  from Big Jerry's Fencing
                </Typography>
                <div style={{ display: 'none' }} id="subscriber-data">
                  {JSON.stringify({ name, email })}
                </div>
              </Box>
            )}
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default SignUp;
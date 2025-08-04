import { Box, Typography, Button, TextField, Modal } from '@mui/material';
import { useState } from 'react';
import Draw from '../assets/Draw.png'

const FenceModal = ({ open, onClose }) => {
  const [zipCode, setZipCode] = useState('');


  return (
    <>
     <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="fence-quote-modal"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(3px)',
         zIndex: 9999 
      }}
    >
       <Box
          sx={{
            position: 'relative',
            width: { xs: '90vw', md: '600px' },
            height: { xs: '90vh', md: '600px' },
            backgroundColor: 'rgba(0,0,0,0.7)',
            borderRadius: 2,
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
              )`,
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
            boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 10px 20px rgba(6, 127, 70, 0.2)'
            }
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              borderRadius: 2,
                 backgroundImage: `linear-gradient(to right, rgba(34, 63, 42, 0.27) 30%, rgba(24, 26, 27, 0.09)), url(${Draw})`,
              width: 550,
              height: 450,
              ml: 3,
              mt: 3,
             alignItems: 'center',
              opacity: 0.4,
              zIndex: 0
            }}
          />
          <Box
            sx={{
              position: 'relative',
              zIndex: 2,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              p: 4,
              color: '#F5F5DC'
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: '#067f46',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              The FAST and EASY
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: '#F5F5DC'
              }}
            >
              way to get<br />YOUR REAL QUOTE ONLINE
            </Typography>

            <Box sx={{ width: '100%', maxWidth: '400px', mb: 15 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: '#a8c9ba',
                  borderBottom: '1px solid #067f46',
                  pb: 1,
                  display: 'inline-block'
                }}
              >
                DRAW YOUR FENCE<br />AND FILL OUT THE FORM
              </Typography>
            </Box>
  <Box sx={{ width: '100%', maxWidth: '300px', display : 'flex', flexDirection:'row', mb: -10 }}>
              <TextField
                fullWidth
                variant="outlined"
                type='Number'
                placeholder="Zip Code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                sx={{
                  mr: 4,
                  mb: 2,
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
                    color: '#F5F5DC'
                  },
                  '& .MuiInputBase-input': {
                    color: '#F5F5DC',
                    textAlign: 'center'
                  }
                }}
              />
              
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#067f46',
                  color: '#F5F5DC',
                  height: 60,
                  py: 1,
                  fontSize: '1rem',
                  fontWeight: 400,
                  '&:hover': {
                    backgroundColor: '#055c33'
                  }
                }}
              >
                GO
              </Button>
            </Box>
            
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default FenceModal;
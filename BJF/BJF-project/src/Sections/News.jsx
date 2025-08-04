import { Box, Typography, Container, Button, Card, CardMedia, CardContent } from '@mui/material';
import WildfenceImage from '../assets/Wild.jpg';
import PuppyFenceImage from '../assets/Puppy.jpg';
import MoldFenceImage from '../assets/Mold.jpg';


const News = () => {
  const newsItems = [
    { 
      title: "Fence To Keep Wild Animals Out",
      image: WildfenceImage,
      alt: "Wild pig resistant fence installation"
    },
    { 
      title: "Puppy Guard Fences",
      image: PuppyFenceImage,
      alt: "Safe fencing for puppies"
    },
    { 
      title: "How To Alleviate Mold On A Wood Fence",
      image: MoldFenceImage,
      alt: "Cleaning mold from wood fence"
    },
  ];

  return (
    <Box 
      sx={{
        width: '100vw',
        ml: -20,
        py: 8,
        backgroundColor: '#000000',
        borderTop:'1px solid  #88BDA8'
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h4" 
          component="h2" 
          sx={{
            textAlign: 'center',
            mb: 6,
            fontWeight: '700',
            color: '#F5F5DC',
            fontSize: { xs: '1.8rem', md: '2.2rem' },
            position: 'relative',
            '&:after': {
              content: '""',
              display: 'block',
              width: '80px',
              height: '4px',
              backgroundColor: '#067f46',
              margin: '20px auto 0'
            }
          }}
        >
          Recent News
        </Typography>

        <Box 
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
            px: { xs: 2, md: 0 }
          }}
        >
          {newsItems.map((item, index) => (
            <Card 
              key={index}
              sx={{
                borderRadius: '8px',
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
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.alt}
                sx={{
                  objectFit: 'cover',
                  width: '100%'
                }}
              />
              <CardContent sx={{ p: 3 }}>
                <Typography 
                  variant="h6" 
                  sx={{
                    fontWeight: '00',
                    color: '#067f46',
                    mb: 2,
                    
                  }}
                >
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default News;
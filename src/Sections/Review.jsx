import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Card, CardContent, Button, IconButton, Container, useTheme, useMediaQuery } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FenceModal from '../Components/FenceModal';

const Review = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isFenceModalOpen, setIsFenceModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState([]);
  const handleFenceModalOpen = () => setIsFenceModalOpen(true);
  const handleFenceModalClose = () => setIsFenceModalOpen(false);

  const reviews = [
    { name: "Joseph Black", date: "6 months ago", content: "The entire team made the entire process very enjoyable. From design to completion they were communicative and always helpful." },
    { name: "Andria kim", date: "8 months ago", content: "They did a great job!!! I am very happy with the fence they installed. Service over the phone and in office were friendly and great." },
    { name: "Peter Brown", date: "a year ago", content: "They made everything so easy from initial quote through final payment. The workmanship is beautiful and the price was more than fair." },
    { name: "Christopher John", date: "2 months ago", content: " The team was professional, responsive, and committed to delivering quality results." },
    { name: "Nolan Peterson", date: "2 months ago", content: "Everyone in the office being so kind and responsive with all my questions, to the install team who took the time to understand all my requests." },
    { name: "Andrew Hunt", date: "2 months ago", content: "This company did a great job on our fence. They gave us exactly what we wanted." },
    { name: "Edward Ben", date: "3 months ago", content: "Outstanding service from start to finish. The estimator was knowledgeable and helped us choose the perfect fence style for our needs." },
    { name: "Lisa Thomas", date: "5 months ago", content: "As a property manager, I've worked with many fencing companies and Fence Co stands out as the best." },
    { name: "Lilly Wilson", date: "1 month ago", content: "We needed a custom fence solution for our irregularly shaped yard, and they delivered perfectly." }
  ];

  // Group reviews into slides of 3
  const slides = [];
  for (let i = 0; i < reviews.length; i += 3) {
    slides.push(reviews.slice(i, i + 3));
  }

  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(intervalRef.current);
  }, [slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const toggleExpand = (index) => {
    setExpandedReviews(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <>
      <Box sx={{
        width: '100vw',
        py: 6,
        backgroundColor: '#000000',
        position: 'relative',
        overflow: 'hidden',
        ml: -12
      }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 }, position: 'relative' }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              textAlign: 'center',
              mb: 4,
              fontWeight: 'bold',
              color: '#F5F5F5',
              textShadow: '2px 2px 3px rgba(0, 0, 0, 1)',
              fontSize: { xs: '1.8rem', md: '2.2rem' }
            }}
          >
            Real Customer Reviews
          </Typography>

          <Box sx={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden'
          }}>
            {/* Reviews Container */}
            <Box sx={{
              display: 'flex',
              transition: 'transform 1s ease-in-out',
              transform: `translateX(-${currentSlide * 100}%)`,
              width: `${slides.length * 30}%`
            }}>
              {slides.map((slide, slideIndex) => (
                <Box key={slideIndex} sx={{
                  width: '100%',
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  gap: 3,
                  justifyContent: 'center',
                  px: 2
                }}>
                  {slide.map((review, index) => {
                    const globalIndex = slideIndex * 3 + index;
                    const isExpanded = expandedReviews.includes(globalIndex);
                    const previewText = review.content.split(' ').slice(0, 20).join(' ') + '...';

                    return (
                      <Card
                        key={globalIndex}
                        sx={{
                          height: 280,
                          width: 250,
                          minWidth: 250,
                          alignItems: 'center',
                          textAlign: 'center',
                          p: 3,
                          backgroundColor: 'rgba(0,0,0,0.7)',
                          borderRadius: 2,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 10px 20px rgba(6, 127, 70, 0.2)',
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
                            }
                          }
                        }}
                      >
                        <CardContent sx={{ pb: '8px !important' }}>
                          <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            mb: 1.5
                          }}>
                            <Typography variant="subtitle1" component="h3" sx={{
                              color: '#86bc90ff',
                              fontWeight: 600,
                              fontSize: '1.1rem'
                            }}>
                              {review.name}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              {[...Array(5)].map((_, i) => (
                                <StarIcon
                                  key={i}
                                  sx={{
                                    color: '#c1a40fff',
                                    fontSize: '1.1rem'
                                  }}
                                />
                              ))}
                              <Typography
                                variant="body2"
                                sx={{
                                  ml: 1,
                                  color: '#F5F5F5',
                                  fontSize: '0.8rem'
                                }}
                              >
                                {review.date}
                              </Typography>
                            </Box>
                          </Box>

                          <Typography
                            variant="body2"
                            sx={{
                              lineHeight: 1.5,
                              color: '#F5F5F5',
                              fontSize: '0.95rem',

                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              display: '-webkit-box',
                              WebkitLineClamp: isExpanded ? 'unset' : 5,
                              WebkitBoxOrient: 'vertical'
                            }}
                          >
                            {review.content}
                          </Typography>
                        </CardContent>
                      </Card>
                    );
                  })}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Dots Indicator */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            {slides.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentSlide(index)}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  bgcolor: index === currentSlide ? '#3A5A40' : '#F5F5F5',
                  opacity: index === currentSlide ? 1 : 0.5,
                  mx: 0.5,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    opacity: 1
                  }
                }}
              />
            ))}
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#3A5A40',
                color: '#F5F5DC',
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
              onClick={handleFenceModalOpen}
            >
              GET YOUR QUOTE
            </Button>
          </Box>
        </Container>
      </Box>
      <FenceModal
        open={isFenceModalOpen}
        onClose={handleFenceModalClose}
      />
    </>
  );
};

export default Review;
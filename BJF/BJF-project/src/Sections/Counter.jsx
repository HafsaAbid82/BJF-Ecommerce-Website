import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, useTheme } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import Banner from '../assets/Banner.jpg'

const Counter = () => {
  const theme = useTheme();
  const [counters, setCounters] = useState({
    fences: 0,
    states: 0,
    locations: 0,
    postHoles: 0
  });

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const targetValues = {
    fences: 7000,
    states: 9,
    locations: 20,
    postHoles: 150000
  };

  const duration = 2000; 
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (!inView) return;

    const animateCounters = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      setCounters({
        fences: Math.floor(progress * targetValues.fences),
        states: Math.floor(progress * targetValues.states),
        locations: Math.floor(progress * targetValues.locations),
        postHoles: Math.floor(progress * targetValues.postHoles)
      });

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      }
    };

    requestAnimationFrame(animateCounters);

    return () => {
      startTimeRef.current = null;
    };
  }, [inView]);

  const stats = [
    { value: counters.fences, label: "FENCES INSTALLED PER YEAR" },
    { value: counters.states, label: "STATES SERVED" },
    { value: counters.locations, label: "LOCATIONS" },
    { value: counters.postHoles, label: "POST HOLES DUG PER YEAR" }
  ];

  return (
    <Box 
      ref={ref}
      sx={{
        width: '100vw',
        ml: -20,
        py: 8,
          backgroundImage: `url(${Banner})`,
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
            gap: 4,
            textAlign: 'center'
          }}
        >
          {stats.map((stat, index) => (
            <Box key={index} sx={{ px: 2 }}>
              <Typography 
                variant="h3" 
                sx={{
                  fontWeight: 'bold',
                  color: '#067f46',
                  fontSize: { xs: '2.5rem', md: '3rem' },
                  mt: 3
                }}
              >
                {stat.value.toLocaleString()}+
              </Typography>
              <Typography 
                variant="subtitle1"
                sx={{
                  color: '#F5F5DC',
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Counter;
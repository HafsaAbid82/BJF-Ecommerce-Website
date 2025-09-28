import { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Paper } from '@mui/material';

// Mock API (localStorage for demo)
const mockApi = {
  leadSubmit: async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    const leads = JSON.parse(localStorage.getItem('leads') || '[]');
    const newLead = { ...data, id: Date.now(), createdAt: new Date().toISOString() };
    localStorage.setItem('leads', JSON.stringify([...leads, newLead]));
    return { success: true };
  },
};

// Reusable input styles
const inputStyles = {
  '& .MuiOutlinedInput-root': {
    color: '#F5F5DC',
    backgroundColor: 'rgba(168, 201, 186, 0.1)',
    '& fieldset': { borderColor: '#3A5A40' },
    '&:hover fieldset': { borderColor: '#88BDA8' },
    '&.Mui-focused fieldset': { borderColor: '#F5F5DC' },
  },
  '& input': { color: '#F5F5DC' },
  '& input::placeholder': { color: 'rgba(245,245,220,0.5)' },
  '& .MuiInputLabel-root': { color: '#F5F5DC' },
  '& .MuiInputLabel-root.Mui-focused': { color: '#88BDA8' },
};

const SignUp = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await mockApi.leadSubmit(form);
      if (res.success) setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        py: 8,
        width: '100vw',
        ml: -12,
        background: '#000000ff',
        borderTop: '1px solid rgba(136, 189, 168, 0.3)',
      }}
    >
      <Container maxWidth="sm">
        {!submitted ? (
          <Paper
            elevation={1}
            sx={{
              p: 4,
              backgroundColor: 'transparent',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                fontWeight: 600,
                color: '#F5F5F5',
              }}
            >
              Get Your Free Fence Quote
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                label="Full Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
                sx={inputStyles}
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
                sx={inputStyles}
              />
              <TextField
                label="Phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
                sx={inputStyles}
              />
              <TextField
                label="Location (City/State)"
                name="location"
                value={form.location}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
                sx={inputStyles}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
                sx={{
                  mt: 3,
                  py: 1.5,
                  fontWeight: 600,
                  backgroundColor: '#3A5A40',
                  '&:hover': {
                    backgroundColor: '#3A5A40',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 8px #f5f5f53b'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                {loading ? 'Submitting...' : 'Request a Free Quote'}
              </Button>
            </form>
          </Paper>
        ) : (
          <Box textAlign="center">
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, mb: 2, color: '#F5F5F5' }}
            >
              Thank You!
            </Typography>
            <Typography variant="h6" sx={{ color: '#3A5A40' }}>
              Our team will reach out shortly with your fencing quote.
            </Typography>
          </Box>
        )}
      </Container>
    </Box >
  );
};

export default SignUp;


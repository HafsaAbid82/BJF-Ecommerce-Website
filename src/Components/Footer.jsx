import { Box, Typography, Container, Grid, Link, Divider } from '@mui/material';
import Draw from '../assets/BJF-Logo.png'

const Footer = () => {
  const locations = {
    "North Carolina": ["Charlotte,", "Clayton,", "Crestimoor,", "Durham,", "Fayetteville,", "Brunswick Co,", "Greenboro,", "Harriet County,", "Holly Springs,", "Isleigh,", "Nash County"],
    "Florida": ["Jacksonville,", "Orlando,", "Tampa"],
    "Georgia": ["Atlanta,", "East Atlanta"],
    "Tennessee": ["Nashville,"],
    "Idaho": ["Roses"],
    "Louisiana": ["Salom Ridge"],
    "Pennsylvania": ["Pittsburgh"],
    "Ohio": ["Columbia"],
    "Athanasia": ["Northwest Arkansas"]
  };

  const quickLinks = [
    "Franchise Opportunities",
    "Locations",
    "Warranty",
    "Testimonials",
    "Privacy Policy",
    "Email Us",
    "Terms and Conditions",
    "Draw Your Fence"
  ];

  const socialLinks = [
    { name: "Facebook", url: "#" },
    { name: "Twitter", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "YouTube", url: "#" }
  ];

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100%',
        mb: -4,
        backgroundColor: '#000000',
        py: 6,
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        position: 'relative',
        borderTop: '1px solid rgba(136, 189, 168, 0.3)'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Locations Column */}
          <Grid xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 400,
                mb: 3,
                color: '#F5F5F5',
                fontSize: '1.5rem',
                textAlign: 'left'
              }}
            >
              Your Local Fence Company
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', }}>
              {Object.entries(locations).map(([state, cities]) => (
                <Box key={state} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 200,
                      fontSize: 15,
                      color: '#78aa81ff !important',
                      minWidth: '120px',
                      textAlign: 'left'
                    }}
                  >
                    {state}:
                  </Typography>
                  <Box component="ul" sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    listStyle: 'none',
                    pl: 0,
                    m: 0,
                    maxWidth: '500px',
                    '& li': {
                      color: '#F5F5F5',
                      fontSize: 14,
                      mr: 1,
                      whiteSpace: 'nowrap'
                    }
                  }}>
                    {cities.map(city => (
                      <li key={city}>{city}</li>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Quick Links Column */}
          <Grid xs={12} md={3}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 400,
                mb: 3,
                color: '#F5F5F5',
                fontSize: '1.5rem',
                textAlign: 'left'
              }}
            >
              Quick links
            </Typography>

            <Box component="ul" sx={{
              listStyle: 'none',
              pl: 0,
              '& li': {
                mb: 1,
                textAlign: 'left',
              }
            }}>
              {quickLinks.map(link => (
                <li key={link}>
                  <Link
                    href="#"
                    sx={{
                      color: '#F5F5F5',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      transition: 'color 0.2s',
                      '&:hover': {
                        color: '#3A5A40',
                      }
                    }}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </Box>
          </Grid>

          {/* Draw Your Fence Column */}

          <Box
            sx={{
              width: 200,
              height: 150,
              backgroundImage: `linear-gradient(to right, rgba(18, 16, 16, 0.3) 30%, rgba(13, 12, 12, 0.1)), url(${Draw})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              mt: 8,
              ml: 10,
              borderRadius: 2,
            }}
          />
        </Grid>


        <Divider sx={{
          borderColor: 'rgba(136, 189, 168, 0.3)',
          my: 4
        }} />

        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.85rem'
        }}>
          <Typography sx={{ color: '#3A5A40!important', }}>
            © Copyright Fence Co
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            {socialLinks.map(social => (
              <Link
                key={social.name}
                href={social.url}
                sx={{
                  color: '#F5F5F5',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  transition: 'color 0.2s',
                  '&:hover': {
                    color: '#3A5A40'
                  }
                }}
              >
                {social.name}
              </Link>
            ))}
          </Box>
        </Box>
        <Typography sx={{ textAlign: 'right', color: '#3A5A40!important', fontSize: 15 }}>
          Website by Relevant Media Solutions
        </Typography>
      </Container>
    </Box >
  );
};

export default Footer;
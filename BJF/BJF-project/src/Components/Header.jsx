import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Container, Divider, List, ListItem, ListItemText, Drawer, useMediaQuery, useTheme } from '@mui/material';
import { Phone as PhoneIcon, Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import BJFLogo from '../assets/BJF-Logo.png';
import FenceModal from './FenceModal';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isFenceModalOpen, setIsFenceModalOpen] = useState(false);

  const handleFenceModalOpen = () => setIsFenceModalOpen(true);
  const handleFenceModalClose = () => setIsFenceModalOpen(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const topBarContent = (
    <Container maxWidth={false} sx={styles.topBarContainer}>
      <Box sx={styles.topBarContent}>
        <Box component="img" src={BJFLogo} alt="BJF Logo" sx={styles.logoImage} />
        <Box sx={styles.contactItem}>
          <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
          <Typography variant="body2">833-253-8580</Typography>
        </Box>
        <Typography variant="body2" sx={styles.hours}>
          Mon - Fri: 9:00 - 4:00 pm
        </Typography>
         <Button variant="text" sx={styles.ctaButton} onClick={handleFenceModalOpen} >
          GET YOUR FREE ESTIMATE
        </Button>
      </Box>
    </Container>
  );

  const navItems = [
    'RESIDENTIAL', 'COMMERCIAL', 'FREE ESTIMATES', 'LOCATIONS',
    'STYLES', 'ABOUT US', 'FINANCING', 'FRANCHISE', 'BLOG'
  ];

  const drawer = (
    <Box sx={styles.drawerContainer}>
      <List>
        {navItems.map((item) => (
          <React.Fragment key={item}>
            <ListItem 
              button 
              component="a" 
              href={ item.toLowerCase().replace(' ', '-')}
              sx={styles.mobileListItem}
              onClick={handleDrawerToggle}
            >
              <ListItemText 
                primary={item} 
                primaryTypographyProps={{ sx: styles.mobileItemText }}
              />
            </ListItem>
            <Divider sx={styles.divider} />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <>
    <AppBar position="fixed" elevation={0} sx={styles.appBar}>
      {/* Top Utility Bar */}
      <Box sx={styles.topBar}>
        {topBarContent}
      </Box>

      {/* Main Navigation Bar */}
      <Toolbar sx={styles.toolbar}>
        <Container maxWidth={false} sx={styles.navContainer}>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={styles.menuButton}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          ) : (
            <Box sx={styles.navLinks}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  sx={styles.navButton}
                >
                  {item}
                </Button>
              ))}
            </Box>
          )}
        </Container>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{ sx: styles.drawerPaper }}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </AppBar>
     <FenceModal 
        open={isFenceModalOpen} 
        onClose={handleFenceModalClose} 
      />
    </>
  );
};

// Color scheme
const colors = {
  black: '#000000',
  sage: '#88BDA8',
  cream: '#F5F5DC',
  lightSage: '#a8c9ba',
  darkGray: '#333333'
};

// Styles
const styles = {
  appBar: {
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: theme => theme.zIndex.drawer + 1,
  },
  topBar: {
    background: 'linear-gradient(130deg,rgb(19, 20, 20) 0%,rgba(0, 0, 0, 0.94) 25%,rgba(31, 29, 29, 0.91) 50%,rgba(7, 6, 6, 0.95) 75%,rgb(26, 27, 27) 100%)',
    py: 1,
    width: '100%',
  },
  topBarContainer: {
    maxWidth: '100%',
    px: { xs: 2, md: 4 },
  },
  topBarContent: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 2,
    flexWrap: 'wrap',
  },
  logoImage: {
    height: { xs: 60, md: 80 },
    width: 'auto',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    color: colors.cream,
  },
  hours: {
    px: 2,
    color: colors.cream,
  },
  ctaButton: {
    color: colors.cream,
    fontWeight: 'bold',
    textTransform: 'none',
    px: 2,
    py: 1,
    minWidth: 'auto',
     backgroundColor: '#067f46',
                  '&:hover': {
                    backgroundColor: '#055c33',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 8px rgba(6, 127, 70, 0.4)'
                  },
                  transition: 'all 0.3s ease'
  },
  toolbar: {
    backgroundColor: colors.sage,
    minHeight: { xs: '80px', md: '100px' },
    width: '100%',
    alignItems: 'center'
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    px: { xs: 2, md: 4 },
  },
  navLinks: {
    display: 'flex',
    gap: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  navButton: {
    color: colors.black,
    textTransform: 'uppercase',
    fontSize: '0.8rem',
    fontWeight: 'medium',
    letterSpacing: '0.5px',
    minWidth: 'auto',
    px: 1,
    backgroundColor: 'transparent',
    '&:hover': {
      color: colors.darkGray,
      backgroundColor: 'transparent',
    },
  },
  menuButton: {
    color: colors.cream,
  },
  drawerPaper: {
    width: '280px',
    backgroundColor: colors.black,
  },
  drawerContainer: {
    py: 2,
  },
  mobileListItem: {
    py: 1.5,
    px: 3,
    '&:hover': {
      backgroundColor: colors.darkGray,
    }
  },
  mobileItemText: {
    color: colors.cream,
    fontWeight: 'medium',
    fontSize: '0.9rem',
    letterSpacing: '0.5px',
  },
  divider: {
    backgroundColor: colors.darkGray,
  },
};

export default Header;
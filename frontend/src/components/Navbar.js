import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Container,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';
import { Link as RouterLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const [langMenuAnchor, setLangMenuAnchor] = useState(null);
  const location = useLocation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLangMenuAnchor(null);
  };

  const navItems = [
    { key: 'home', label: t('nav.home'), path: '/' },
    { key: 'about', label: t('nav.about'), path: '/about' },
    { key: 'products', label: t('nav.products'), path: '/products' },
    { key: 'visit', label: t('nav.visit'), path: '/visit' },
    { key: 'contact', label: t('nav.contact'), path: '/contact' },
  ];

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {isMobile ? (
            <>
              <Typography
                variant="h6"
                component={RouterLink}
                to="/"
                sx={{
                  flexGrow: 1,
                  textDecoration: 'none',
                  color: 'primary.main',
                  fontWeight: 700,
                }}
              >
                Tropical Wood Inc.
              </Typography>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={(e) => setMobileMenuAnchor(e.currentTarget)}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={mobileMenuAnchor}
                open={Boolean(mobileMenuAnchor)}
                onClose={() => setMobileMenuAnchor(null)}
              >
                {navItems.map((item) => (
                  <MenuItem
                    key={item.key}
                    component={RouterLink}
                    to={item.path}
                    onClick={() => setMobileMenuAnchor(null)}
                    selected={location.pathname === item.path}
                    sx={{
                      backgroundColor: location.pathname === item.path ? 'rgba(74, 103, 65, 0.1)' : 'transparent',
                      '&.Mui-selected': {
                        backgroundColor: 'rgba(74, 103, 65, 0.1)',
                        '&:hover': {
                          backgroundColor: 'rgba(74, 103, 65, 0.2)',
                        },
                      },
                    }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
              <IconButton
                color="inherit"
                onClick={(e) => setLangMenuAnchor(e.currentTarget)}
                sx={{ ml: 2 }}
              >
                <LanguageIcon />
              </IconButton>
              <Menu
                anchorEl={langMenuAnchor}
                open={Boolean(langMenuAnchor)}
                onClose={() => setLangMenuAnchor(null)}
              >
                <MenuItem onClick={() => handleLanguageChange('en')}>English</MenuItem>
                <MenuItem onClick={() => handleLanguageChange('fr')}>Français</MenuItem>
              </Menu>
            </>
          ) : (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                border: '2px solid #8B4513',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: 'rgba(74, 103, 65, 0.05)',
              }}
            >
              <Typography
                variant="h6"
                component={RouterLink}
                to="/"
                sx={{
                  textDecoration: 'none',
                  color: '#8B4513',
                  fontWeight: 700,
                  px: 3,
                  py: 1.5,
                  borderRight: '2px solid #8B4513',
                  fontSize: '1.2rem',
                }}
              >
                Tropical Wood Inc.
              </Typography>
              <Box sx={{ display: 'flex', flexGrow: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.key}
                    component={RouterLink}
                    to={item.path}
                    color="inherit"
                    sx={{
                      color: location.pathname === item.path ? '#5C2E0C' : '#8B4513',
                      fontWeight: location.pathname === item.path ? 700 : 600,
                      fontSize: '1.1rem',
                      textTransform: 'none',
                      minWidth: 120,
                      px: 3,
                      py: 1.5,
                      backgroundColor: location.pathname === item.path ? 'rgba(74, 103, 65, 0.15)' : 'transparent',
                      '&:hover': {
                        backgroundColor: 'rgba(74, 103, 65, 0.2)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
              <Box
                sx={{
                  borderLeft: '2px solid #8B4513',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <IconButton
                  color="inherit"
                  onClick={(e) => setLangMenuAnchor(e.currentTarget)}
                  sx={{
                    color: '#8B4513',
                    px: 3,
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: 'rgba(74, 103, 65, 0.2)',
                    },
                  }}
                >
                  <LanguageIcon />
                </IconButton>
                <Menu
                  anchorEl={langMenuAnchor}
                  open={Boolean(langMenuAnchor)}
                  onClose={() => setLangMenuAnchor(null)}
                >
                  <MenuItem onClick={() => handleLanguageChange('en')}>English</MenuItem>
                  <MenuItem onClick={() => handleLanguageChange('fr')}>Français</MenuItem>
                </Menu>
              </Box>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 
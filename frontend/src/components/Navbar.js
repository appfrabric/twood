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

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const [langMenuAnchor, setLangMenuAnchor] = useState(null);

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

          {isMobile ? (
            <>
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
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.key}
                  component={RouterLink}
                  to={item.path}
                  color="inherit"
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

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
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 
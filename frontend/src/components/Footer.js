import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  useTheme,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const footerSections = [
    {
      title: t('nav.products'),
      links: [
        { label: t('products.plywood'), path: '/products/plywood' },
        { label: t('products.melamine'), path: '/products/melamine' },
        { label: t('products.veneer'), path: '/products/veneer' },
        { label: t('products.logs'), path: '/products/logs' },
      ],
    },
    {
      title: t('nav.about'),
      links: [
        { label: t('nav.about'), path: '/about' },
        { label: t('visit.factory'), path: '/visit' },
        { label: t('nav.contact'), path: '/contact' },
      ],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Tropical Wood Inc.
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              A division of Roi Lux
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Your trusted partner in premium wood products from Cameroon
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton color="inherit" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>

          {footerSections.map((section) => (
            <Grid item xs={12} sm={6} md={4} key={section.title}>
              <Typography variant="h6" gutterBottom>
                {section.title}
              </Typography>
              {section.links.map((link) => (
                <Link
                  key={link.path}
                  component={RouterLink}
                  to={link.path}
                  color="inherit"
                  display="block"
                  sx={{ mb: 1, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  {link.label}
                </Link>
              ))}
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 4,
            pt: 2,
            borderTop: 1,
            borderColor: 'rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Tropical Wood Inc. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 
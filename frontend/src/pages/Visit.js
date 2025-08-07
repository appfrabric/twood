import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);

const Visit = () => {
  const { t } = useTranslation();

  const galleryImages = [
    {
      src: '/images/visit/factory-exterior.jpg',
      title: t('visit.gallery.exterior'),
      description: t('visit.gallery.exteriorDesc'),
    },
    {
      src: '/images/visit/factory-interior.jpg',
      title: t('visit.gallery.interior'),
      description: t('visit.gallery.interiorDesc'),
    },
    {
      src: '/images/visit/production-line.jpg',
      title: t('visit.gallery.production'),
      description: t('visit.gallery.productionDesc'),
    },
    {
      src: '/images/visit/quality-control.jpg',
      title: t('visit.gallery.quality'),
      description: t('visit.gallery.qualityDesc'),
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '40vh',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: 'url(/images/visit/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              color="white"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 700,
              }}
            >
              {t('visit.title')}
            </Typography>
            <Typography
              variant="h4"
              color="white"
              sx={{ mt: 2, opacity: 0.9 }}
            >
              {t('visit.subtitle')}
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Content Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h3" gutterBottom color="primary.main">
                {t('visit.experience')}
              </Typography>
              <Typography variant="h6" color="text.secondary" paragraph>
                {t('visit.experienceSubtitle')}
              </Typography>
              <Typography variant="body1" paragraph>
                {t('visit.description')}
              </Typography>
              <Typography variant="body1" paragraph>
                {t('visit.schedule')}
              </Typography>
              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'white',
                  color: '#8B4513',
                  '&:hover': { 
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                    color: '#5C2E0C'
                  },
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  borderRadius: 2,
                  boxShadow: 3,
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                {t('contact.form.submit')}
              </Button>
            </MotionBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                component="img"
                src="/images/visit/factory-overview.jpg"
                alt="Tropical Wood Factory Overview"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </MotionBox>
          </Grid>
        </Grid>
      </Container>

      {/* Gallery Section */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom color="primary.main">
            {t('visit.gallery.title')}
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" paragraph>
            {t('visit.gallery.subtitle')}
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {galleryImages.map((image, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={image.src}
                      alt={image.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" gutterBottom>
                        {image.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {image.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Visit; 
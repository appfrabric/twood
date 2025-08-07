import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);

const Home = () => {
  const { t } = useTranslation();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: 'url(/images/home/hero.jpg)',
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
                mb: 2,
              }}
            >
              {t('home.hero.title')}
            </Typography>
            <Typography
              variant="h4"
              color="white"
              sx={{ mb: 2, maxWidth: '800px' }}
            >
              {t('home.hero.subtitle')}
            </Typography>
            <Typography
              variant="h5"
              color="white"
              sx={{ mb: 4, maxWidth: '800px', opacity: 0.9 }}
            >
              {t('footer.division')}
            </Typography>
            <Button
              component={RouterLink}
              to="/products"
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: '#8B4513',
                '&:hover': { 
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                  color: '#5C2E0C'
                },
                mr: 2,
              }}
            >
              {t('nav.products')}
            </Button>
            <Button
              component={RouterLink}
              to="/visit"
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': { 
                  borderColor: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)'
                },
              }}
            >
              {t('nav.visit')}
            </Button>
          </MotionBox>
        </Container>
      </Box>

      {/* About Section */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h3" gutterBottom color="primary.main">
                  {t('home.about.title')}
                </Typography>
                <Typography variant="h6" color="text.secondary" paragraph>
                  {t('home.about.subtitle')}
                </Typography>
                <Typography variant="body1" paragraph>
                  Tropical Wood Inc. is a leading manufacturer of premium wood products in Cameroon. 
                  We specialize in plywood, melamine, veneer, and raw wood logs, serving both local 
                  and international markets with the highest quality standards.
                </Typography>
                <Button
                  component={RouterLink}
                  to="/about"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: 'white',
                    color: '#8B4513',
                    '&:hover': { 
                      bgcolor: 'rgba(255, 255, 255, 0.9)',
                      color: '#5C2E0C'
                    },
                  }}
                >
                  {t('nav.about')}
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
                  src="/images/home/showcase.jpg"
                  alt="Tropical Wood Factory"
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
      </Box>

      {/* Products Preview */}
      <Box sx={{ py: 8, bgcolor: 'primary.light' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" color="white" gutterBottom>
            {t('home.products.title')}
          </Typography>
          <Typography variant="h6" align="center" color="white" paragraph>
            {t('home.products.subtitle')}
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {[
              {
                title: 'Plywood',
                description: 'High-quality plywood for various applications',
                image: '/images/products/plywood/premium.jpg',
                link: '/products',
              },
              {
                title: 'Melamine',
                description: 'Custom-colored prefinished melamine plywood',
                image: '/images/products/melamine/main.jpg',
                link: '/products',
              },
              {
                title: 'Veneer',
                description: 'Premium wood veneer from Cameroon\'s finest woods',
                image: '/images/products/veneer/main.jpg',
                link: '/products',
              },
            ].map((product, index) => (
              <Grid item xs={12} md={4} key={product.title}>
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
                      image={product.image}
                      alt={product.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" gutterBottom>
                        {product.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {product.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              component={RouterLink}
              to="/products"
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                '&:hover': { bgcolor: 'grey.100' },
              }}
            >
              {t('nav.products')}
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 
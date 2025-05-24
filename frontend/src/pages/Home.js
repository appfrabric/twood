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
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { IMAGES } from '../constants/images';

const MotionBox = motion(Box);

const Home = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const featuredProducts = [
    {
      title: t('products.plywood.premium'),
      image: IMAGES.products.plywood.premium,
      description: 'High-quality premium plywood for demanding applications',
      path: '/products/plywood/premium',
    },
    {
      title: t('products.melamine'),
      image: IMAGES.products.melamine.main,
      description: 'Custom-colored prefinished melamine plywood',
      path: '/products/melamine',
    },
    {
      title: t('products.veneer'),
      image: IMAGES.products.veneer.main,
      description: 'Premium wood veneer from Cameroon\'s finest woods',
      path: '/products/veneer',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '80vh',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: `url(${IMAGES.home.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
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
              Tropical Wood Inc.
            </Typography>
            <Typography
              variant="h4"
              color="white"
              sx={{ mb: 2, maxWidth: '800px' }}
            >
              Premium Wood Products from Cameroon
            </Typography>
            <Typography
              variant="h5"
              color="white"
              sx={{ mb: 4, maxWidth: '800px', opacity: 0.9 }}
            >
              A Division of Roi Lux
            </Typography>
            <Button
              component={RouterLink}
              to="/products"
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'primary.main',
                '&:hover': { bgcolor: 'primary.dark' },
              }}
            >
              {t('common.learnMore')}
            </Button>
          </MotionBox>
        </Container>
      </Box>

      {/* Featured Products Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h2"
          align="center"
          sx={{ mb: 6, color: 'primary.main' }}
        >
          {t('nav.products')}
        </Typography>
        <Grid container spacing={4}>
          {featuredProducts.map((product, index) => (
            <Grid item xs={12} md={4} key={product.title}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={product.image}
                    alt={product.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.title}
                    </Typography>
                    <Typography>{product.description}</Typography>
                  </CardContent>
                  <Box sx={{ p: 2 }}>
                    <Button
                      component={RouterLink}
                      to={product.path}
                      variant="outlined"
                      fullWidth
                    >
                      {t('common.viewDetails')}
                    </Button>
                  </Box>
                </Card>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action Section */}
      <Box sx={{ bgcolor: 'primary.light', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" color="white" gutterBottom>
                {t('visit.factory')}
              </Typography>
              <Typography variant="h6" color="white" paragraph>
                Experience our state-of-the-art facilities and production process
              </Typography>
              <Button
                component={RouterLink}
                to="/visit"
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': { bgcolor: 'grey.100' },
                }}
              >
                {t('visit.schedule')}
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={IMAGES.about.factoryExterior}
                alt="Factory Preview"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 
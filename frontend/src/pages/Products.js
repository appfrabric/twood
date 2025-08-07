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
  CardActions,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);

const Products = () => {
  const { t } = useTranslation();

  const products = [
    {
      title: 'Plywood',
      description: 'High-quality plywood for various applications including furniture, construction, and packaging.',
      image: '/images/products/plywood/premium.jpg',
      features: ['Premium Quality', 'Various Thicknesses', 'Smooth Finish'],
    },
    {
      title: 'Melamine',
      description: 'Custom-colored prefinished melamine plywood with excellent durability and aesthetic appeal.',
      image: '/images/products/melamine/main.jpg',
      features: ['Custom Colors', 'Prefinished', 'Durable'],
    },
    {
      title: 'Veneer',
      description: 'Premium wood veneer from Cameroon\'s finest woods, perfect for high-end applications.',
      image: '/images/products/veneer/main.jpg',
      features: ['Natural Wood', 'Premium Quality', 'Various Species'],
    },
    {
      title: 'Wood Logs',
      description: 'Raw wood logs from sustainable sources, available in various species and sizes.',
      image: '/images/products/logs/main.jpg',
      features: ['Sustainable', 'Various Species', 'Custom Sizes'],
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
          backgroundImage: 'url(/images/products/hero.jpg)',
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
              {t('nav.products')}
            </Typography>
            <Typography
              variant="h4"
              color="white"
              sx={{ mt: 2, opacity: 0.9 }}
            >
              {t('products.subtitle')}
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Products Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" align="center" gutterBottom color="primary.main">
          {t('products.title')}
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          {t('products.description')}
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {products.map((product, index) => (
            <Grid item xs={12} md={6} key={product.title}>
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
                    height="240"
                    image={product.image}
                    alt={product.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" gutterBottom color="primary.main">
                      {product.title}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {product.description}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      {product.features.map((feature, featureIndex) => (
                        <Typography
                          key={featureIndex}
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 0.5 }}
                        >
                          • {feature}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                    <Button
                      component={RouterLink}
                      to={`/products/${product.title.toLowerCase()}`}
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
                        minHeight: '48px'
                      }}
                    >
                      {t('products.viewDetails')}
                    </Button>
                    <Button
                      component={RouterLink}
                      to={`/products/${product.title.toLowerCase()}/gallery`}
                      variant="outlined"
                      size="large"
                      sx={{
                        borderColor: '#8B4513',
                        color: '#8B4513',
                        '&:hover': {
                          borderColor: '#5C2E0C',
                          color: '#5C2E0C',
                          bgcolor: 'rgba(139, 69, 19, 0.04)'
                        },
                        py: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        borderRadius: 2,
                        transition: 'all 0.2s ease-in-out',
                        minHeight: '48px'
                      }}
                    >
                      {t('products.viewGallery')}
                    </Button>
                  </CardActions>
                </Card>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Products; 
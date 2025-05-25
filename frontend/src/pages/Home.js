import React, { useState } from 'react';
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
import ProductGallery from '../components/ProductGallery';

const MotionBox = motion(Box);

const Home = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleGalleryOpen = (product) => {
    setSelectedProduct(product);
    setGalleryOpen(true);
  };

  const handleGalleryClose = () => {
    setGalleryOpen(false);
    setSelectedProduct(null);
  };

  const featuredProducts = [
    {
      title: t('products.plywood.premium'),
      image: IMAGES.products.plywood.premium,
      description: 'High-quality premium plywood for demanding applications',
      path: '/products/plywood/premium',
      gallery: [
        'images/products/plywood/premium/gallery/1.jpg',
        'images/products/plywood/premium/gallery/2.jpg',
        'images/products/plywood/premium/gallery/3.jpg',
        'images/products/plywood/premium/gallery/4.jpg',
      ],
    },
    {
      title: t('products.melamine.title'),
      image: IMAGES.products.melamine.main,
      description: 'Custom-colored prefinished melamine plywood',
      path: '/products/melamine',
      gallery: [
        'images/products/melamine/standard/gallery/1.jpg',
        'images/products/melamine/standard/gallery/2.jpg',
        'images/products/melamine/standard/gallery/3.jpg',
        'images/products/melamine/standard/gallery/4.jpg',
      ],
    },
    {
      title: t('products.veneer.title'),
      image: IMAGES.products.veneer.main,
      description: 'Premium wood veneer from Cameroon\'s finest woods',
      path: '/products/veneer',
      gallery: [
        'images/products/veneer/okoume/gallery/1.jpg',
        'images/products/veneer/okoume/gallery/2.jpg',
        'images/products/veneer/okoume/gallery/3.jpg',
        'images/products/veneer/okoume/gallery/4.jpg',
      ],
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
              Tropical Wood Inc.
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
                    height: '500px',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s',
                    backgroundColor: 'white',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid #8B4513',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0px 8px 16px rgba(74, 103, 65, 0.15)',
                      border: '1px solid #5C2E0C',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={product.image}
                    alt={product.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography 
                      gutterBottom 
                      variant="h5" 
                      component="h2"
                      sx={{ 
                        color: '#4A6741',
                        fontWeight: 700,
                        fontSize: '1.5rem',
                        mb: 2,
                        fontFamily: '"Playfair Display", serif',
                        letterSpacing: '0.5px'
                      }}
                    >
                      {product.title}
                    </Typography>
                    <Typography 
                      sx={{ 
                        color: '#4A6741',
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        fontFamily: '"Roboto", sans-serif',
                        opacity: 0.9,
                        letterSpacing: '0.3px',
                        fontWeight: 400,
                        flexGrow: 1
                      }}
                    >
                      {product.description}
                    </Typography>
                  </CardContent>
                  <Box sx={{ p: 3, pt: 0 }}>
                    <Button
                      onClick={() => handleGalleryOpen(product)}
                      variant="outlined"
                      fullWidth
                      sx={{
                        borderColor: '#4A6741',
                        color: '#4A6741',
                        fontWeight: 600,
                        py: 1.5,
                        fontSize: '1rem',
                        fontFamily: '"Roboto", sans-serif',
                        textTransform: 'none',
                        '&:hover': {
                          borderColor: '#2E4128',
                          backgroundColor: 'rgba(74, 103, 65, 0.1)',
                        },
                      }}
                    >
                      {t('viewGallery')}
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
                {t('visit.subtitle')}
              </Typography>
              <Button
                component={RouterLink}
                to="/visit"
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

      {/* Gallery Modal */}
      <ProductGallery
        open={galleryOpen}
        onClose={handleGalleryClose}
        title={selectedProduct?.title}
        images={selectedProduct?.gallery || []}
      />
    </Box>
  );
};

export default Home; 
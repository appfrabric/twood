import React, { useState } from 'react';
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
  Tabs,
  Tab,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { IMAGES } from '../constants/images';
import ProductGallery from '../components/ProductGallery';
import { styled } from '@mui/material/styles';

const MotionBox = motion(Box);

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  transition: 'transform 0.2s, box-shadow 0.2s',
  border: '1px solid #8B4513',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
    border: '1px solid #5C2E0C',
  },
}));

const Products = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);
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

  const productCategories = [
    {
      id: 'plywood',
      title: t('products.categories.plywood'),
      image: 'images/products/plywood/main.jpg',
      description: t('products.plywood.description'),
      products: [
        {
          title: `${t('products.plywood.premium')} - ${t('wood.okoume')}`,
          image: 'images/products/plywood/premium.jpg',
          description: t('products.plywood.description'),
          path: '/products/plywood/premium',
          gallery: [
            'images/products/plywood/premium/gallery/1.jpg',
            'images/products/plywood/premium/gallery/2.jpg',
            'images/products/plywood/premium/gallery/3.jpg',
            'images/products/plywood/premium/gallery/4.jpg',
          ],
        },
        {
          title: `${t('products.plywood.marine')} - ${t('wood.mahogany')}`,
          image: 'images/products/plywood/marine.jpg',
          description: t('products.plywood.description'),
          path: '/products/plywood/marine',
          gallery: [
            'images/products/plywood/marine/gallery/1.jpg',
            'images/products/plywood/marine/gallery/2.jpg',
            'images/products/plywood/marine/gallery/3.jpg',
            'images/products/plywood/marine/gallery/4.jpg',
          ],
        },
        {
          title: `${t('products.plywood.structural')} - ${t('wood.ayous')}`,
          image: 'images/products/plywood/structural.jpg',
          description: t('products.plywood.description'),
          path: '/products/plywood/structural',
          gallery: [
            'images/products/plywood/structural/gallery/1.jpg',
            'images/products/plywood/structural/gallery/2.jpg',
            'images/products/plywood/structural/gallery/3.jpg',
            'images/products/plywood/structural/gallery/4.jpg',
          ],
        },
      ],
    },
    {
      id: 'melamine',
      title: t('products.categories.melamine'),
      image: 'images/products/melamine/main.jpg',
      description: t('products.melamine.description'),
      products: [
        {
          title: t('products.melamine.standard'),
          image: 'images/products/melamine/standard.jpg',
          description: t('products.melamine.description'),
          path: '/products/melamine/standard',
          gallery: [
            'images/products/melamine/standard/gallery/1.jpg',
            'images/products/melamine/standard/gallery/2.jpg',
            'images/products/melamine/standard/gallery/3.jpg',
            'images/products/melamine/standard/gallery/4.jpg',
            'images/products/melamine/standard/gallery/5.jpg',
            'images/products/melamine/standard/gallery/6.jpg',
            'images/products/melamine/standard/gallery/7.jpg',
            'images/products/melamine/standard/gallery/8.jpg',
            'images/products/melamine/standard/gallery/9.jpg',
            'images/products/melamine/standard/gallery/10.jpg'
          ],
        },
        {
          title: t('products.melamine.custom'),
          image: 'images/products/melamine/custom.jpg',
          description: t('products.melamine.description'),
          path: '/products/melamine/custom',
          gallery: [
            'images/products/melamine/custom/gallery/1.jpg',
            'images/products/melamine/custom/gallery/2.jpg',
            'images/products/melamine/custom/gallery/3.jpg',
            'images/products/melamine/custom/gallery/4.jpg',
          ],
        },
      ],
    },
    {
      id: 'veneer',
      title: t('products.categories.veneer'),
      image: 'images/products/veneer/main.jpg',
      description: t('products.veneer.description'),
      products: [
        {
          title: t('products.veneer.okoume'),
          image: 'images/products/veneer/okoume.jpg',
          description: t('products.veneer.description'),
          path: '/products/veneer/okoume',
          gallery: [
            'images/products/veneer/okoume/gallery/1.jpg',
            'images/products/veneer/okoume/gallery/2.jpg',
            'images/products/veneer/okoume/gallery/3.jpg',
            'images/products/veneer/okoume/gallery/4.jpg',
          ],
        },
        {
          title: t('products.veneer.mahogany'),
          image: 'images/products/veneer/mahogany.jpg',
          description: t('products.veneer.description'),
          path: '/products/veneer/mahogany',
          gallery: [
            'images/products/veneer/mahogany/gallery/1.jpg',
            'images/products/veneer/mahogany/gallery/2.jpg',
            'images/products/veneer/mahogany/gallery/3.jpg',
            'images/products/veneer/mahogany/gallery/4.jpg',
          ],
        },
        {
          title: t('products.veneer.ayous'),
          image: 'images/products/veneer/ayous.jpg',
          description: t('products.veneer.description'),
          path: '/products/veneer/ayous',
          gallery: [
            'images/products/veneer/ayous/gallery/1.jpg',
            'images/products/veneer/ayous/gallery/2.jpg',
            'images/products/veneer/ayous/gallery/3.jpg',
            'images/products/veneer/ayous/gallery/4.jpg',
          ],
        },
        {
          title: t('products.veneer.sapele'),
          image: 'images/products/veneer/sapele.jpg',
          description: t('products.veneer.description'),
          path: '/products/veneer/sapele',
          gallery: [
            'images/products/veneer/sapele/gallery/1.jpg',
            'images/products/veneer/sapele/gallery/2.jpg',
            'images/products/veneer/sapele/gallery/3.jpg',
            'images/products/veneer/sapele/gallery/4.jpg',
          ],
        },
      ],
    },
    {
      id: 'logs',
      title: t('products.categories.logs'),
      image: 'images/products/logs/main.jpg',
      description: t('products.logs.description'),
      products: [
        {
          title: t('products.logs.raw'),
          image: 'images/products/logs/main.jpg',
          description: t('products.logs.description'),
          path: '/products/logs',
          gallery: [
            'images/products/logs/gallery/1.jpg',
            'images/products/logs/gallery/2.jpg',
            'images/products/logs/gallery/3.jpg',
            'images/products/logs/gallery/4.jpg',
          ],
        }
      ],
    },
  ];

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '30vh',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: `url(images/products/hero.jpg)`,
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
          </MotionBox>
        </Container>
      </Box>

      {/* Product Categories */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box
          sx={{
            borderRadius: '8px',
            overflow: 'hidden',
            mb: 4,
          }}
        >
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              backgroundColor: 'rgba(74, 103, 65, 0.05)',
              '& .MuiTabs-indicator': {
                backgroundColor: '#8B4513',
                height: '3px',
              },
              '& .MuiTabs-flexContainer': {
                justifyContent: 'flex-start',
              },
              '& .MuiTab-root': {
                color: '#8B4513',
                fontWeight: 600,
                fontSize: '1.1rem',
                textTransform: 'none',
                minWidth: 200,
                '&.Mui-selected': {
                  color: '#5C2E0C',
                  fontWeight: 700,
                  backgroundColor: 'rgba(74, 103, 65, 0.15)',
                },
              },
            }}
          >
            {productCategories.map((category) => (
              <Tab
                key={category.id}
                label={category.title}
                sx={{ fontSize: '1.1rem' }}
              />
            ))}
          </Tabs>
        </Box>

        {productCategories.map((category, categoryIndex) => (
          <Box
            key={category.id}
            sx={{
              display: selectedTab === categoryIndex ? 'block' : 'none',
              backgroundColor: selectedTab === categoryIndex ? 'rgba(74, 103, 65, 0.05)' : 'transparent',
              borderRadius: '8px',
              p: 3,
              boxShadow: selectedTab === categoryIndex ? '0px 4px 12px rgba(74, 103, 65, 0.1)' : 'none',
            }}
          >
            <Typography
              variant="h4"
              color="primary.main"
              sx={{ mb: 4, fontWeight: 600 }}
            >
              {category.title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 4, maxWidth: '800px' }}
            >
              {category.description}
            </Typography>
            <Grid container spacing={4}>
              {category.products.map((product, index) => (
                <Grid item xs={12} sm={6} md={4} key={product.title} sx={{ display: 'flex', height: '500px' }}>
                  <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    sx={{ width: '100%' }}
                  >
                    <StyledCard>
                      <CardMedia
                        component="img"
                        height="240"
                        image={product.image}
                        alt={product.title}
                        sx={{ objectFit: 'cover' }}
                      />
                      <CardContent sx={{ 
                        flexGrow: 1, 
                        display: 'flex', 
                        flexDirection: 'column',
                        pb: '80px !important'
                      }}>
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
                          variant="body2" 
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
                      <Box sx={{ 
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        p: 3,
                        backgroundColor: 'white',
                      }}>
                        <Button
                          onClick={() => handleGalleryOpen(product)}
                          variant="outlined"
                          fullWidth
                          sx={{
                            borderColor: '#8B4513',
                            color: '#8B4513',
                            fontWeight: 600,
                            py: 1.5,
                            fontSize: '1rem',
                            fontFamily: '"Roboto", sans-serif',
                            textTransform: 'none',
                            '&:hover': {
                              borderColor: '#5C2E0C',
                              backgroundColor: 'rgba(139, 69, 19, 0.1)',
                              color: '#5C2E0C'
                            },
                          }}
                        >
                          {t('viewGallery')}
                        </Button>
                      </Box>
                    </StyledCard>
                  </MotionBox>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>

      {/* Call to Action */}
      <Box sx={{ bgcolor: 'primary.light', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" color="white" gutterBottom>
                {t('common.customOrder')}
              </Typography>
              <Typography variant="h6" color="white" paragraph>
                Need a custom solution? Contact us to discuss your specific requirements.
              </Typography>
              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': { bgcolor: 'grey.100' },
                }}
              >
                {t('common.contactUs')}
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="images/products/custom-order.jpg"
                alt="Custom Order"
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

export default Products; 
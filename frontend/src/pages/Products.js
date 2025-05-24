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

const MotionBox = motion(Box);

const Products = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);

  const productCategories = [
    {
      id: 'plywood',
      title: t('products.plywood'),
      image: 'images/products/plywood/main.jpg',
      description: 'High-quality plywood products for various applications',
      products: [
        {
          title: `${t('products.plywood.premium')} - ${t('wood.okoume')}`,
          image: 'images/products/plywood/premium.jpg',
          description: 'Premium grade plywood made from Okoume wood for demanding applications',
          path: '/products/plywood/premium',
        },
        {
          title: `${t('products.plywood.marine')} - ${t('wood.mahogany')}`,
          image: 'images/products/plywood/marine.jpg',
          description: 'Marine-grade plywood made from Mahogany for water-resistant applications',
          path: '/products/plywood/marine',
        },
        {
          title: `${t('products.plywood.structural')} - ${t('wood.ayous')}`,
          image: 'images/products/plywood/structural.jpg',
          description: 'Structural plywood made from Ayous for construction applications',
          path: '/products/plywood/structural',
        },
      ],
    },
    {
      id: 'melamine',
      title: 'Prefinished Melamine Wood Plank',
      image: 'images/products/melamine/main.jpg',
      description: 'Custom-colored prefinished melamine plywood',
      products: [
        {
          title: 'Standard Colors',
          image: 'images/products/melamine/standard.jpg',
          description: 'Wide range of standard color options',
          path: '/products/melamine/standard',
        },
        {
          title: 'Custom Colors',
          image: 'images/products/melamine/custom.jpg',
          description: 'Custom color matching services',
          path: '/products/melamine/custom',
        },
      ],
    },
    {
      id: 'veneer',
      title: t('products.veneer'),
      image: 'images/products/veneer/main.jpg',
      description: 'Premium wood veneer from Cameroon\'s finest woods',
      products: [
        {
          title: t('wood.okoume'),
          image: 'images/products/veneer/okoume.jpg',
          description: 'Premium Okoume wood veneer',
          path: '/products/veneer/okoume',
        },
        {
          title: t('wood.mahogany'),
          image: 'images/products/veneer/mahogany.jpg',
          description: 'Rich Mahogany wood veneer',
          path: '/products/veneer/mahogany',
        },
        {
          title: t('wood.ayous'),
          image: 'images/products/veneer/ayous.jpg',
          description: 'Light Ayous wood veneer',
          path: '/products/veneer/ayous',
        },
        {
          title: t('wood.sapele'),
          image: 'images/products/veneer/sapele.jpg',
          description: 'Elegant Sapele wood veneer',
          path: '/products/veneer/sapele',
        },
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
            border: '2px solid #8B4513',
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
                <Grid item xs={12} sm={6} md={4} key={product.title}>
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
                        transition: 'transform 0.2s',
                        backgroundColor: 'white',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0px 8px 16px rgba(74, 103, 65, 0.15)',
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
                        <Typography gutterBottom variant="h5" component="h2" color="secondary.main">
                          {product.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {product.description}
                        </Typography>
                      </CardContent>
                      <Box sx={{ p: 2 }}>
                        <Button
                          component={RouterLink}
                          to={product.path}
                          variant="outlined"
                          fullWidth
                          sx={{
                            borderColor: '#8B4513',
                            color: '#8B4513',
                            '&:hover': {
                              borderColor: '#5C2E0C',
                              backgroundColor: 'rgba(74, 103, 65, 0.1)',
                            },
                          }}
                        >
                          {t('common.viewDetails')}
                        </Button>
                      </Box>
                    </Card>
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
    </Box>
  );
};

export default Products; 
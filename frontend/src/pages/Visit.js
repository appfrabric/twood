import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IMAGES } from '../constants/images';

const MotionBox = motion(Box);

const Visit = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      src: IMAGES.about.gallery[0],
      alt: 'Factory Exterior',
      description: 'Our state-of-the-art facility in Douala',
    },
    {
      src: IMAGES.about.gallery[1],
      alt: 'Production Line',
      description: 'Modern production line for plywood manufacturing',
    },
    {
      src: IMAGES.about.gallery[2],
      alt: 'Quality Control',
      description: 'Rigorous quality control process',
    },
    {
      src: IMAGES.about.factoryExterior,
      alt: 'Warehouse',
      description: 'Spacious warehouse for product storage',
    },
    {
      src: IMAGES.about.team,
      alt: 'Showroom',
      description: 'Product showroom for clients',
    },
    {
      src: IMAGES.about.values,
      alt: 'Loading Area',
      description: 'Efficient loading and shipping area',
    },
  ];

  const handleImageClick = (index) => {
    setSelectedImage(galleryImages[index]);
    setCurrentImageIndex(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handlePrevious = () => {
    const newIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentImageIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '40vh',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: `url(${IMAGES.about.hero})`,
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
              {t('visit.factory')}
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Tour Information */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom color="primary.main">
              Experience Our Facility
            </Typography>
            <Typography variant="body1" paragraph>
              We invite you to visit our state-of-the-art manufacturing facility in Douala, Cameroon. Our guided tours provide an in-depth look at our production processes, quality control measures, and the craftsmanship that goes into every product.
            </Typography>
            <Typography variant="body1" paragraph>
              During your visit, you'll have the opportunity to:
            </Typography>
            <ul>
              <li>Tour our modern production facilities</li>
              <li>Witness our quality control processes</li>
              <li>Explore our product showroom</li>
              <li>Meet our experienced team</li>
              <li>Discuss your specific requirements</li>
            </ul>
            <Button
              component="a"
              href="mailto:tours@tropicalwood.com"
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
              alt="Factory Tour"
              sx={{
                width: '100%',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Gallery Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            color="primary.main"
            sx={{ mb: 6 }}
          >
            {t('visit.gallery')}
          </Typography>
          <Grid container spacing={4}>
            {galleryImages.map((image, index) => (
              <Grid item xs={12} sm={6} md={4} key={image.src}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      cursor: 'pointer',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.02)',
                      },
                    }}
                    onClick={() => handleImageClick(index)}
                  >
                    <Box
                      component="img"
                      src={image.src}
                      alt={image.alt}
                      sx={{
                        width: '100%',
                        height: 240,
                        objectFit: 'cover',
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {image.alt}
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

      {/* Image Dialog */}
      <Dialog
        open={Boolean(selectedImage)}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
      >
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'white',
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.7)' },
            }}
          >
            <CloseIcon />
          </IconButton>
          <IconButton
            onClick={handlePrevious}
            sx={{
              position: 'absolute',
              left: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.7)' },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.7)' },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
          {selectedImage && (
            <Box
              component="img"
              src={selectedImage.src}
              alt={selectedImage.alt}
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: '90vh',
                objectFit: 'contain',
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Visit; 
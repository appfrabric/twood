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
      alt: 'exterior',
      description: 'exterior',
    },
    {
      src: IMAGES.about.gallery[1],
      alt: 'production',
      description: 'production',
    },
    {
      src: IMAGES.about.gallery[2],
      alt: 'quality',
      description: 'quality',
    },
    {
      src: IMAGES.about.factoryExterior,
      alt: 'warehouse',
      description: 'warehouse',
    },
    {
      src: IMAGES.about.team,
      alt: 'showroom',
      description: 'showroom',
    },
    {
      src: IMAGES.about.values,
      alt: 'shipping',
      description: 'shipping',
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
              {t('visit.title')}
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Tour Information */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom color="primary.main">
              {t('visit.subtitle')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('visit.description')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('visit.opportunities')}
            </Typography>
            <ul>
              <li>{t('visit.opportunitiesList.tour')}</li>
              <li>{t('visit.opportunitiesList.quality')}</li>
              <li>{t('visit.opportunitiesList.showroom')}</li>
              <li>{t('visit.opportunitiesList.team')}</li>
              <li>{t('visit.opportunitiesList.requirements')}</li>
            </ul>
            <Button
              component="a"
              href="mailto:tours@tropicalwood.com"
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: '#2E7D32',
                '&:hover': { 
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                  color: '#1B5E20'
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
            {t('visit.gallery.title')}
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
                        {t(`visit.gallery.${image.alt}`)}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {t(`visit.gallery.${image.description}`)}
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
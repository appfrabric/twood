import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Typography,
  Grid,
} from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const About = () => {
  const { t } = useTranslation();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '40vh',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: 'url(/images/about/hero.jpg)',
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
              {t('nav.about')}
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
              <Typography variant="body1" paragraph>
                Our state-of-the-art facility in Douala combines traditional craftsmanship with 
                modern technology to produce wood products that meet international standards. 
                We are committed to sustainable forestry practices and environmental responsibility.
              </Typography>
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
                src="/images/about/factory-exterior.jpg"
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
  );
};

export default About; 
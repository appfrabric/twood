import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
} from '@mui/material';
import { motion } from 'framer-motion';
import FactoryIcon from '@mui/icons-material/Factory';
import NatureIcon from '@mui/icons-material/Nature';
import SecurityIcon from '@mui/icons-material/Security';
import HandshakeIcon from '@mui/icons-material/Handshake';

const MotionBox = motion(Box);

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: <FactoryIcon sx={{ fontSize: 60 }} />,
      title: 'Quality Manufacturing',
      description: 'State-of-the-art facilities and strict quality control processes ensure the highest standards in our products.',
    },
    {
      icon: <NatureIcon sx={{ fontSize: 60 }} />,
      title: 'Sustainable Practices',
      description: 'We are committed to responsible forestry and sustainable wood sourcing practices.',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 60 }} />,
      title: 'Reliability',
      description: 'Consistent quality and on-time delivery make us a trusted partner in the industry.',
    },
    {
      icon: <HandshakeIcon sx={{ fontSize: 60 }} />,
      title: 'Customer Focus',
      description: 'We build long-term relationships with our clients through exceptional service and support.',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '50vh',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
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
              {t('nav.about')}
            </Typography>
            <Typography
              variant="h4"
              color="white"
              sx={{
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                fontWeight: 400,
                opacity: 0.9,
              }}
            >
              A Division of Roi Lux
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Company Overview */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom color="primary.main">
              {t('nav.about')}
            </Typography>
            <Typography variant="body1" paragraph>
              Tropical Wood Inc., a division of Roi Lux, has been a leading manufacturer of premium wood products in Cameroon since 2010. Our state-of-the-art facility in Douala combines traditional craftsmanship with modern technology to produce high-quality plywood, melamine, and wood veneer products.
            </Typography>
            <Typography variant="body1" paragraph>
              We take pride in our commitment to sustainable forestry practices and responsible sourcing. Our products are made from carefully selected wood species native to Cameroon, including Okoume, Mahogany, Ayous, and Sapele.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Factory Exterior"
              sx={{
                width: '100%',
                borderRadius: 2,
                boxShadow: 3,
                height: '400px',
                objectFit: 'cover',
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Our Values */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            color="primary.main"
            sx={{ mb: 6 }}
          >
            Our Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={value.title}>
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
                      alignItems: 'center',
                      textAlign: 'center',
                      p: 3,
                    }}
                  >
                    <Box sx={{ color: 'primary.main', mb: 2 }}>
                      {value.icon}
                    </Box>
                    <Typography variant="h5" gutterBottom>
                      {value.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {value.description}
                    </Typography>
                  </Card>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Certifications */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          color="primary.main"
          sx={{ mb: 6 }}
        >
          Certifications & Standards
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                ISO 9001:2015
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Quality Management System Certification
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                FSC Certified
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Forest Stewardship Council Certification
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                CE Marking
              </Typography>
              <Typography variant="body2" color="text.secondary">
                European Conformity Certification
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 
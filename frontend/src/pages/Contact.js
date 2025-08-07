import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSuccess(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
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
          backgroundImage: 'url(/images/contact/hero.jpg)',
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
              {t('contact.title')}
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Contact Form Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h3" gutterBottom color="primary.main">
                {t('contact.getInTouch')}
              </Typography>
              <Typography variant="body1" paragraph>
                {t('contact.description')}
              </Typography>
              
              {success && (
                <Alert severity="success" sx={{ mb: 2 }}>
                  {t('contact.success')}
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <TextField
                  required
                  fullWidth
                  label={t('contact.form.name')}
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  margin="normal"
                />
                <TextField
                  required
                  fullWidth
                  label={t('contact.form.email')}
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label={t('contact.form.phone')}
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  margin="normal"
                />
                <TextField
                  required
                  fullWidth
                  label={t('contact.form.message')}
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  margin="normal"
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    mt: 2,
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
                  }}
                >
                  {t('contact.form.submit')}
                </Button>
              </Box>
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
                src="/images/contact/office.jpg"
                alt="Tropical Wood Office"
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

export default Contact; 
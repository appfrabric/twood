import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
} from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Tropical Wood Inc.
            </Typography>
            <Typography variant="body2" paragraph>
              A division of Roi Lux
            </Typography>
            <Typography variant="body2">
              Your trusted partner in premium wood products from Cameroon
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Products
            </Typography>
            <Typography variant="body2" paragraph>
              • Plywood
            </Typography>
            <Typography variant="body2" paragraph>
              • Melamine
            </Typography>
            <Typography variant="body2" paragraph>
              • Veneer
            </Typography>
            <Typography variant="body2">
              • Wood Logs
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" paragraph>
              Douala, Cameroon
            </Typography>
            <Typography variant="body2" paragraph>
              Email: info@tropicalwood.com
            </Typography>
            <Typography variant="body2">
              Phone: +237 XXX XXX XXX
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
          <Typography variant="body2" align="center">
            © 2024 Tropical Wood Inc. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 
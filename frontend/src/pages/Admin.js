import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const Admin = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>
        <Typography variant="body1">
          Welcome to the admin dashboard.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Admin; 
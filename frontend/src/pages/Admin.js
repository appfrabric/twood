import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Alert,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MotionBox = motion(Box);

const Admin = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [contactForms, setContactForms] = useState([]);
  const [selectedForm, setSelectedForm] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchContactForms();
  }, [token, navigate]);

  const fetchContactForms = async () => {
    try {
      const response = await fetch('/api/contact/', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.status === 401) {
        localStorage.removeItem('token');
        setToken(null);
        navigate('/admin/login');
        return;
      }
      if (!response.ok) {
        throw new Error('Failed to fetch contact forms');
      }
      const data = await response.json();
      setContactForms(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleStatusChange = async () => {
    try {
      const response = await fetch(`/api/contact/${selectedForm.id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status })
      });
      if (response.status === 401) {
        localStorage.removeItem('token');
        setToken(null);
        navigate('/admin/login');
        return;
      }
      if (!response.ok) {
        throw new Error('Failed to update status');
      }
      await fetchContactForms();
      setOpenDialog(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch('/api/token', {
        method: 'POST',
        body: formData
      });
      if (!response.ok) {
        throw new Error('Invalid credentials');
      }
      const data = await response.json();
      localStorage.setItem('token', data.access_token);
      setToken(data.access_token);
      navigate('/admin');
    } catch (error) {
      setError(error.message);
    }
  };

  if (!token) {
    return (
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Admin Login
          </Typography>
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              label="Email"
              name="username"
              type="email"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              margin="normal"
              required
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
            >
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Contact Form Submissions
      </Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contactForms.map((form) => (
              <TableRow key={form.id}>
                <TableCell>{form.id}</TableCell>
                <TableCell>{form.name}</TableCell>
                <TableCell>{form.email}</TableCell>
                <TableCell>{form.phone}</TableCell>
                <TableCell>{form.subject}</TableCell>
                <TableCell>{form.message}</TableCell>
                <TableCell>{form.status}</TableCell>
                <TableCell>{new Date(form.created_at).toLocaleString()}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => {
                      setSelectedForm(form);
                      setStatus(form.status);
                      setOpenDialog(true);
                    }}
                    sx={{
                      bgcolor: 'white',
                      color: '#2E7D32',
                      border: '2px solid #2E7D32',
                      '&:hover': {
                        bgcolor: '#1B5E20',
                        color: 'white',
                        border: '2px solid #2E7D32',
                      },
                    }}
                  >
                    Update Status
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Update Status</DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Status</InputLabel>
            <Select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              label="Status"
            >
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="in_progress">In Progress</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button 
            onClick={handleStatusChange} 
            variant="contained"
            sx={{
              bgcolor: 'white',
              color: '#2E7D32',
              border: '2px solid #2E7D32',
              '&:hover': {
                bgcolor: '#1B5E20',
                color: 'white',
                border: '2px solid #2E7D32',
              },
            }}
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Admin; 
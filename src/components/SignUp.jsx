import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Grid } from '@mui/material';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign-Up Form Submitted:', formData);

  
    window.location.href = '/'; 
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(145deg,#0056b3,#007bff)', 
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: '2rem',
          borderRadius: '16px',
          width: '400px',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', color: '#333' }}>
          SignUp as Volunteer
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                variant="outlined"
                sx={{
                  backgroundColor: '#f9f9f9',
                  borderRadius: '8px',
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                variant="outlined"
                sx={{
                  backgroundColor: '#f9f9f9',
                  borderRadius: '8px',
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                variant="outlined"
                sx={{
                  backgroundColor: '#f9f9f9',
                  borderRadius: '8px',
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: '#4caf50',
                  color: '#fff',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  '&:hover': {
                    backgroundColor: '#388e3c',
                  },
                }}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
        <Typography variant="body2" sx={{ mt: 2, color: '#555' }}>
          Already have an account?{' '}
          <a href="/login" style={{ color: '#4caf50', textDecoration: 'none', fontWeight: 'bold' }}>
            Login
          </a>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Signup;

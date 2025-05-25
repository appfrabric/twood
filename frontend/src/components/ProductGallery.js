import React from 'react';
import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const ProductGallery = ({ open, onClose, title, images }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: 'rgba(255, 255, 255, 0.98)',
          borderRadius: '12px',
          maxHeight: '90vh',
        },
      }}
    >
      <DialogContent sx={{ p: 0, position: 'relative' }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: '#8B4513',
            zIndex: 1,
            bgcolor: 'rgba(255, 255, 255, 0.9)',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 1)',
            },
          }}
        >
          <CloseIcon />
        </IconButton>
        
        <Typography
          variant="h5"
          sx={{
            p: 3,
            color: '#4A6741',
            fontWeight: 700,
            fontFamily: '"Playfair Display", serif',
            borderBottom: '1px solid rgba(139, 69, 19, 0.1)',
          }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 2,
            p: 3,
            maxHeight: 'calc(90vh - 100px)',
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'rgba(139, 69, 19, 0.1)',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#8B4513',
              borderRadius: '4px',
              '&:hover': {
                background: '#5C2E0C',
              },
            },
          }}
        >
          {images.map((image, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              sx={{
                position: 'relative',
                paddingTop: '75%',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: '0px 8px 16px rgba(74, 103, 65, 0.15)',
                },
              }}
            >
              <Box
                component="img"
                src={image}
                alt={`${title} - Image ${index + 1}`}
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </MotionBox>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ProductGallery; 
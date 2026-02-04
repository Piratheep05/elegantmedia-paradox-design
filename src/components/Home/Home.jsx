import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { motion } from 'framer-motion';
import hero3dImage from '../../assets/hero-3d.png';
import { ALT_TEXT, ARIA_LABELS, SCROLL_BEHAVIOR } from '../../utils/constants';


const Home = () => {
  
  // scroll down function
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: SCROLL_BEHAVIOR.SMOOTH,
    });
  };

  
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const scrollIndicatorVariants = {
    hidden: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: [0, 10, 0],
      transition: {
        opacity: { duration: 0.6, delay: 0.8 },
        y: {
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.4,
        },
      },
    },
  };

  const dotVariants = (delay = 0) => ({
    hidden: { opacity: 0, scale: 0 },
    animate: {
      opacity: 1,
      scale: 1,
      y: [0, -15, 0],
      transition: {
        opacity: { duration: 0.5, delay: delay },
        scale: { duration: 0.5, delay: delay },
        y: {
          duration: 4 + delay,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay + 0.5,
        },
      },
    },
  });

  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.lightGray,
        minHeight: '100vh',
        position: 'relative',
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        overflow: 'hidden',
      }}
    >
      
      <Box
        component={motion.div}
        variants={dotVariants(0)}
        initial="hidden"
        animate="animate"
        sx={{
          position: 'absolute',
          top: '15%',
          right: { xs: '5%', md: '8%' },
          width: { xs: 40, md: 60 },
          height: { xs: 40, md: 60 },
          borderRadius: '50%',
          backgroundColor: (theme) => theme.palette.success.main,
          display: { xs: 'none', sm: 'block' },
        }}
      />
      <Box
        component={motion.div}
        variants={dotVariants(0.5)}
        initial="hidden"
        animate="animate"
        sx={{
          position: 'absolute',
          top: '35%',
          left: { xs: '50%', md: '42%' },
          width: { xs: 16, md: 24 },
          height: { xs: 16, md: 24 },
          borderRadius: '50%',
          backgroundColor: (theme) => theme.palette.primary.main,
          display: { xs: 'none', sm: 'block' },
        }}
      />
      <Box
        component={motion.div}
        variants={dotVariants(1)}
        initial="hidden"
        animate="animate"
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: { xs: '30%', md: '35%' },
          width: { xs: 12, md: 16 },
          height: { xs: 12, md: 16 },
          borderRadius: '50%',
          backgroundColor: (theme) => theme.palette.warning.main,
          display: { xs: 'none', sm: 'block' },
        }}
      />
      <Box
        component={motion.div}
        variants={dotVariants(1.5)}
        initial="hidden"
        animate="animate"
        sx={{
          position: 'absolute',
          bottom: '25%',
          right: { xs: '3%', md: '5%' },
          width: { xs: 14, md: 20 },
          height: { xs: 14, md: 20 },
          borderRadius: '50%',
          backgroundColor: (theme) => theme.palette.background.darkGray,
          display: { xs: 'none', sm: 'block' },
        }}
      />

      
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        sx={{
          position: 'absolute',
          top: '15%',
          right: '15%',
          transform: 'translateY(-50%)',
          width: { xs: '400px', md: '600px', lg: '700px' },
          height: { xs: '400px', md: '600px', lg: '700px' },
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.6)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: { xs: 'auto', md: '70vh' },
            gap: { xs: 6, md: 4 },
          }}
        >
          
          <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: '45%' } }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' },
                lineHeight: 1,
                color: (theme) => theme.palette.text.primary,
                mb: 3,
                letterSpacing: '-0.02em',
              }}
            >
              Paradox
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: (theme) => theme.palette.text.secondary,
                fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.5rem' },
                fontWeight: 400,
                lineHeight: 1.4,
                mb: { xs: 3, md: 4 },
                maxWidth: { xs: '100%', md: 350 },
              }}
            >
              The Real-time & powerful 3D design for web.
            </Typography>

           
            <Box
              sx={{ display: 'flex', gap: { xs: 1.5, md: 2 }, flexWrap: 'wrap' }}
            >
              <Button
                variant="contained"
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  backgroundColor: (theme) => theme.palette.primary.main,
                  color: (theme) => theme.palette.background.default,
                  borderRadius: '50px',
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.25, md: 1.5 },
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: (theme) => theme.palette.primary.dark,
                    boxShadow: 'none',
                  },
                }}
              >
                Launch app
              </Button>
              <Button
                variant="text"
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  borderRadius: '50px',
                  px: { xs: 2.5, md: 3 },
                  py: { xs: 1.25, md: 1.5 },
                  textTransform: 'none',
                  fontWeight: 500,
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.04)',
                  },
                }}
              >
                Learn more
              </Button>
            </Box>
          </Box>

          
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <Box
              component={motion.img}
              variants={imageVariants}
              src={hero3dImage}
              alt={ALT_TEXT.HERO_IMAGE}
              loading="lazy"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              sx={{
                width: '100%',
                maxWidth: { xs: 350, sm: 450, md: 650, lg: 650 },
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Box>
      </Container>

     
      <Box
        component={motion.div}
        variants={scrollIndicatorVariants}
        initial="hidden"
        animate="animate"
        onClick={handleScrollDown}
        role="button"
        tabIndex={0}
        aria-label={ARIA_LABELS.SCROLL_DOWN}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleScrollDown();
          }
        }}
        whileHover={{ scale: 1.1 }}
        sx={{
          position: 'absolute',
          bottom: 40,
          left: { xs: '50%', md: 60 },
          transform: { xs: 'translateX(-50%)', md: 'none' },
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          color: (theme) => theme.palette.text.secondary,
          cursor: 'pointer',
          transition: 'color 0.3s ease',
          '&:hover': {
            color: (theme) => theme.palette.primary.main,
          },
          '&:focus': {
            outline: (theme) => `2px solid ${theme.palette.primary.main}`,
            outlineOffset: 2,
          },
        }}
      >
        <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
        <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
          Scroll down
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;

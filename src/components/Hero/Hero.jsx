import { Box, Typography, Container, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import hero3dImage from '../../assets/hero-3d.png';

const HeroSection = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f7',
        minHeight: '100vh',
        position: 'relative',
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        overflow: 'hidden',
      }}
    >
      {/* Floating Dots */}
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          right: '8%',
          width: 60,
          height: 60,
          borderRadius: '50%',
          backgroundColor: '#22c55e',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '35%',
          left: '42%',
          width: 24,
          height: 24,
          borderRadius: '50%',
          backgroundColor: '#3b82f6',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '35%',
          width: 16,
          height: 16,
          borderRadius: '50%',
          backgroundColor: '#f59e0b',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '25%',
          right: '5%',
          width: 20,
          height: 20,
          borderRadius: '50%',
          backgroundColor: '#e5e7eb',
        }}
      />

      {/* Background Circle */}
      <Box
        sx={{
          position: 'absolute',
          top: '55%',
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
          {/* Left Content */}
          <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: '45%' } }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' },
                lineHeight: 1,
                color: '#1a1a2e',
                mb: 3,
                letterSpacing: '-0.02em',
              }}
            >
              Paradox
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#6b7280',
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                fontWeight: 400,
                lineHeight: 1.4,
                mb: 4,
                maxWidth: 350,
              }}
            >
              The Real-time & powerful 3D design for web.
            </Typography>

            {/* CTA Buttons */}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#3b82f6',
                  color: '#fff',
                  borderRadius: '50px',
                  px: 4,
                  py: 1.5,
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: '#2563eb',
                    boxShadow: 'none',
                  },
                }}
              >
                Launch app
              </Button>
              <Button
                variant="text"
                sx={{
                  color: '#1a1a2e',
                  borderRadius: '50px',
                  px: 3,
                  py: 1.5,
                  textTransform: 'none',
                  fontWeight: 500,
                  fontSize: '1rem',
                  '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.04)',
                  },
                }}
              >
                Learn more
              </Button>
            </Box>
          </Box>

          {/* Right 3D Illustration */}
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
              component="img"
              src={hero3dImage}
              alt="3D Design Tool Illustration"
              sx={{
                width: '100%',
                maxWidth: { xs: 350, sm: 450, md: 550, lg: 650 },
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* Scroll Down Indicator */}
      <Box
        onClick={handleScrollDown}
        sx={{
          position: 'absolute',
          bottom: 40,
          left: { xs: '50%', md: 60 },
          transform: { xs: 'translateX(-50%)', md: 'none' },
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          color: '#6b7280',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': {
            color: '#3b82f6',
            transform: { xs: 'translateX(-50%) translateY(5px)', md: 'translateY(5px)' },
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

export default HeroSection;

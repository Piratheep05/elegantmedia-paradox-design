import { Box, Typography, Container } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import cupImage from '../../assets/cup.png';
const ModelsSection = () => {
  const colorDots = [
    { color: '#3b82f6' }, // blue
    { color: '#a855f7' }, // purple
    { color: '#ec4899' }, // pink
    { color: '#22c55e' }, // green
  ];

  return (
    <Box sx={{ backgroundColor: '#f9fafb', py: 8 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          }}
        >
          {/* Left Side - Gray */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: '#f3f4f6',
              p: { xs: 4, md: 6 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1.75rem', md: '2.25rem' },
                color: '#1a1a2e',
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              Build simple or
              <br />
              complex models.
            </Typography>
            <Typography
              sx={{
                color: '#6b7280',
                fontSize: '1rem',
                mb: 4,
              }}
            >
              Amet minim mollit non deserunt
              <br />
              ullamco est.
            </Typography>

            {/* Watch Tutorial Button */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  backgroundColor: '#3b82f6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
                  },
                }}
              >
                <PlayArrowIcon sx={{ color: '#fff', fontSize: 28 }} />
              </Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: '1rem',
                  color: '#1a1a2e',
                }}
              >
                Watch tutorial
              </Typography>
            </Box>
          </Box>

          {/* Right Side - White with Image */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: '#fff',
              p: { xs: 4, md: 6 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Color Dots Indicator */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: 16, md: 0 },
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                zIndex: 2,
              }}
            >
              {colorDots.map((dot, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    backgroundColor: dot.color,
                    border: index === 0 ? '2px solid #fff' : 'none',
                    boxShadow: index === 0 ? '0 0 0 2px #3b82f6' : 'none',
                  }}
                />
              ))}
            </Box>

            {/* 3D Cup Image with Circular Background */}
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Outer Circle Ring */}
              <Box
                sx={{
                  position: 'absolute',
                  width: { xs: 280, md: 360 },
                  height: { xs: 280, md: 360 },
                  borderRadius: '50%',
                  background: 'linear-gradient(180deg, rgba(229,231,235,0.8) 0%, rgba(249,250,251,0.3) 100%)',
                  boxShadow: 'inset 0 2px 20px rgba(0,0,0,0.03), 0 4px 20px rgba(0,0,0,0.02)',
                }}
              />
              
              {/* Inner Circle */}
              <Box
                sx={{
                  position: 'absolute',
                  width: { xs: 220, md: 280 },
                  height: { xs: 220, md: 280 },
                  borderRadius: '50%',
                  backgroundColor: '#fff',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                }}
              />

              {/* Cup Image */}
              <Box
                component="img"
                src={cupImage}
                alt="3D Cup Model"
                sx={{
                  position: 'relative',
                  width: { xs: 280, md: 380 },
                  height: 'auto',
                  zIndex: 1,
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ModelsSection;

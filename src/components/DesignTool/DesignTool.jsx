import { Box, Typography, Container } from '@mui/material';
import designToolImage from '../../assets/design-tool.jpg';

const DesignTool = () => {
  return (
    <Box sx={{ backgroundColor: '#fff', py: { xs: 6, md: 10 }, position: 'relative', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        {/* Headline */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '1.75rem', md: '2.5rem' },
            textAlign: 'center',
            color: '#1a1a2e',
            lineHeight: 1.3,
            mb: { xs: 4, md: 6 },
          }}
        >
          Delightfully simple
          <br />
          & powerful 3D design tool
        </Typography>

        {/* Main Content Area with Decorations */}
        <Box
          sx={{
            position: 'relative',
            maxWidth: 900,
            mx: 'auto',
          }}
        >
          {/* Background Colored Rectangles */}
          {/* Light Blue Rectangle - Left Bottom */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: -20, md: -40 },
              bottom: { xs: -30, md: -50 },
              width: { xs: 200, md: 300 },
              height: { xs: 150, md: 220 },
              backgroundColor: '#bfdbfe',
              borderRadius: '16px',
              zIndex: 0,
            }}
          />

          {/* Dark Blue Rectangle - Right Bottom */}
          <Box
            sx={{
              position: 'absolute',
              right: { xs: -20, md: -40 },
              bottom: { xs: -40, md: -60 },
              width: { xs: 180, md: 280 },
              height: { xs: 120, md: 180 },
              backgroundColor: '#2563eb',
              borderRadius: '16px',
              zIndex: 0,
            }}
          />

          {/* Decorative Dots */}
          {/* Black Dot - Left */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: -10, md: -30 },
              top: '30%',
              width: { xs: 40, md: 60 },
              height: { xs: 40, md: 60 },
              borderRadius: '50%',
              backgroundColor: '#1a1a2e',
              zIndex: 2,
            }}
          />

          {/* Yellow Dot - Left Bottom */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 30, md: 60 },
              bottom: { xs: 40, md: 80 },
              width: { xs: 16, md: 24 },
              height: { xs: 16, md: 24 },
              borderRadius: '50%',
              backgroundColor: '#fbbf24',
              zIndex: 3,
            }}
          />

          {/* Blue Dot - Right Top */}
          <Box
            sx={{
              position: 'absolute',
              right: { xs: -10, md: -20 },
              top: '25%',
              width: { xs: 16, md: 24 },
              height: { xs: 16, md: 24 },
              borderRadius: '50%',
              backgroundColor: '#3b82f6',
              zIndex: 2,
            }}
          />

          {/* Green Dot - Right Bottom */}
          <Box
            sx={{
              position: 'absolute',
              right: { xs: 20, md: 40 },
              bottom: { xs: 20, md: 40 },
              width: { xs: 20, md: 32 },
              height: { xs: 20, md: 32 },
              borderRadius: '50%',
              backgroundColor: '#22c55e',
              zIndex: 3,
            }}
          />

          {/* Dark Mockup Window */}
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              backgroundColor: '#2d2d3a',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
            }}
          >
            {/* Window Header */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 3,
                py: 1.5,
                backgroundColor: '#3d3d4a',
              }}
            >
              {/* Window Controls */}
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ff5f57' }} />
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#28c840' }} />
              
              {/* Address Bar */}
              <Box
                sx={{
                  ml: 2,
                  flex: 1,
                  maxWidth: 200,
                  height: 24,
                  backgroundColor: '#4d4d5a',
                  borderRadius: '6px',
                }}
              />
            </Box>

            {/* Window Content - Split View */}
            <Box sx={{ display: 'flex' }}>
              {/* Left Sidebar */}
              <Box
                sx={{
                  width: { xs: 60, md: 80 },
                  backgroundColor: '#3d3d4a',
                  minHeight: { xs: 200, md: 300 },
                }}
              />

              {/* Main Content - 3D Image */}
              <Box
                sx={{
                  flex: 1,
                  backgroundColor: '#2d2d3a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: { xs: 2, md: 4 },
                }}
              >
                <Box
                  component="img"
                  src={designToolImage}
                  alt="3D Design Tool Interface"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: { xs: 250, md: 400 },
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default DesignTool;

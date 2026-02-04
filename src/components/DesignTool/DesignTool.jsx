import { Box, Typography, Container } from '@mui/material';
import designToolImage from '../../assets/design-tool.jpg';
import { motion } from 'framer-motion';

const DesignTool = () => {
  

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
    <Box sx={{ backgroundColor: (theme) => theme.palette.background.default, py: { xs: 6, md: 10 }, position: 'relative', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '1.75rem', md: '2.5rem' },
            textAlign: 'center',
            color: (theme) => theme.palette.text.primary,
            lineHeight: 1.3,
            mb: { xs: 4, md: 6 },
          }}
        >
          Delightfully simple
          <br />
          & powerful 3D design tool
        </Typography>

        <Box
          sx={{
            position: 'relative',
            maxWidth: 900,
            mx: 'auto',
          }}
        >
        
          <Box
            sx={{
              position: 'absolute',
              left: { xs: -10, sm: -20, md: -40 },
              bottom: { xs: -20, sm: -30, md: -50 },
              width: { xs: 150, sm: 200, md: 300 },
              height: { xs: 100, sm: 150, md: 220 },
              backgroundColor: (theme) => theme.palette.custom.blue.light,
              borderRadius: '16px',
              zIndex: 0,
              display: { xs: 'none', sm: 'block' },
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              right: { xs: -10, sm: -20, md: -40 },
              bottom: { xs: -30, sm: -40, md: -60 },
              width: { xs: 130, sm: 180, md: 280 },
              height: { xs: 90, sm: 120, md: 180 },
              backgroundColor: (theme) => theme.palette.primary.dark,
              borderRadius: '16px',
              zIndex: 0,
              display: { xs: 'none', sm: 'block' },
            }}
          />

          
          <Box

           
            sx={{
              position: 'absolute',
              left: { xs: -5, sm: -10, md: -30 },
              top: '30%',
              width: { xs: 30, sm: 40, md: 60 },
              height: { xs: 30, sm: 40, md: 60 },
              borderRadius: '50%',
              backgroundColor: (theme) => theme.palette.text.primary,
              zIndex: 2,
              display: { xs: 'none', sm: 'block' },
            }}
          />

          <Box
           component={motion.div}
           variants={dotVariants(0)}
           initial="hidden"
           animate="animate"
            sx={{
              position: 'absolute',
              left: { xs: 20, sm: 30, md: 60 },
              bottom: { xs: 30, sm: 40, md: 80 },
              width: { xs: 12, sm: 16, md: 24 },
              height: { xs: 12, sm: 16, md: 24 },
              borderRadius: '50%',
              backgroundColor: (theme) => theme.palette.warning.light,
              zIndex: 3,
              display: { xs: 'none', sm: 'block' },
            }}
          />

          <Box
           component={motion.div}
           variants={dotVariants(0)}
           initial="hidden"
           animate="animate"
            sx={{
              position: 'absolute',
              right: { xs: -5, sm: -10, md: -20 },
              top: '25%',
              width: { xs: 12, sm: 16, md: 24 },
              height: { xs: 12, sm: 16, md: 24 },
              borderRadius: '50%',
              backgroundColor: (theme) => theme.palette.primary.main,
              zIndex: 2,
              display: { xs: 'none', sm: 'block' },
            }}
          />

          <Box
           component={motion.div}
           variants={dotVariants(0)}
           initial="hidden"
           animate="animate"
            sx={{
              position: 'absolute',
              right: { xs: 15, sm: 20, md: 40 },
              bottom: { xs: 15, sm: 20, md: 40 },
              width: { xs: 16, sm: 20, md: 32 },
              height: { xs: 16, sm: 20, md: 32 },
              borderRadius: '50%',
              backgroundColor: (theme) => theme.palette.success.main,
              zIndex: 3,
              display: { xs: 'none', sm: 'block' },
            }}
          />

        
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

            <Box sx={{ display: 'flex' }}>
              
              <Box
                sx={{
                  width: { xs: 60, md: 80 },
                  backgroundColor: '#3d3d4a',
                  minHeight: { xs: 200, md: 300 },
                }}
              />

             
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

import { Box, Typography, Container } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import cupImage from '../../assets/cup.png';
import { colorDots } from '../../utils/data';

const ModelsSection = () => {

  return (
    <Box sx={{ backgroundColor: (theme) => theme.palette.background.paper, py: 8 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            borderRadius: { xs: '16px', md: '24px' },
            overflow: 'hidden',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          }}
        >
         
          <Box
            sx={{
              flex: 1,
              backgroundColor: (theme) => theme.palette.background.gray,
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
                color: (theme) => theme.palette.text.primary,
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
                color: (theme) => theme.palette.text.secondary,
                fontSize: '1rem',
                mb: 4,
              }}
            >
              Amet minim mollit non deserunt
              <br />
              ullamco est.
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, md: 2 } }}>
              <Box
                sx={{
                  width: { xs: 48, md: 56 },
                  height: { xs: 48, md: 56 },
                  borderRadius: '50%',
                  backgroundColor: (theme) => theme.palette.primary.main,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: (theme) => `0 4px 12px ${theme.palette.primary.main}66`,
                  },
                }}
              >
                <PlayArrowIcon sx={{ color: (theme) => theme.palette.background.default, fontSize: { xs: 24, md: 28 } }} />
              </Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  color: (theme) => theme.palette.text.primary,
                }}
              >
                Watch tutorial
              </Typography>
            </Box>
          </Box>

        
          <Box
            sx={{
              flex: 1,
              backgroundColor: (theme) => theme.palette.background.default,
              p: { xs: 4, md: 6 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
           
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
                    border: index === 0 ? (theme) => `2px solid ${theme.palette.background.default}` : 'none',
                    boxShadow: index === 0 ? (theme) => `0 0 0 2px ${theme.palette.primary.main}` : 'none',
                  }}
                />
              ))}
            </Box>

            
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
             
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
             
              <Box
                sx={{
                  position: 'absolute',
                  width: { xs: 220, md: 280 },
                  height: { xs: 220, md: 280 },
                  borderRadius: '50%',
                  backgroundColor: (theme) => theme.palette.background.default,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                }}
              />

             
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

import { Box, Container, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        py: 2,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  backgroundColor: 'rgba(255,255,255,0.3)',
                  borderRadius: '4px',
                  position: 'absolute',
                  top: 6,
                  left: 6,
                }}
              />
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  backgroundColor: '#fff',
                  borderRadius: '4px',
                  position: 'absolute',
                  bottom: 8,
                  right: 8,
                }}
              />
            </Box>
          </Box>

          {/* Right Side */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button
              variant="outlined"
              sx={{
                borderRadius: '50px',
                px: 3,
                py: 1,
                textTransform: 'none',
                fontWeight: 500,
                borderColor: '#e5e7eb',
                color: '#1a1a2e',
                '&:hover': {
                  borderColor: '#d1d5db',
                  backgroundColor: 'transparent',
                },
              }}
            >
              Sign in
            </Button>
            <IconButton
              sx={{
                color: '#1a1a2e',
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;

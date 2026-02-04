import React from 'react';
import { Box, Container, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ARIA_LABELS } from '../../utils/constants';

const Header = () => {
  
  return (
    <Box
      component="header"
      sx={{
        py: { xs: 1.5, md: 2 },
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
         
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: { xs: 36, md: 40 },
                height: { xs: 36, md: 40 },
                background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
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
                  width: { xs: 18, md: 20 },
                  height: { xs: 18, md: 20 },
                  backgroundColor: 'rgba(255,255,255,0.3)',
                  borderRadius: '4px',
                  position: 'absolute',
                  top: 6,
                  left: 6,
                }}
              />
              <Box
                sx={{
                  width: { xs: 14, md: 16 },
                  height: { xs: 14, md: 16 },
                  backgroundColor: (theme) => theme.palette.background.default,
                  borderRadius: '4px',
                  position: 'absolute',
                  bottom: 8,
                  right: 8,
                }}
              />
            </Box>
          </Box>

          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 2 } }}>
            <Button
              variant="outlined"
              aria-label={ARIA_LABELS.SIGN_IN}
              sx={{
                borderRadius: '50px',
                px: { xs: 2, md: 3 },
                py: { xs: 0.75, md: 1 },
                textTransform: 'none',
                fontWeight: 500,
                fontSize: { xs: '0.875rem', md: '1rem' },
                borderColor: (theme) => theme.palette.background.darkGray,
                color: (theme) => theme.palette.text.primary,
                display: { xs: 'none', sm: 'inline-flex' },
                '&:hover': {
                  borderColor: (theme) => theme.palette.grey[300],
                  backgroundColor: 'transparent',
                },
              }}
            >
              Sign in
            </Button>
            <IconButton
              aria-label={ARIA_LABELS.MENU_BUTTON}
              sx={{
                color: (theme) => theme.palette.text.primary,
                padding: { xs: 0.75, md: 1 },
              }}
            >
              <MenuIcon sx={{ fontSize: { xs: 24, md: 28 } }} />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;

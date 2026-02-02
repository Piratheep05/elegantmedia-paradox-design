import React from 'react';
import { Box, Typography, Container, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import phone3D from '../../assets/phone-3d.png';

// Integration item icons
const FramerIcon = () => (
  <Box
    sx={{
      width: 40,
      height: 40,
      borderRadius: '8px',
      backgroundColor: '#8b5cf6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontWeight: 700,
      fontSize: '1rem',
    }}
  >
    F
  </Box>
);

const WebflowIcon = () => (
  <Box
    sx={{
      width: 40,
      height: 40,
      borderRadius: '8px',
      backgroundColor: '#0ea5e9',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontWeight: 700,
      fontSize: '0.75rem',
    }}
  >
    W
  </Box>
);

const RobotIcon = () => (
  <Box
    sx={{
      width: 40,
      height: 40,
      borderRadius: '8px',
      backgroundColor: '#22c55e',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontWeight: 700,
      fontSize: '0.75rem',
    }}
  >
    R
  </Box>
);

const integrations = [
  { name: 'Framer', icon: <FramerIcon /> },
  { name: 'Webflow', icon: <WebflowIcon /> },
  { name: 'Robot', icon: <RobotIcon /> },
];

const Integrations = () => {
  
    return (
      <Box
        sx={{
          backgroundColor: '#f9fafb',
          py: { xs: 8, md: 12 },
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: { xs: 6, md: 8 },
            }}
          >
            {/* Left Side - 3D Phone Image with decorative elements */}
            <Box
              sx={{
                flex: 1,
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: { xs: 350, md: 450 },
              }}
            >
              {/* Decorative ring outline */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '5%',
                  left: '15%',
                  width: { xs: 200, md: 280 },
                  height: { xs: 220, md: 300 },
                  borderRadius: '50%',
                  transform: 'rotate(-15deg)',
                  background:
                    'linear-gradient(180deg, #3b82f6 0%, #06b6d4 100%)',
                  padding: '2px',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: '2px',
                    borderRadius: '50%',
                    backgroundColor: '#f9fafb',
                  },
                }}
              />
  
              <Box
                component="img"
                src={phone3D}
                alt="3D Phone Design"
                sx={{
                  width: { xs: '280px', md: '380px' },
                  height: 'auto',
                  position: 'relative',
                  zIndex: 1,
                }}
              />
            </Box>
  
            {/* Right Side - Content */}
            <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                  fontWeight: 700,
                  lineHeight: 1.1,
                  mb: 2,
                }}
              >
                Integrate your
                <br />
                3D designs
              </Typography>
  
              <Typography sx={{ color: '#9ca3af', mb: 5 }}>
                Without any effort, save a ton of time.
              </Typography>
  
              <List sx={{ p: 0 }}>
                {integrations.map((integration, index) => (
                  <ListItem
                    key={integration.name}
                    sx={{
                      px: 0,
                      py: 1.5,
                      borderTop:
                        index === 0 ? '1px solid #e5e7eb' : 'none',
                      borderBottom: '1px solid #e5e7eb',
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 56 }}>
                      {integration.icon}
                    </ListItemIcon>
                    <ListItemText primary={integration.name} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Container>
      </Box>
    );
  
  
};

export default Integrations;


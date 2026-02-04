import React from 'react';
import { Box, Typography, Container, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import phone3D from '../../assets/phone-3d.png';
import { integrationsData } from '../../utils/data';

// Integration item icon component
const IntegrationIcon = ({ config }) => (
  <Box
    sx={{
      width: 40,
      height: 40,
      borderRadius: '8px',
      backgroundColor: config.backgroundColor,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontWeight: 700,
      fontSize: config.fontSize,
    }}
  >
    {config.letter}
  </Box>
);

const Integrations = () => {
  
    return (
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.background.paper,
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
              
              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: '10%', md: '5%' },
                  left: { xs: '10%', md: '15%' },
                  width: { xs: 180, sm: 200, md: 280 },
                  height: { xs: 200, sm: 220, md: 300 },
                  borderRadius: '50%',
                  transform: 'rotate(-15deg)',
                  background: (theme) => `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.info.main} 100%)`,
                  padding: '2px',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: '2px',
                    borderRadius: '50%',
                    backgroundColor: (theme) => theme.palette.background.paper,
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
  
              <Typography sx={{ color: (theme) => theme.palette.text.disabled, mb: { xs: 4, md: 5 }, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                Without any effort, save a ton of time.
              </Typography>

              <List sx={{ p: 0 }}>
                {integrationsData.map((integration, index) => (
                  <ListItem
                    key={integration.name}
                    sx={{
                      px: 0,
                      py: 1.5,
                      borderTop:
                        index === 0 ? (theme) => `1px solid ${theme.palette.background.darkGray}` : 'none',
                      borderBottom: (theme) => `1px solid ${theme.palette.background.darkGray}`,
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 56 }}>
                      <IntegrationIcon config={integration.iconConfig} />
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


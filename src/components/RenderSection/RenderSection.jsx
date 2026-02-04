import { useState } from 'react';
import { Box, Typography, Container, Button, Tabs, Tab } from '@mui/material';
import { renderTabs, renderTabContent } from '../../utils/data';
import { motion } from 'framer-motion';



const TabPanel = ({ children, value, index }) => (
  <Box role="tabpanel" hidden={value !== index} sx={{ mt: 8 }}>
    {value === index && children}
  </Box>
);


const RenderRing = () => (
  <Box
    sx={{
      position: 'relative',
      width: { xs: 220, sm: 260, md: 300 },
      height: { xs: 220, sm: 260, md: 300 },
    }}
  >
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        borderRadius: '50%',
        background: (theme) => `linear-gradient(180deg, ${theme.palette.custom.blue.light} 0%, ${theme.palette.custom.blue.light} 50%, ${theme.palette.custom.blue.light} 100%)`,
        p: '20px',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          backgroundColor: (theme) => theme.palette.background.default,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'inset 0 4px 20px rgba(0,0,0,0.05)',
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
            fontWeight: 700,
            color: (theme) => theme.palette.text.primary,
            lineHeight: 1,
          }}
        >
          Render
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '0.9rem', sm: '1rem' },
            color: (theme) => theme.palette.text.disabled,
            fontWeight: 400,
            mt: 0.5,
          }}
        >
          Response
        </Typography>
      </Box>
    </Box>

    <Box
      sx={{
        position: 'absolute',
        top: '35%',
        right: '-4px',
        width: 20,
        height: 20,
        borderRadius: '50%',
        backgroundColor: (theme) => theme.palette.primary.main,
        border: (theme) => `3px solid ${theme.palette.background.default}`,
        boxShadow: (theme) => `0 2px 8px ${theme.palette.primary.main}66`,
      }}
    />
  </Box>
);

// Main Component

const RenderSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ backgroundColor: (theme) => theme.palette.background.paper, py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 4, md: 6 }, overflowX: 'auto', px: { xs: 1, md: 0 } }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              backgroundColor: (theme) => theme.palette.background.gray,
              borderRadius: '50px',
              p: 0.5,
              minHeight: { xs: 44, md: 48 },
              '& .MuiTabs-indicator': { display: 'none' },
              '& .MuiTabs-flexContainer': { gap: 0.5 },
            }}
          >
            {renderTabs.map((label) => (
              <Tab
                key={label}
                label={label}
                sx={{
                  textTransform: 'none',
                  fontWeight: 500,
                  fontSize: { xs: '0.875rem', md: '0.95rem' },
                  color: (theme) => theme.palette.text.secondary,
                  borderRadius: '50px',
                  px: { xs: 2, md: 3 },
                  py: { xs: 0.75, md: 1 },
                  minHeight: { xs: 36, md: 40 },
                  '&.Mui-selected': {
                    backgroundColor: (theme) => theme.palette.background.default,
                    color: (theme) => theme.palette.text.primary,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  },
                }}
              />
            ))}
          </Tabs>
        </Box>

        
        {renderTabContent.map((content, index) => (
          <TabPanel key={index} value={activeTab} index={index}>
            <ShowcaseContent stat={content.stat} text={content.text} />
          </TabPanel>
        ))}
      </Container>
    </Box>
  );
};

// Reusable Content Block 
const ShowcaseContent = ({ stat, text }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: { xs: 6, md: 2 },
    }}
  >
    <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
      <Typography
        sx={{
          fontSize: { xs: '5rem', sm: '6rem', md: '8rem' },
          fontWeight: 700,
          color: (theme) => theme.palette.text.primary,
          lineHeight: 0.85,
          mb: 3,
        }}
      >
        {stat}
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
          fontWeight: 500,
          color: (theme) => theme.palette.secondary.light,
          maxWidth: 400,
          mb: 4,
          mx: { xs: 'auto', md: 0 },
        }}
      >
        {text}
      </Typography>

      <Button
        variant="contained"
        component={motion.button}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          textTransform: 'none',
          fontWeight: 600,
          px: { xs: 3, md: 4 },
          py: { xs: 1.25, md: 1.5 },
          borderRadius: '12px',
          fontSize: { xs: '0.875rem', md: '1rem' },
          '&:hover': { backgroundColor: (theme) => theme.palette.primary.dark },
        }}
      >
        Launch a demo
      </Button>
    </Box>

    <Box sx={{ flex: 1, display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
      <RenderRing />
    </Box>
  </Box>
);

export default RenderSection;

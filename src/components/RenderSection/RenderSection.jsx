import { useState } from 'react';
import { Box, Typography, Container, Button, Tabs, Tab } from '@mui/material';

/* ---------------- Tab Panel ---------------- */

const TabPanel = ({ children, value, index }) => (
  <Box role="tabpanel" hidden={value !== index} sx={{ mt: 8 }}>
    {value === index && children}
  </Box>
);

/* ---------------- Ring Graphic ---------------- */

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
        background: 'linear-gradient(180deg, #bae6fd 0%, #e0f2fe 50%, #bae6fd 100%)',
        p: '20px',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          backgroundColor: '#fff',
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
            color: '#1a1a2e',
            lineHeight: 1,
          }}
        >
          Render
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '0.9rem', sm: '1rem' },
            color: '#9ca3af',
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
        backgroundColor: '#3b82f6',
        border: '3px solid #fff',
        boxShadow: '0 2px 8px rgba(59, 130, 246, 0.4)',
      }}
    />
  </Box>
);

/* ---------------- Main Component ---------------- */

const RenderSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_, newValue) => {
    setActiveTab(newValue);
  };

  const tabs = ['Render faster', 'Realistic materials', 'Live interaction'];

  return (
    <Box sx={{ backgroundColor: '#f9fafb', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Tabs */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            sx={{
              backgroundColor: '#f3f4f6',
              borderRadius: '50px',
              p: 0.5,
              minHeight: 48,
              '& .MuiTabs-indicator': { display: 'none' },
              '& .MuiTabs-flexContainer': { gap: 0.5 },
            }}
          >
            {tabs.map((label) => (
              <Tab
                key={label}
                label={label}
                sx={{
                  textTransform: 'none',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  color: '#6b7280',
                  borderRadius: '50px',
                  px: 3,
                  py: 1,
                  minHeight: 40,
                  '&.Mui-selected': {
                    backgroundColor: '#fff',
                    color: '#1a1a2e',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  },
                }}
              />
            ))}
          </Tabs>
        </Box>

        {/* -------- Tab 1 -------- */}
        <TabPanel value={activeTab} index={0}>
          <ShowcaseContent
            stat="8x"
            text="Faster live render than other 3D design app for web."
          />
        </TabPanel>

        {/* -------- Tab 2 -------- */}
        <TabPanel value={activeTab} index={1}>
          <ShowcaseContent
            stat="4K"
            text="High-fidelity materials with realistic textures and lighting."
          />
        </TabPanel>

        {/* -------- Tab 3 -------- */}
        <TabPanel value={activeTab} index={2}>
          <ShowcaseContent
            stat="60"
            text="FPS smooth interaction for seamless design experience."
          />
        </TabPanel>
      </Container>
    </Box>
  );
};

/* ---------------- Reusable Content Block ---------------- */

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
          color: '#1a1a2e',
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
          color: '#374151',
          maxWidth: 400,
          mb: 4,
          mx: { xs: 'auto', md: 0 },
        }}
      >
        {text}
      </Typography>

      <Button
        variant="contained"
        sx={{
          backgroundColor: '#3b82f6',
          textTransform: 'none',
          fontWeight: 600,
          px: 4,
          py: 1.5,
          borderRadius: '12px',
          '&:hover': { backgroundColor: '#2563eb' },
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

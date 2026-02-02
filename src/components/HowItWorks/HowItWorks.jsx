import { Box, Typography, Container, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import MouseIcon from '@mui/icons-material/Mouse';
import BoltIcon from '@mui/icons-material/Bolt';

function FeatureItem({ title, description, icon, bgColor, iconColor }) {
  return (
    <ListItem
      sx={{
        py: 3,
        px: 0,
        borderBottom: '1px solid #e5e7eb',
        '&:last-child': {
          borderBottom: 'none',
        },
      }}
    >
      <ListItemText
        primary={title}
        secondary={description}
        primaryTypographyProps={{
          fontWeight: 600,
          fontSize: '1.1rem',
          color: '#1a1a2e',
          mb: 0.5,
        }}
        secondaryTypographyProps={{
          fontSize: '0.9rem',
          color: '#6b7280',
        }}
      />
      <ListItemIcon sx={{ minWidth: 'auto' }}>
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: '16px',
            backgroundColor: bgColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ color: iconColor, display: 'flex' }}>
            {icon}
          </Box>
        </Box>
      </ListItemIcon>
    </ListItem>
  );
}

export default function HowItWorks() {
  const features = [
    {
      title: 'Shared materials',
      description: 'Create, enable and use across your team',
      icon: <ToggleOnIcon sx={{ fontSize: 28 }} />,
      bgColor: '#ddd6fe',
      iconColor: '#7c3aed',
    },
    {
      title: 'Live interaction',
      description: 'Create, enable and use across your team',
      icon: <MouseIcon sx={{ fontSize: 28 }} />,
      bgColor: '#a5f3fc',
      iconColor: '#0891b2',
    },
    {
      title: 'Realtime collaboration',
      description: 'Create, enable and use across your team',
      icon: <BoltIcon sx={{ fontSize: 28 }} />,
      bgColor: '#bbf7d0',
      iconColor: '#16a34a',
    },
  ];

  return (
    <Box sx={{ backgroundColor: '#f9fafb', py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            mb: 6,
            color: '#1a1a2e',
            fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
          }}
        >
          Discover how it work
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          }}
        >
          {/* Left Side */}
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
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1.75rem', md: '2.25rem' },
                color: '#1a1a2e',
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              Set up your
              <br />
              perfect scene.
            </Typography>

            <Typography sx={{ color: '#6b7280', mb: 4 }}>
              Amet minim mollit non deserunt ullamco est.
            </Typography>

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
                  transition: '0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 12px rgba(59,130,246,0.4)',
                  },
                }}
              >
                <PlayArrowIcon sx={{ color: '#fff', fontSize: 28 }} />
              </Box>
              <Typography sx={{ fontWeight: 600 }}>
                Watch tutorial
              </Typography>
            </Box>
          </Box>

          {/* Right Side */}
          <Box sx={{ flex: 1, backgroundColor: '#fff', p: { xs: 4, md: 6 } }}>
            <List disablePadding>
              {features.map((feature, index) => (
                <FeatureItem key={index} {...feature} />
              ))}
            </List>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

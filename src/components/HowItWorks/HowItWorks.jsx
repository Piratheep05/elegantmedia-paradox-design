import { Box, Typography, Container, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import MouseIcon from '@mui/icons-material/Mouse';
import BoltIcon from '@mui/icons-material/Bolt';
import { howItWorksFeatures } from '../../utils/data';

function FeatureItem({ title, description, icon, bgColor, iconColor }) {
  return (
    <ListItem
      sx={{
        py: 3,
        px: 0,
        borderBottom: (theme) => `1px solid ${theme.palette.background.darkGray}`,
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
          color: (theme) => theme.palette.text.primary,
          mb: 0.5,
        }}
        secondaryTypographyProps={{
          fontSize: '0.9rem',
          color: (theme) => theme.palette.text.secondary,
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

// Icon mapping for features
const iconMap = {
  ToggleOn: ToggleOnIcon,
  Mouse: MouseIcon,
  Bolt: BoltIcon,
};

export default function HowItWorks() {

  return (
    <Box sx={{ backgroundColor: (theme) => theme.palette.background.paper, py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            mb: 6,
            color: (theme) => theme.palette.text.primary,
            fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
          }}
        >
          Discover how it work
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            borderRadius: { xs: '16px', md: '24px' },
            overflow: 'hidden',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          }}
        >
          {/* Left Side */}
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
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1.75rem', md: '2.25rem' },
                color: (theme) => theme.palette.text.primary,
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              Set up your
              <br />
              perfect scene.
            </Typography>

            <Typography sx={{ color: (theme) => theme.palette.text.secondary, mb: 4 }}>
              Amet minim mollit non deserunt ullamco est.
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
                  transition: '0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: (theme) => `0 4px 12px ${theme.palette.primary.main}66`,
                  },
                }}
              >
                <PlayArrowIcon sx={{ color: (theme) => theme.palette.background.default, fontSize: { xs: 24, md: 28 } }} />
              </Box>
              <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                Watch tutorial
              </Typography>
            </Box>
          </Box>

          {/* Right Side */}
          <Box sx={{ flex: 1, backgroundColor: (theme) => theme.palette.background.default, p: { xs: 4, md: 6 } }}>
            <List disablePadding>
              {howItWorksFeatures.map((feature, index) => {
                const IconComponent = iconMap[feature.iconName];
                return (
                  <FeatureItem
                    key={index}
                    title={feature.title}
                    description={feature.description}
                    icon={<IconComponent sx={{ fontSize: 28 }} />}
                    bgColor={feature.bgColor}
                    iconColor={feature.iconColor}
                  />
                );
              })}
            </List>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

import { Box, Typography, Container, Grid, Chip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

/* ---------------- Feature Card ---------------- */

const FeatureCard = ({ title, description, bgColor, badge, children }) => (
  <Box>
    <Box
      sx={{
        backgroundColor: bgColor,
        borderRadius: '15px',
        height: 280,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        p: 3,
        mb: 2.5,
      }}
    >
      {badge && (
        <Chip
          label={badge}
          size="small"
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            backgroundColor: '#1a1a2e',
            color: '#fff',
            fontSize: '0.7rem',
            fontWeight: 600,
            height: 24,
          }}
        />
      )}
      {children}
    </Box>

    <Typography
      variant="h6"
      sx={{
        fontWeight: 600,
        fontSize: '1.1rem',
        mb: 0.5,
        color: '#1a1a2e',
        textAlign: 'left',
      }}
    >
      {title}
    </Typography>

    <Typography
      variant="body2"
      sx={{
        color: '#6b7280',
        fontSize: '0.9rem',
        textAlign: 'left',
      }}
    >
      {description}
    </Typography>
  </Box>
);

/* ---------------- Decor: 3D Team Assets ---------------- */

const TeamAssetsDecor = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: '40px',
      pl: 0.5,
      pr: 0.5,
      py: 0.5,
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative', width: 80, height: 40 }}>
      {[ 
        { left: 0, bg: 'linear-gradient(135deg, #c4b5fd 0%, #ddd6fe 100%)', color: '#7c3aed' },
        { left: 20, bg: 'linear-gradient(135deg, #a5f3fc 0%, #cffafe 100%)', color: '#0891b2' },
        { left: 40, bg: 'linear-gradient(135deg, #7dd3fc 0%, #bae6fd 100%)', color: '#0284c7' },
      ].map((item, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            left: item.left,
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: item.bg,
            border: '2px solid #fff',
            zIndex: 3 - i,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            component="svg"
            sx={{ width: 18, height: 18, color: item.color }}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </Box>
        </Box>
      ))}
    </Box>

    <Box
      sx={{
        width: 36,
        height: 36,
        borderRadius: '50%',
        backgroundColor: '#3b82f6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ml: -0.5,
        zIndex: 4,
      }}
    >
      <AddIcon sx={{ color: '#fff', fontSize: 20 }} />
    </Box>
  </Box>
);

/* ---------------- Decor: Shared Materials ---------------- */

const SharedMaterialsDecor = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: '40px',
      px: 1.5,
      py: 1,
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      minWidth: 140,
    }}
  >
    <Box
      sx={{
        width: 28,
        height: 28,
        borderRadius: '50%',
        backgroundColor: '#3b82f6',
        flexShrink: 0,
      }}
    />
    <Box sx={{ flex: 1 }} />
  </Box>
);

/* ---------------- Decor: Live Share ---------------- */

const LiveShareDecor = () => (
  <Box
    sx={{
      backgroundColor: '#fff',
      borderRadius: '40px',
      px: 4,
      py: 1.5,
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    }}
  >
    <Typography sx={{ fontSize: '1.1rem', fontWeight: 600, color: '#10b981' }}>
      Share
    </Typography>
  </Box>
);

/* ---------------- Main Component ---------------- */

const Features = () => {
  const features = [
    {
      title: '3D team assets',
      description: 'Make your design more attractive',
      bgColor: '#ddd6fe',
      badge: 'NEW',
      decor: <TeamAssetsDecor />,
    },
    {
      title: 'Shared materials',
      description: 'Create, enable and use across your team',
      bgColor: '#bae6fd',
      decor: <SharedMaterialsDecor />,
    },
    {
      title: 'Live share',
      description: 'Make your design more attractive',
      bgColor: '#cde8bf',
      decor: <LiveShareDecor />,
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#f9fafb',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            textAlign: 'left',
            fontWeight: 700,
            mb: 6,
            color: '#1a1a2e',
            fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
          }}
        >
          The 3D generation is here.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <FeatureCard {...feature}>
                {feature.decor}
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;

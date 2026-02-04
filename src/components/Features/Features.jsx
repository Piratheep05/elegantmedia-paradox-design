import { Box, Typography, Container, Grid, Chip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { featuresData } from '../../utils/data';


const FeatureCard = ({ title, description, bgColor, badge, children }) => (
  <Box>
    <Box
      sx={{
        backgroundColor: bgColor,
        borderRadius: '15px',
        height: { xs: 240, sm: 260, md: 280 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        p: { xs: 2, md: 3 },
        mb: { xs: 2, md: 2.5 },
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
            backgroundColor: (theme) => theme.palette.text.primary,
            color: (theme) => theme.palette.background.default,
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
        fontSize: { xs: '1rem', md: '1.1rem' },
        mb: 0.5,
        color: (theme) => theme.palette.text.primary,
        textAlign: 'left',
      }}
    >
      {title}
    </Typography>

    <Typography
      variant="body2"
      sx={{
        color: (theme) => theme.palette.text.secondary,
        fontSize: { xs: '0.875rem', md: '0.9rem' },
        textAlign: 'left',
      }}
    >
      {description}
    </Typography>
  </Box>
);


const TeamAssetsDecor = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: (theme) => theme.palette.background.default,
      borderRadius: '40px',
      pl: 0.5,
      pr: 0.5,
      py: 0.5,
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative', width: 80, height: 40 }}>
      {[ 
        { left: 0, purple: true },
        { left: 20, cyan: true },
        { left: 40, blue: true },
      ].map((item, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            left: item.left,
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: (theme) => item.purple 
              ? `linear-gradient(135deg, ${theme.palette.custom.purple.main} 0%, ${theme.palette.custom.purple.light} 100%)`
              : item.cyan
              ? `linear-gradient(135deg, ${theme.palette.custom.cyan.main} 0%, ${theme.palette.custom.cyan.light} 100%)`
              : `linear-gradient(135deg, ${theme.palette.custom.blue.main} 0%, ${theme.palette.custom.blue.light} 100%)`,
            border: (theme) => `2px solid ${theme.palette.background.default}`,
            zIndex: 3 - i,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            component="svg"
            sx={{ 
              width: 18, 
              height: 18, 
              color: (theme) => item.purple 
                ? theme.palette.custom.purple.dark
                : item.cyan
                ? theme.palette.info.light
                : theme.palette.custom.blue.dark
            }}
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
        backgroundColor: (theme) => theme.palette.primary.main,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ml: -0.5,
        zIndex: 4,
      }}
    >
      <AddIcon sx={{ color: (theme) => theme.palette.background.default, fontSize: 20 }} />
    </Box>
  </Box>
);


const SharedMaterialsDecor = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: (theme) => theme.palette.background.default,
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
        backgroundColor: (theme) => theme.palette.primary.main,
        flexShrink: 0,
      }}
    />
    <Box sx={{ flex: 1 }} />
  </Box>
);


const LiveShareDecor = () => (
  <Box
    sx={{
      backgroundColor: (theme) => theme.palette.background.default,
      borderRadius: '40px',
      px: 4,
      py: 1.5,
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    }}
  >
    <Typography sx={{ fontSize: '1.1rem', fontWeight: 600, color: (theme) => theme.palette.success.light }}>
      Share
    </Typography>
  </Box>
);


const decorMap = {
  TeamAssets: TeamAssetsDecor,
  SharedMaterials: SharedMaterialsDecor,
  LiveShare: LiveShareDecor,
};

const Features = () => {

  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
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
            color: (theme) => theme.palette.text.primary,
            fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
          }}
        >
          The 3D generation is here.
        </Typography>

        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
          {featuresData.map((feature, index) => {
            const DecorComponent = decorMap[feature.decorType];
            return (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                <FeatureCard title={feature.title} description={feature.description} bgColor={feature.bgColor} badge={feature.badge}>
                  <DecorComponent />
                </FeatureCard>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;

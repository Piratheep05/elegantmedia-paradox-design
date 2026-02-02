import { Box, Typography, Container, Button, Avatar, AvatarGroup } from '@mui/material';
import galleryImage from '../../assets/gallery-3d.png';
import frameImage from '../../assets/frame-3d.png';
import paintBucketImage from '../../assets/paint-bucket-3d.webp';

const CTA = () => {
  const avatars = [
    'https://api.dicebear.com/7.x/avataaars/svg?seed=user1&backgroundColor=ffd5dc',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=user2&backgroundColor=c0aede',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=user3&backgroundColor=d1d4f9',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=user4&backgroundColor=ffc6ff',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=user5&backgroundColor=bde0fe',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=user6&backgroundColor=caffbf',
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#fafafa',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        minHeight: { xs: 500, md: 600 },
      }}
    >
      {/* Concentric Circles Background */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: 300, md: 400 },
          height: { xs: 300, md: 500 },
          borderRadius: '50%',
          border: '1px solid rgba(0,0,0,0.05)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: 450, md: 700 },
          height: { xs: 450, md: 700 },
          borderRadius: '50%',
          border: '1px solid rgba(0,0,0,0.04)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: 600, md: 900 },
          height: { xs: 600, md: 900 },
          borderRadius: '50%',
          border: '1px solid rgba(0,0,0,0.03)',
          pointerEvents: 'none',
        }}
      />

      {/* Floating 3D Elements */}
      {/* Gallery Image - Top Left */}
      <Box
        component="img"
        src={galleryImage}
        alt=""
        sx={{
          position: 'absolute',
          top: { xs: '5%', md: '10%' },
          left: { xs: '2%', md: '8%' },
          width: { xs: 80, md: 120 },
          height: 'auto',
          transform: 'rotate(-15deg)',
          zIndex: 2,
        }}
      />

      {/* Frame Image - Bottom Left */}
      <Box
        component="img"
        src={frameImage}
        alt=""
        sx={{
          position: 'absolute',
          bottom: { xs: '15%', md: '20%' },
          left: { xs: '-2%', md: '5%' },
          width: { xs: 70, md: 100 },
          height: 'auto',
          transform: 'rotate(-10deg)',
          zIndex: 2,
        }}
      />

      {/* Paint Bucket - Top Right */}
      <Box
        component="img"
        src={paintBucketImage}
        alt=""
        sx={{
          position: 'absolute',
          top: { xs: '8%', md: '12%' },
          right: { xs: '2%', md: '8%' },
          width: { xs: 80, md: 110 },
          height: 'auto',
          transform: 'rotate(10deg)',
          zIndex: 2,
        }}
      />

      {/* Floating Dots */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '45%',
          width: 12,
          height: 12,
          borderRadius: '50%',
          backgroundColor: '#3b82f6',
          zIndex: 2,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '25%',
          right: '30%',
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: '#fbbf24',
          zIndex: 2,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '30%',
          left: '35%',
          width: 10,
          height: 10,
          borderRadius: '50%',
          backgroundColor: '#60a5fa',
          zIndex: 2,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          right: '40%',
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: '#3b82f6',
          zIndex: 2,
        }}
      />

      {/* Thumbs Up Icon - Right Side */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          right: { xs: '5%', md: '10%' },
          transform: 'translateY(-50%)',
          width: { xs: 40, md: 56 },
          height: { xs: 40, md: 56 },
          borderRadius: '50%',
          backgroundColor: '#3b82f6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: { xs: 20, md: 28 },
          zIndex: 2,
        }}
      >
        👍
      </Box>

      {/* Heart Icon - Left Side */}
      <Box
        sx={{
          position: 'absolute',
          top: '45%',
          left: { xs: '8%', md: '12%' },
          transform: 'translateY(-50%)',
          width: { xs: 40, md: 56 },
          height: { xs: 40, md: 56 },
          borderRadius: '50%',
          backgroundColor: '#3b82f6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: { xs: 20, md: 28 },
          zIndex: 2,
        }}
      >
        🤍
      </Box>

      {/* Smile Emoji - Bottom Right Area */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: '35%', md: '40%' },
          right: { xs: '15%', md: '20%' },
          width: { xs: 36, md: 48 },
          height: { xs: 36, md: 48 },
          borderRadius: '50%',
          backgroundColor: '#3b82f6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: { xs: 18, md: 24 },
          zIndex: 2,
        }}
      >
        😊
      </Box>

      {/* Ruler - Bottom Right */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: '10%', md: '15%' },
          right: { xs: '5%', md: '10%' },
          width: { xs: 80, md: 120 },
          height: { xs: 12, md: 16 },
          background: 'linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)',
          borderRadius: 2,
          transform: 'rotate(-30deg)',
          zIndex: 2,
        }}
      />

      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 3 }}>
        <Box sx={{ textAlign: 'center' }}>
          {/* Headline */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.75rem' },
              color: '#1a1a2e',
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            Ready to use Paradox?
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              color: '#6b7280',
              fontSize: { xs: '1rem', md: '1.125rem' },
              mb: 4,
            }}
          >
            Join thousand users and teams in the community
          </Typography>

          {/* Avatar Group */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <AvatarGroup
              max={6}
              sx={{
                '& .MuiAvatar-root': {
                  width: { xs: 40, md: 48 },
                  height: { xs: 40, md: 48 },
                  border: '3px solid #fff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                },
              }}
            >
              {avatars.map((avatar, index) => (
                <Avatar key={index} src={avatar} />
              ))}
            </AvatarGroup>
          </Box>

          {/* CTA Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#3b82f6',
              color: '#fff',
              px: 4,
              py: 1.5,
              borderRadius: '12px',
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              boxShadow: '0 4px 14px rgba(59, 130, 246, 0.4)',
              '&:hover': {
                backgroundColor: '#2563eb',
                boxShadow: '0 6px 20px rgba(59, 130, 246, 0.5)',
              },
            }}
          >
            Get started
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CTA;

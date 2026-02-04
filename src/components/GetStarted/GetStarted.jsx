import { Box, Typography, Container, Button, Avatar, AvatarGroup } from '@mui/material';
import galleryImage from '../../assets/gallery-3d.png';
import frameImage from '../../assets/frame-3d.png';
import paintBucketImage from '../../assets/paint-bucket-3d.webp';
import { ctaAvatars } from '../../utils/data';
import { motion } from 'framer-motion';

const GetStarted = () => {


  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        minHeight: { xs: 500, md: 600 },
      }}
    >
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

      <Box
       // component="img"
       component={motion.img}
       whileHover={{ scale: 1.2 }}
       whileTap={{ scale: 0.8 }}
        src={galleryImage}
        alt=""
        sx={{
          position: 'absolute',
          top: { xs: '5%', md: '10%' },
          left: { xs: '2%', md: '8%' },
          width: { xs: 60, sm: 80, md: 120 },
          height: 'auto',
          transform: 'rotate(-15deg)',
          zIndex: 2,
          display: { xs: 'none', sm: 'block' },
        }}
      />

      
      <Box
       // component="img"
       component={motion.img}
       whileHover={{ scale: 1.2 }}
       whileTap={{ scale: 0.8 }}
        src={frameImage}
        alt=""
        sx={{
          position: 'absolute',
          bottom: { xs: '15%', md: '20%' },
          left: { xs: '-2%', md: '5%' },
          width: { xs: 50, sm: 70, md: 100 },
          height: 'auto',
          transform: 'rotate(-10deg)',
          zIndex: 2,
          display: { xs: 'none', sm: 'block' },
        }}
      />

    
      <Box
        //component="img"
        component={motion.img}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        src={paintBucketImage}
        alt=""
        sx={{
          position: 'absolute',
          top: { xs: '8%', md: '12%' },
          right: { xs: '2%', md: '8%' },
          width: { xs: 60, sm: 80, md: 110 },
          height: 'auto',
          transform: 'rotate(10deg)',
          zIndex: 2,
          display: { xs: 'none', sm: 'block' },
        }}
      />

    
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '45%',
          width: { xs: 8, md: 12 },
          height: { xs: 8, md: 12 },
          borderRadius: '50%',
          backgroundColor: (theme) => theme.palette.primary.main,
          zIndex: 2,
          display: { xs: 'none', sm: 'block' },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '25%',
          right: '30%',
          width: { xs: 6, md: 8 },
          height: { xs: 6, md: 8 },
          borderRadius: '50%',
          backgroundColor: (theme) => theme.palette.warning.light,
          zIndex: 2,
          display: { xs: 'none', sm: 'block' },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '30%',
          left: '35%',
          width: { xs: 8, md: 10 },
          height: { xs: 8, md: 10 },
          borderRadius: '50%',
          backgroundColor: (theme) => theme.palette.primary.light,
          zIndex: 2,
          display: { xs: 'none', sm: 'block' },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          right: '40%',
          width: { xs: 6, md: 8 },
          height: { xs: 6, md: 8 },
          borderRadius: '50%',
          backgroundColor: (theme) => theme.palette.primary.main,
          zIndex: 2,
          display: { xs: 'none', sm: 'block' },
        }}
      />

     
      <Box
        component={motion.button}
          whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
        sx={{
          position: 'absolute',
          top: '50%',
          right: { xs: '5%', md: '10%' },
          transform: 'translateY(-50%)',
          width: { xs: 36, sm: 40, md: 56 },
          height: { xs: 36, sm: 40, md: 56 },
          borderRadius: '50%',
          backgroundColor: (theme) => theme.palette.primary.main,
          alignItems: 'center',
          justifyContent: 'center',
          color: (theme) => theme.palette.background.default,
          fontSize: { xs: 18, sm: 20, md: 28 },
          zIndex: 2,
          display: { xs: 'none', sm: 'flex' },
        }}
      >
        👍
      </Box>

     
      <Box
      component={motion.button}
      whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        sx={{
          position: 'absolute',
          top: '45%',
          left: { xs: '8%', md: '12%' },
          transform: 'translateY(-50%)',
          width: { xs: 36, sm: 40, md: 56 },
          height: { xs: 36, sm: 40, md: 56 },
          borderRadius: '50%',
          backgroundColor: (theme) => theme.palette.primary.main,
          alignItems: 'center',
          justifyContent: 'center',
          color: (theme) => theme.palette.background.default,
          fontSize: { xs: 18, sm: 20, md: 28 },
          zIndex: 2,
          display: { xs: 'none', sm: 'flex' },
        }}
      >
        🤍
      </Box>

     
      <Box
      component={motion.button}
      whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        sx={{
          position: 'absolute',
          bottom: { xs: '35%', md: '40%' },
          right: { xs: '15%', md: '20%' },
          width: { xs: 32, sm: 36, md: 48 },
          height: { xs: 32, sm: 36, md: 48 },
          borderRadius: '50%',
          backgroundColor: (theme) => theme.palette.primary.main,
          alignItems: 'center',
          justifyContent: 'center',
          color: (theme) => theme.palette.background.default,
          fontSize: { xs: 16, sm: 18, md: 24 },
          zIndex: 2,
          display: { xs: 'none', sm: 'flex' },
        }}
      >
        😊
      </Box>

      
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: '10%', md: '15%' },
          right: { xs: '5%', md: '10%' },
          width: { xs: 60, sm: 80, md: 120 },
          height: { xs: 10, sm: 12, md: 16 },
          background: (theme) => `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
          borderRadius: 2,
          transform: 'rotate(-30deg)',
          zIndex: 2,
          display: { xs: 'none', sm: 'block' },
        }}
      />

      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 3 }}>
        <Box sx={{ textAlign: 'center' }}>
          
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.75rem' },
              color: (theme) => theme.palette.text.primary,
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            Ready to use Paradox?
          </Typography>

         
          <Typography
            sx={{
              color: (theme) => theme.palette.text.secondary,
              fontSize: { xs: '1rem', md: '1.125rem' },
              mb: 4,
            }}
          >
            Join thousand users and teams in the community
          </Typography>

          
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
              {ctaAvatars.map((avatar, index) => (
                <Avatar key={index} src={avatar} />
              ))}
            </AvatarGroup>
          </Box>

         
          <Button
          component={motion.button}
          whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            variant="contained"
            sx={{
              backgroundColor: (theme) => theme.palette.primary.main,
              color: (theme) => theme.palette.background.default,
              px: 4,
              py: 1.5,
              borderRadius: '12px',
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              boxShadow: (theme) => `0 4px 14px ${theme.palette.primary.main}66`,
              '&:hover': {
                backgroundColor: (theme) => theme.palette.primary.dark,
                boxShadow: (theme) => `0 6px 20px ${theme.palette.primary.main}80`,
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

export default GetStarted;

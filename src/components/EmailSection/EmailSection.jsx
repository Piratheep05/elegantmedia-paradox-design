import { Box, Typography, Container, TextField, IconButton, InputAdornment } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import emailSectionImage from '../../assets/email-section.png';

const EmailSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f9fafb',
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* Left Content */}
          <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: '400px' } }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                lineHeight: 1.2,
                color: '#1a1a2e',
                mb: 2,
              }}
            >
              Go from 3D to website in no time.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#6b7280',
                fontSize: '1.1rem',
                mb: 4,
              }}
            >
              Without any effort, save a ton of time.
            </Typography>

            {/* Email Input */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#fff',
                borderRadius: '50px',
                border: '1px solid #e5e7eb',
                pl: 2,
                pr: 0.5,
                py: 0.5,
                maxWidth: 360,
              }}
            >
              <MailOutlineIcon sx={{ color: '#9ca3af', mr: 1.5 }} />
              <TextField
                placeholder="Your email"
                variant="standard"
                fullWidth
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{
                  '& .MuiInputBase-input': {
                    py: 1,
                    fontSize: '0.95rem',
                  },
                }}
              />
              <IconButton
                sx={{
                  backgroundColor: '#3b82f6',
                  color: '#fff',
                  width: 44,
                  height: 44,
                  '&:hover': {
                    backgroundColor: '#2563eb',
                  },
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Right Illustration */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: { xs: '100%', md: '600px' },
            }}
          >
            <Box
              component="img"
              src={emailSectionImage}
              alt="3D to website illustration"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: 450,
                objectFit: 'contain',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default EmailSection;

import React from 'react';
import { Box, Typography, Container, TextField, IconButton } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import emailSectionImage from '../../assets/email-section.png';
import { ALT_TEXT, ARIA_LABELS } from '../../utils/constants';

const EmailSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
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
          
          <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: '400px' } }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                lineHeight: 1.2,
                color: (theme) => theme.palette.text.primary,
                mb: 2,
              }}
            >
              Go from 3D to website in no time.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: (theme) => theme.palette.text.secondary,
                fontSize: '1.1rem',
                mb: 4,
              }}
            >
              Without any effort, save a ton of time.
            </Typography>

            
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: (theme) => theme.palette.background.default,
                borderRadius: '50px',
                border: (theme) => `1px solid ${theme.palette.background.darkGray}`,
                pl: { xs: 1.5, md: 2 },
                pr: { xs: 0.5, md: 0.5 },
                py: { xs: 0.5, md: 0.5 },
                maxWidth: { xs: '100%', md: 360 },
                width: '100%',
              }}
            >
              <MailOutlineIcon sx={{ color: (theme) => theme.palette.text.disabled, mr: { xs: 1, md: 1.5 }, fontSize: { xs: 20, md: 24 } }} />
              <TextField
                placeholder="Your email"
                variant="standard"
                fullWidth
                type="email"
                aria-label={ARIA_LABELS.EMAIL_INPUT}
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{
                  '& .MuiInputBase-input': {
                    py: { xs: 0.75, md: 1 },
                    fontSize: { xs: '0.875rem', md: '0.95rem' },
                  },
                }}
              />
              <IconButton
                aria-label={ARIA_LABELS.SUBMIT_EMAIL}
                type="submit"
                sx={{
                  backgroundColor: (theme) => theme.palette.primary.main,
                  color: (theme) => theme.palette.background.default,
                  width: { xs: 40, md: 44 },
                  height: { xs: 40, md: 44 },
                  '&:hover': {
                    backgroundColor: (theme) => theme.palette.primary.dark,
                  },
                }}
              >
                <ArrowForwardIcon sx={{ fontSize: { xs: 18, md: 24 } }} />
              </IconButton>
            </Box>
          </Box>

          
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
              alt={ALT_TEXT.EMAIL_SECTION}
              loading="lazy"
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

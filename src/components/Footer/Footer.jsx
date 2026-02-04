import { Box, Typography, Container, Grid, Link, Divider } from '@mui/material';
import { footerLinks } from '../../utils/data';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
        pt: { xs: 6, md: 8 },
        pb: 0,
      }}
    >
      <Container maxWidth="lg">
       
        <Grid container spacing={{ xs: 3, md: 4 }} sx={{ pb: { xs: 4, md: 6 } }}>
          
          {Object.entries(footerLinks).map(([category, links], index) => (
            <Grid size={{ xs: 6, sm: 4, md: 2.5 }} key={category}>
              <Box
                sx={{
                  borderLeft: index > 0 ? { xs: 'none', sm: (theme) => `1px solid ${theme.palette.background.darkGray}` } : 'none',
                  pl: index > 0 ? { xs: 0, sm: 2, md: 3 } : 0,
                  height: '100%',
                  mb: { xs: 2, md: 0 },
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 600,
                    color: (theme) => theme.palette.text.primary,
                    mb: 2,
                    fontSize: '0.9rem',
                  }}
                >
                  {category}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {links.map((link) => (
                    <Link
                      href="#"
                      key={link}
                      underline="none"
                      sx={{
                        color: (theme) => theme.palette.text.secondary,
                        fontSize: '0.9rem',
                        transition: 'color 0.2s ease',
                        '&:hover': {
                          color: (theme) => theme.palette.text.primary,
                        },
                      }}
                    >
                      {link}
                    </Link>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}

          
          <Grid size={{ xs: 12, sm: 12, md: 4.5 }}>
            <Box
              sx={{
                borderLeft: { xs: 'none', sm: 'none', md: (theme) => `1px solid ${theme.palette.background.darkGray}` },
                pl: { xs: 0, sm: 0, md: 3 },
                height: '100%',
                mt: { xs: 2, sm: 2, md: 0 },
              }}
            >
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: (theme) => theme.palette.primary.main,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    component="svg"
                    viewBox="0 0 24 24"
                    sx={{ width: 24, height: 24, fill: (theme) => theme.palette.background.default }}
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </Box>
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: (theme) => theme.palette.text.primary,
                    fontSize: '1.25rem',
                  }}
                >
                  Paradox
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: (theme) => theme.palette.text.secondary,
                  fontSize: { xs: '0.875rem', md: '0.9rem' },
                  lineHeight: 1.6,
                  maxWidth: { xs: '100%', md: 250 },
                }}
              >
                The Real-time & powerful 3D design for web.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        
        <Divider sx={{ borderColor: (theme) => theme.palette.background.darkGray }} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: { xs: 1.5, sm: 2 },
            py: { xs: 2, md: 3 },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: (theme) => theme.palette.text.disabled,
              fontSize: { xs: '0.8rem', md: '0.85rem' },
            }}
          >
            ©2022 - UI8, Ltd.
          </Typography>
          <Box sx={{ display: 'flex', gap: { xs: 1, sm: 2 }, flexWrap: 'wrap' }}>
            <Link
              href="#"
              underline="none"
              sx={{
                color: (theme) => theme.palette.text.secondary,
                fontSize: { xs: '0.8rem', md: '0.85rem' },
                '&:hover': { color: (theme) => theme.palette.text.primary },
              }}
            >
              Terms & Conditions
            </Link>
            <Typography sx={{ color: (theme) => theme.palette.text.disabled, display: { xs: 'none', sm: 'block' } }}>,</Typography>
            <Link
              href="#"
              underline="none"
              sx={{
                color: (theme) => theme.palette.text.secondary,
                fontSize: { xs: '0.8rem', md: '0.85rem' },
                '&:hover': { color: (theme) => theme.palette.text.primary },
              }}
            >
              Privacy
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

import { Box, Typography, Container, Grid, Link, Divider } from '@mui/material';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Download'],
  Company: ['About', 'Blog', 'Contact', 'Sign up'],
  Community: ['Help', 'Discord', 'Twitter', 'Linked in'],
};

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f8f9fa',
        pt: { xs: 6, md: 8 },
        pb: 0,
      }}
    >
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Grid container spacing={4} sx={{ pb: 6 }}>
          {/* Navigation Columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <Grid size={{ xs: 6, sm: 3, md: 2.5 }} key={category}>
              <Box
                sx={{
                  borderLeft: index > 0 ? { xs: 'none', sm: '1px solid #e8e8e8' } : 'none',
                  pl: index > 0 ? { xs: 0, sm: 3 } : 0,
                  height: '100%',
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 600,
                    color: '#1a1a1a',
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
                        color: '#666',
                        fontSize: '0.9rem',
                        transition: 'color 0.2s ease',
                        '&:hover': {
                          color: '#1a1a1a',
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

          {/* Brand Section */}
          <Grid size={{ xs: 12, sm: 6, md: 4.5 }}>
            <Box
              sx={{
                borderLeft: { xs: 'none', sm: '1px solid #e8e8e8' },
                pl: { xs: 0, sm: 3 },
                height: '100%',
                mt: { xs: 4, sm: 0 },
              }}
            >
              {/* Logo */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#3b82f6',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    component="svg"
                    viewBox="0 0 24 24"
                    sx={{ width: 24, height: 24, fill: '#fff' }}
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </Box>
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: '#1a1a1a',
                    fontSize: '1.25rem',
                  }}
                >
                  Paradox
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: '#666',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  maxWidth: 250,
                }}
              >
                The Real-time & powerful 3D design for web.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Divider sx={{ borderColor: '#e8e8e8' }} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 2,
            py: 3,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: '#999',
              fontSize: '0.85rem',
            }}
          >
            ©2022 - UI8, Ltd.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link
              href="#"
              underline="none"
              sx={{
                color: '#666',
                fontSize: '0.85rem',
                '&:hover': { color: '#1a1a1a' },
              }}
            >
              Terms & Conditions
            </Link>
            <Typography sx={{ color: '#999' }}>,</Typography>
            <Link
              href="#"
              underline="none"
              sx={{
                color: '#666',
                fontSize: '0.85rem',
                '&:hover': { color: '#1a1a1a' },
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

import { Box, Typography, Card, CardContent, Avatar, Container, Grid } from '@mui/material';
import { testimonialsData } from '../../utils/data';

const Testimonials = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        px: 2,
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '3rem' },
              color: (theme) => theme.palette.text.primary,
              mb: 2,
            }}
          >
            People are talking...
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: (theme) => theme.palette.text.secondary,
              fontSize: '1rem',
            }}
          >
            Amet minim mollit non deserunt ullamco est.
          </Typography>
        </Box>

       
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {testimonialsData.map((testimonial) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={testimonial.id}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  boxShadow: 'none',
                  border: (theme) => `1px solid ${theme.palette.background.darkGray}`,
                  backgroundColor: (theme) => theme.palette.background.default,
                  transition: 'box-shadow 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                 
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    sx={{
                      width: 56,
                      height: 56,
                      mb: 2,
                      border: (theme) => `2px solid ${theme.palette.grey[100]}`,
                    }}
                  />

               
                  <Typography
                    variant="body2"
                    sx={{
                      color: (theme) => theme.palette.text.primary,
                      fontSize: '0.95rem',
                      lineHeight: 1.7,
                      mb: 3,
                      minHeight: 80,
                    }}
                  >
                    {testimonial.quote}
                  </Typography>

                
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        color: (theme) => theme.palette.text.primary,
                        fontSize: '0.95rem',
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: (theme) => theme.palette.text.secondary,
                        fontSize: '0.85rem',
                      }}
                    >
                      {testimonial.role}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;

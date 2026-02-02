import { Box, Typography, Card, CardContent, Avatar, Container, Grid } from '@mui/material';

const testimonials = [
  {
    id: 1,
    name: 'Emine Isik',
    role: 'Nursing Assistant',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emine&backgroundColor=c0aede',
    quote: '"It has been an absolute pleasure dealing with Scan during the lockdown. Our church began to livestream our services, and Scan..."',
  },
  {
    id: 2,
    name: 'Fattum Bozok',
    role: 'Web Designer',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=fattum&backgroundColor=b6e3f4',
    quote: '"I was also lucky enough to read @Coding_Career early and I was thoroughly blown away! It\'s the book I wish I had when I started my dev..."',
  },
  {
    id: 3,
    name: 'Veli Dincer',
    role: 'Dog Trainer',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=veli&backgroundColor=ffd5dc',
    quote: '"Wow! The immense wealth of knowledge and experience shared in "The Coding Career Handbook" cannot be overstated. I love how..."',
  },
  {
    id: 4,
    name: 'Mansur Sarica',
    role: 'Medical Assistant',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mansur&backgroundColor=d1d4f9',
    quote: '"The links to high-value blog posts already make the book worth it, never mind the amazing insight and context provided by Shawn. Must bu..."',
  },
  {
    id: 5,
    name: 'M. Kemal Yilmaz',
    role: 'President of Sales',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=kemal&backgroundColor=c0aede',
    quote: '"For anyone looking for career advice as a coder but is tired of being told they have to do X or never do Y. Shawn is sharing his personal..."',
  },
  {
    id: 6,
    name: 'Emine Simsek',
    role: 'Marketing Coordinator',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=simsek&backgroundColor=ffdfbf',
    quote: '"I wish I had this book when I was switching jobs. It helps you understand what skills you should leverage and really encourages you..."',
  },
];

const Testimonials = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        px: 2,
        backgroundColor: '#f8f9fa',
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '3rem' },
              color: '#1a1a1a',
              mb: 2,
            }}
          >
            People are talking...
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#666',
              fontSize: '1rem',
            }}
          >
            Amet minim mollit non deserunt ullamco est.
          </Typography>
        </Box>

        {/* Testimonials Grid */}
        <Grid container spacing={3}>
          {testimonials.map((testimonial) => (
            <Grid size={{ xs: 12, md: 4 }} key={testimonial.id}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  boxShadow: 'none',
                  border: '1px solid #e8e8e8',
                  backgroundColor: '#fff',
                  transition: 'box-shadow 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  {/* Avatar */}
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    sx={{
                      width: 56,
                      height: 56,
                      mb: 2,
                      border: '2px solid #f0f0f0',
                    }}
                  />

                  {/* Quote */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#333',
                      fontSize: '0.95rem',
                      lineHeight: 1.7,
                      mb: 3,
                      minHeight: 80,
                    }}
                  >
                    {testimonial.quote}
                  </Typography>

                  {/* Author Info */}
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        color: '#1a1a1a',
                        fontSize: '0.95rem',
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#888',
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

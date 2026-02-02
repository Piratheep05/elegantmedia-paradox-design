import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import EmailSection from './components/EmailSection/EmailSection';
import Features from './components/Features/Features';
import RenderSection from './components/RenderSection/RenderSection';
import Integrations from './components/Integrations/Integrations';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Testimonials from './components/Testimonials/Testimonials';
import DesignTool from './components/DesignTool/DesignTool';
import ModelsSection from './components/ModelsSection/ModelsSection';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Hero />
      <EmailSection />
      <Features />
      <RenderSection />
      <Integrations />
      <HowItWorks />
      <ModelsSection />
      <Testimonials />
      <DesignTool />
      <CTA />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

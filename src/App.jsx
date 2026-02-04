import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import EmailSection from './components/EmailSection/EmailSection';
import Features from './components/Features/Features';
import RenderSection from './components/RenderSection/RenderSection';
import Integrations from './components/Integrations/Integrations';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Testimonials from './components/Testimonials/Testimonials';
import DesignTool from './components/DesignTool/DesignTool';
import ModelsSection from './components/ModelsSection/ModelsSection';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';
import theme from './theme';
import './App.css';


function App() {
  return (
      <ThemeProvider theme={theme}>
        <Header />
        <Home />
        <EmailSection />
        <Features />
        <RenderSection />
        <Integrations />
        <HowItWorks />
        <ModelsSection />
        <Testimonials />
        <DesignTool />
        <GetStarted />
        <Footer />
      </ThemeProvider>
   
  );
}

export default App;

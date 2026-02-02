import React from "react";
import ScrollTop from "../components/ScrollTop";
import SEO from "../components/SEO";
// Import The About Page Components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <SEO
        title="About Us - Professional Photography Services"
        description="Learn about ECK Filmworks, your trusted partner for professional photography. Specializing in portraits, weddings, events, and commercial photography."
        url="https://eckfilmworks.com"
      />
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;

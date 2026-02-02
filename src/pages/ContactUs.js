import React from "react";

// Import The ContactUs Page Components
import ContactForm from "../components/ContactForm";
import SocialLinks from "../components/SocialLinks";
import SEO from "../components/SEO";

// Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnimate, fade } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <SEO
        title="Contact Us - Get In Touch"
        description="Ready to book your photography session? Contact ECK Filmworks for portraits, weddings, events, and commercial photography. Let's create something beautiful together."
        url="https://eckfilmworks.com/contact"
      />
      <div className="title">
        <div className="hide">
          <motion.h2 variants={titleAnimate}>Get In Touch.</motion.h2>
        </div>
        <div className="hide">
          <motion.p variants={fade} className="subtitle">
            Let's create something beautiful together. Whether it's a portrait
            session, wedding, or commercial project, we'd love to hear from you.
          </motion.p>
        </div>
      </div>

      <ContentWrapper>
        <FormSection>
          <motion.h3 variants={fade}>Send Us A Message</motion.h3>
          <ContactForm />
        </FormSection>

        <SocialSection>
          <motion.h3 variants={fade}>Connect With Us</motion.h3>
          <SocialLinks />
        </SocialSection>
      </ContentWrapper>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  padding: 5rem 0;
  color: white;
  min-height: 90vh;

  .title {
    margin-bottom: 4rem;
    text-align: center;

    h2 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .subtitle {
      font-size: 1.3rem;
      color: rgba(255, 255, 255, 0.8);
      max-width: 700px;
      margin: 2rem auto 0;
      line-height: 1.6;
    }
  }

  .hide {
    overflow: hidden;
  }

  @media (max-width: 768px) {
    padding: 3rem 0;

    .title h2 {
      font-size: 2rem;
    }

    .title .subtitle {
      font-size: 1.1rem;
    }
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const FormSection = styled(motion.div)`
  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #23d997;
  }
`;

const SocialSection = styled(motion.div)`
  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #23d997;
  }
`;

export default ContactUs;

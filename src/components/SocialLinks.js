import React from "react";
import styled from "styled-components";
import { FaInstagram, FaFacebookF, FaEnvelope, FaPhone } from "react-icons/fa";

const SocialLinks = () => {
  // UPDATE THESE WITH YOUR ACTUAL SOCIAL MEDIA URLS
  const socialMedia = {
    instagram: "https://instagram.com/yourhandle",
    facebook: "https://facebook.com/yourpage",
    email: "contact@eckfilmworks.com",
    phone: "+1 (555) 123-4567",
  };

  return (
    <SocialContainer>
      <SocialItem
        href={socialMedia.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram />
        <span>@eckfilmworks</span>
      </SocialItem>

      <SocialItem
        href={socialMedia.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FaFacebookF />
        <span>ECK Filmworks</span>
      </SocialItem>

      <SocialItem href={`mailto:${socialMedia.email}`} aria-label="Email">
        <FaEnvelope />
        <span>{socialMedia.email}</span>
      </SocialItem>

      <SocialItem href={`tel:${socialMedia.phone}`} aria-label="Phone">
        <FaPhone />
        <span>{socialMedia.phone}</span>
      </SocialItem>
    </SocialContainer>
  );
};

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;
`;

const SocialItem = styled.a`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  padding: 1rem;
  border-radius: 8px;

  svg {
    font-size: 2rem;
    color: #23d997;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: rgba(35, 217, 151, 0.1);
    transform: translateX(10px);

    svg {
      transform: scale(1.2);
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;

    svg {
      font-size: 1.5rem;
    }
  }
`;

export default SocialLinks;

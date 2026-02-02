import React, { useState, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    // Validation
    if (!formData.name.trim()) {
      setStatus({ type: "error", message: "Please enter your name" });
      return;
    }
    if (!formData.email.trim()) {
      setStatus({ type: "error", message: "Please enter your email" });
      return;
    }
    if (!validateEmail(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email" });
      return;
    }
    if (!formData.message.trim()) {
      setStatus({ type: "error", message: "Please enter a message" });
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration - USER NEEDS TO SET THESE VALUES
      // Sign up at https://www.emailjs.com/
      // Replace these with your actual values from EmailJS dashboard
      const serviceId = "YOUR_SERVICE_ID";
      const templateId = "YOUR_TEMPLATE_ID";
      const publicKey = "YOUR_PUBLIC_KEY";

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      setStatus({
        type: "success",
        message: "Message sent successfully! We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again or email us directly.",
      });
      console.error("EmailJS Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit} ref={formRef}>
      <FormGroup>
        <label htmlFor="name">
          Name <span>*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
        />
      </FormGroup>

      <FormGroup>
        <label htmlFor="email">
          Email <span>*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
        />
      </FormGroup>

      <FormGroup>
        <label htmlFor="phone">Phone (Optional)</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 (555) 123-4567"
        />
      </FormGroup>

      <FormGroup>
        <label htmlFor="message">
          Message <span>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project, event date, or any questions you have..."
          rows="6"
        />
      </FormGroup>

      {status.message && (
        <StatusMessage type={status.type}>
          {status.message}
        </StatusMessage>
      )}

      <SubmitButton
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </SubmitButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  max-width: 600px;
  margin: 3rem 0;
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;

  label {
    display: block;
    color: white;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;

    span {
      color: #23d997;
    }
  }

  input,
  textarea {
    width: 100%;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    color: white;
    font-size: 1rem;
    font-family: inherit;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #23d997;
      background: rgba(255, 255, 255, 0.15);
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }
`;

const StatusMessage = styled.div`
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 5px;
  background: ${(props) =>
    props.type === "success" ? "rgba(35, 217, 151, 0.2)" : "rgba(255, 71, 87, 0.2)"};
  border: 2px solid
    ${(props) => (props.type === "success" ? "#23d997" : "#ff4757")};
  color: ${(props) => (props.type === "success" ? "#23d997" : "#ff4757")};
  font-size: 1rem;
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 3rem;
  background: #23d997;
  border: none;
  border-radius: 5px;
  color: #1b1b1b;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: #1fc184;
  }
`;

export default ContactForm;

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonialsData = [
  {
    id: 1,
    name: "Sarah & Michael Johnson",
    role: "Wedding Clients",
    text: "ECK Filmworks captured our wedding day perfectly! Every photo tells a story, and we're so grateful to have these memories preserved so beautifully. Highly professional and creative!",
    rating: 5,
    image: null, // Can add client photos later
  },
  {
    id: 2,
    name: "David Martinez",
    role: "Corporate Event",
    text: "Outstanding work on our company's annual gala. The photos exceeded our expectations and were delivered promptly. The team was unobtrusive yet managed to capture all the key moments.",
    rating: 5,
    image: null,
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Portrait Session",
    text: "I was nervous about my portrait session, but the photographer made me feel so comfortable. The results were stunning - professional headshots that truly represent who I am.",
    rating: 5,
    image: null,
  },
  {
    id: 4,
    name: "Thompson Family",
    role: "Family Portraits",
    text: "We've been coming back to ECK Filmworks for our family portraits for 3 years now. They know how to work with kids and always deliver beautiful, natural-looking photos we treasure.",
    rating: 5,
    image: null,
  },
];

const Testimonials = () => {
  return (
    <TestimonialsSection>
      <div className="title">
        <h2>What Our Clients Say</h2>
        <p>Don't just take our word for it - hear from those we've worked with</p>
      </div>

      <TestimonialsGrid>
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <QuoteIcon>
              <FaQuoteLeft />
            </QuoteIcon>
            
            <TestimonialText>{testimonial.text}</TestimonialText>
            
            <Rating>
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </Rating>
            
            <ClientInfo>
              <h4>{testimonial.name}</h4>
              <p>{testimonial.role}</p>
            </ClientInfo>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </TestimonialsSection>
  );
};

const TestimonialsSection = styled.section`
  padding: 5rem 0;
  background: rgba(255, 255, 255, 0.02);
  
  .title {
    text-align: center;
    margin-bottom: 4rem;
    
    h2 {
      color: white;
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    
    p {
      color: rgba(255, 255, 255, 0.7);
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 0;
    
    .title h2 {
      font-size: 2rem;
    }
    
    .title p {
      font-size: 1rem;
    }
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2.5rem;
  border-radius: 15px;
  border: 2px solid rgba(35, 217, 151, 0.2);
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    border-color: #23d997;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 10px 30px rgba(35, 217, 151, 0.2);
  }
`;

const QuoteIcon = styled.div`
  color: #23d997;
  font-size: 2rem;
  opacity: 0.3;
  margin-bottom: 1rem;
`;

const TestimonialText = styled.p`
  color: white;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-style: italic;
`;

const Rating = styled.div`
  display: flex;
  gap: 0.3rem;
  margin-bottom: 1.5rem;
  
  svg {
    color: #ffd700;
    font-size: 1.2rem;
  }
`;

const ClientInfo = styled.div`
  border-top: 2px solid rgba(35, 217, 151, 0.3);
  padding-top: 1.5rem;
  
  h4 {
    color: #23d997;
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
  }
  
  p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.95rem;
  }
`;

export default Testimonials;
export { testimonialsData };

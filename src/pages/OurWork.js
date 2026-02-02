import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ScrollTop from "../components/ScrollTop";
import CategoryFilter from "../components/CategoryFilter";
import SEO from "../components/SEO";
// Import Portfolio Data
import { PortfolioState, portfolioCategories } from "../PortfolioState";

// Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnimate,
  lineAnimate,
  slider,
  sliderContainer,
  scrollReveal,
} from "../animation";
import { useScroll } from "../components/useScroll";

const OurWork = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const portfolioItems = PortfolioState();

  // Filter portfolio items by category
  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <StyledWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <SEO
        title="Our Portfolio - Photography Work"
        description="Browse our portfolio of professional photography including portraits, weddings, events, and commercial projects. See the quality and creativity we bring to every shoot."
        url="https://eckfilmworks.com/work"
      />
      <motion.div variants={sliderContainer}>
        <motion.div variants={slider} className="frame-1"></motion.div>
        <motion.div variants={slider} className="frame-2"></motion.div>
        <motion.div variants={slider} className="frame-3"></motion.div>
        <motion.div variants={slider} className="frame-4"></motion.div>
      </motion.div>

      <HeaderSection>
        <motion.h1 variants={fade}>Our Portfolio</motion.h1>
        <motion.p variants={fade} className="subtitle">
          Explore our photography work across different categories
        </motion.p>
      </HeaderSection>

      <CategoryFilter
        categories={portfolioCategories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {filteredItems.map((item, index) => (
        <motion.div
          key={item.url}
          className="project"
          ref={index === 1 ? element : index === 2 ? element2 : null}
          variants={index > 0 ? scrollReveal : {}}
          animate={index === 1 ? controls : index === 2 ? controls2 : ""}
          initial={index > 0 ? "hidden" : ""}
        >
          <CategoryTag>{item.category}</CategoryTag>
          <motion.h2 variants={fade}>{item.title}</motion.h2>
          <motion.p variants={fade} className="description">
            {item.description}
          </motion.p>
          <motion.div variants={lineAnimate} className="line"></motion.div>
          <Link to={item.url}>
            <motion.img variants={photoAnimate} src={item.mainImg} alt={item.title} />
          </Link>
        </motion.div>
      ))}

      {filteredItems.length === 0 && (
        <NoResults>
          <p>No projects found in this category yet.</p>
        </NoResults>
      )}

      <ScrollTop />
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 0;

  .project {
    padding-bottom: 10rem;
    position: relative;

    h2 {
      padding: 1rem 0;
      color: white;
      font-size: 2.5rem;
    }

    .description {
      color: rgba(255, 255, 255, 0.8);
      font-size: 1.2rem;
      margin: 1rem 0;
      line-height: 1.6;
    }

    .line {
      height: 0.5rem;
      background: #23d997;
      margin: 2rem 0 3rem;
    }

    img {
      width: 100%;
      height: 70vh;
      object-fit: cover;
      border-radius: 10px;
    }

    a {
      display: block;
      overflow: hidden;
      border-radius: 10px;

      &:hover img {
        transform: scale(1.05);
        transition: transform 0.5s ease;
      }
    }
  }

  .frame-1,
  .frame-2,
  .frame-3,
  .frame-4 {
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
  }
  .frame-2 {
    background: #ff8efb;
  }
  .frame-3 {
    background: #8ed2ff;
  }
  .frame-4 {
    background: #8effa0;
  }

  @media (max-width: 768px) {
    padding: 3rem 0;

    .project {
      padding-bottom: 5rem;

      h2 {
        font-size: 1.8rem;
      }

      .description {
        font-size: 1rem;
      }

      img {
        height: 50vh;
      }
    }
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem 0;

  h1 {
    font-size: 3.5rem;
    color: white;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    .subtitle {
      font-size: 1.1rem;
    }
  }
`;

const CategoryTag = styled.span`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: rgba(35, 217, 151, 0.2);
  border: 2px solid #23d997;
  border-radius: 20px;
  color: #23d997;
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const NoResults = styled.div`
  text-align: center;
  padding: 5rem 0;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.5rem;
`;

export default OurWork;

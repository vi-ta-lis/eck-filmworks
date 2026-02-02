import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { PortfolioState } from "../PortfolioState";
import Lightbox from "../components/Lightbox";

// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ProjectDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [projects] = useState(PortfolioState);
  const [project, setProject] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const currentProject = projects.filter(
      (stateProject) => stateProject.url === url
    );
    setProject(currentProject[0]);
  }, [projects, url]);

  const handleNext = () => {
    if (project) {
      setPhotoIndex((photoIndex + 1) % project.gallery.length);
    }
  };

  const handlePrevious = () => {
    if (project) {
      setPhotoIndex(
        (photoIndex + project.gallery.length - 1) % project.gallery.length
      );
    }
  };

  return (
    <>
      {project && (
        <StyledProjectDetails
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <div className="headline">
            <CategoryTag>{project.category}</CategoryTag>
            <h2>{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <img
              src={project.mainImg}
              alt={project.title}
              onClick={() => {
                setPhotoIndex(0);
                setIsLightboxOpen(true);
              }}
              style={{ cursor: "pointer" }}
            />
          </div>

          <div className="details">
            {project.details.map((detail) => (
              <DetailCard
                key={detail.title}
                title={detail.title}
                description={detail.description}
              />
            ))}
          </div>

          <div className="image-gallery">
            <h3>Project Gallery</h3>
            <div className="gallery-grid">
              {project.gallery.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`${project.title} ${index + 1}`}
                  onClick={() => {
                    setPhotoIndex(index);
                    setIsLightboxOpen(true);
                  }}
                  whileHover={{ scale: 1.05 }}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </div>
          </div>

          <BackButton onClick={() => history.push("/work")}>
            ← Back to Portfolio
          </BackButton>
        </StyledProjectDetails>
      )}

      {isLightboxOpen && project && (
        <Lightbox
          images={project.gallery}
          currentIndex={photoIndex}
          onClose={() => setIsLightboxOpen(false)}
          onNext={handleNext}
          onPrevious={handlePrevious}
          title={project.title}
        />
      )}
    </>
  );
};

const StyledProjectDetails = styled(motion.div)`
  color: white;
  padding-bottom: 5rem;

  .headline {
    min-height: 90vh;
    padding-top: 15vh;
    position: relative;
    text-align: center;

    h2 {
      font-size: 3.5rem;
      margin: 2rem 0 1rem;
      color: white;
    }

    .project-description {
      font-size: 1.3rem;
      color: rgba(255, 255, 255, 0.8);
      max-width: 800px;
      margin: 0 auto 3rem;
      line-height: 1.6;
    }

    img {
      width: 100%;
      max-width: 1200px;
      height: 70vh;
      object-fit: cover;
      border-radius: 10px;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.02);
      }
    }
  }

  .details {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
    margin: 5rem 0;
    padding: 0 2rem;
  }

  .image-gallery {
    margin: 5rem 0;
    padding: 0 2rem;

    h3 {
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 3rem;
      color: #23d997;
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;

      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 10px;
        transition: transform 0.3s ease;
      }
    }
  }

  @media (max-width: 768px) {
    .headline {
      padding-top: 10vh;

      h2 {
        font-size: 2rem;
      }

      .project-description {
        font-size: 1.1rem;
      }

      img {
        height: 50vh;
      }
    }

    .details {
      grid-template-columns: 1fr;
      gap: 2rem;
      margin: 3rem 0;
    }

    .image-gallery {
      .gallery-grid {
        grid-template-columns: 1fr;
      }
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
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const DetailCard = ({ title, description }) => {
  return (
    <StyledDetailCard>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledDetailCard>
  );
};

const StyledDetailCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2.5rem;
  border-radius: 10px;
  border: 2px solid rgba(35, 217, 151, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: #23d997;
    transform: translateY(-5px);
  }

  h3 {
    font-size: 1.5rem;
    color: #23d997;
    margin-bottom: 1rem;
  }

  .line {
    width: 60%;
    background: #23d997;
    height: 0.3rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const BackButton = styled.button`
  display: block;
  margin: 3rem auto 0;
  padding: 1rem 2.5rem;
  background: transparent;
  border: 2px solid #23d997;
  border-radius: 30px;
  color: #23d997;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #23d997;
    color: #1b1b1b;
    transform: translateY(-3px);
  }
`;

export default ProjectDetail;

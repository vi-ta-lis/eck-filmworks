import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Lightbox = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
  title = "",
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrevious();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose, onNext, onPrevious]);

  return (
    <AnimatePresence>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>

        <PrevButton
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
        >
          <FaChevronLeft />
        </PrevButton>

        <ImageContainer
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          <img src={images[currentIndex]} alt={`${title} ${currentIndex + 1}`} />
          
          <ImageInfo>
            {title && <h3>{title}</h3>}
            <p>
              {currentIndex + 1} / {images.length}
            </p>
          </ImageInfo>
        </ImageContainer>

        <NextButton
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
        >
          <FaChevronRight />
        </NextButton>
      </Overlay>
    </AnimatePresence>
  );
};

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ImageContainer = styled(motion.div)`
  max-width: 90%;
  max-height: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 100%;

    img {
      max-height: 70vh;
    }
  }
`;

const ImageInfo = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  color: white;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

const Button = styled.button`
  position: fixed;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 2rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  z-index: 10000;

  &:hover {
    background: rgba(35, 217, 151, 0.3);
    border-color: #23d997;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
`;

const CloseButton = styled(Button)`
  top: 2rem;
  right: 2rem;

  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
  }
`;

const PrevButton = styled(Button)`
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);

  &:hover {
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: 768px) {
    left: 1rem;
  }
`;

const NextButton = styled(Button)`
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);

  &:hover {
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: 768px) {
    right: 1rem;
  }
`;

export default Lightbox;

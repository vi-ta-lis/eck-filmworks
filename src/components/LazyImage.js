import React, { useState, useEffect } from "react";
import styled from "styled-components";

const LazyImage = ({ 
  src, 
  alt, 
  className,
  placeholderSrc = null,
  ...props 
}) => {
  const [imageSrc, setImageSrc] = useState(placeholderSrc || src);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <StyledImage
      src={imageSrc}
      alt={alt}
      className={className}
      isLoaded={isLoaded}
      loading="lazy"
      {...props}
    />
  );
};

const StyledImage = styled.img`
  opacity: ${props => props.isLoaded ? 1 : 0.7};
  transition: opacity 0.3s ease-in-out;
  filter: ${props => props.isLoaded ? 'none' : 'blur(10px)'};
`;

export default LazyImage;

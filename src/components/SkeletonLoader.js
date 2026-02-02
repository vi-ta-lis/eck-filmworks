import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

export const SkeletonCard = () => {
  return (
    <SkeletonWrapper>
      <SkeletonImage />
      <SkeletonTitle />
      <SkeletonText />
      <SkeletonText short />
    </SkeletonWrapper>
  );
};

export const SkeletonGrid = ({ count = 3 }) => {
  return (
    <GridWrapper>
      {[...Array(count)].map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </GridWrapper>
  );
};

const SkeletonWrapper = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 2rem;
`;

const SkeletonBase = styled.div`
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.05) 100%
  );
  background-size: 1000px 100%;
  animation: ${shimmer} 2s infinite;
  border-radius: 5px;
`;

const SkeletonImage = styled(SkeletonBase)`
  width: 100%;
  height: 300px;
  margin-bottom: 1rem;
`;

const SkeletonTitle = styled(SkeletonBase)`
  width: 70%;
  height: 30px;
  margin-bottom: 1rem;
`;

const SkeletonText = styled(SkeletonBase)`
  width: ${props => props.short ? '40%' : '100%'};
  height: 20px;
  margin-bottom: 0.5rem;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

export default SkeletonCard;

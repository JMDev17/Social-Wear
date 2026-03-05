import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: 80px; /* Account for fixed header */
`;

export const HeroBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://images.unsplash.com/photo-1594932224010-75f2a93ee5db?w=1920&q=80');
  background-size: cover;
  background-position: center;
  opacity: 0.1;
  z-index: 0;
`;

export const HeroContent = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 8rem 2rem 4rem;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 6rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    padding: 8rem 2rem 4rem;
    gap: 4rem;
    text-align: center;
  }
`;

export const HeroTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    align-items: center;
  }
`;

export const HeroSubtitle = styled(motion.p)`
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
`;

export const HeroTitle = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: min(10vw, 7rem);
  font-weight: 400;
  line-height: 1;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  text-transform: uppercase;
  letter-spacing: -0.02em;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 3.5rem;
  }
`;

export const HeroDescription = styled(motion.p)`
  font-size: 1.125rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.darkGray};
  max-width: 600px;
  font-weight: 300;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

export const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }
`;

export const PrimaryButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.25rem 3rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  
  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SecondaryButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem 3rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  border: 1px solid rgba(17, 17, 17, 0.2);
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const HeroImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  aspect-ratio: 4/5;
  overflow: visible;
  border: 1px solid ${({ theme }) => theme.colors.accent};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

export const HeroImage = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  filter: grayscale(0.2) contrast(1.1);
  transition: filter 0.5s ease;

  &:hover {
    filter: grayscale(0) contrast(1.1);
  }
`;

export const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 3rem;
  left: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const ScrollText = styled.span`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.gray};
  text-transform: uppercase;
  letter-spacing: 0.3em;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
`;

export const ScrollLine = styled(motion.div)`
  width: 1px;
  height: 80px;
  background-color: rgba(184, 153, 114, 0.3);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.accent};
    animation: scrollLine 2s infinite ease-in-out;
  }

  @keyframes scrollLine {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }
`;

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TestimonialsSection = styled.section`
  padding: 10rem 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 4rem;
`;

export const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 8rem;
`;

export const SectionSubtitle = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1.5rem;
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: 6rem;
  }
`;

export const TestimonialCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
`;

export const QuoteIcon = styled.div`
  font-size: 8rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.accent};
  opacity: 0.1;
  line-height: 1;
  position: absolute;
  top: -4rem;
  left: -2rem;
  z-index: 0;
`;

export const Rating = styled.div`
  display: flex;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.accent};
`;

export const Comment = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 300;
  font-style: italic;
  position: relative;
  z-index: 1;
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: auto;
`;

export const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 0;
  object-fit: cover;
  filter: grayscale(1);
  border: 1px solid rgba(184, 153, 114, 0.3);
`;

export const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const AuthorName = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
`;

export const AuthorRole = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.gray};
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

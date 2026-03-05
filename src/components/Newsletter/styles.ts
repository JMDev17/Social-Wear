import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NewsletterSection = styled.section`
  padding: 10rem 0;
  background-color: ${({ theme }) => theme.colors.background};
  border-top: 1px solid rgba(17, 17, 17, 0.05);
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 4rem;
  text-align: center;
`;

export const NewsletterContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const NewsletterSubtitle = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
`;

export const NewsletterTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 3.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

export const NewsletterDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: 300;
  max-width: 600px;
  margin: 0 auto;
`;

export const NewsletterForm = styled.form`
  margin-top: 2rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    border-bottom: none;
    gap: 1.5rem;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 1rem 0;
  font-size: 1rem;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 300;
  letter-spacing: 0.05em;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 0.2em;
  }

  &:focus {
    outline: none;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.2em;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover:not(:disabled) {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const NewsletterNote = styled.p`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.gray};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 1.5rem;
`;

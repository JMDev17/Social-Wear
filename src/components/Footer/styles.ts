import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 8rem 0 4rem;
`;

export const FooterContent = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 4rem 6rem;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 0 2rem 4rem;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FooterLogo = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${({ theme }) => theme.colors.white};
`;

export const FooterDescription = styled.p`
  font-size: 0.85rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.gray};
  max-width: 300px;
  font-weight: 300;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
`;

export const SocialLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.gray};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const FooterTitle = styled.h4`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 2rem;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FooterLink = styled.a`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 300;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 300;
  line-height: 1.6;

  svg {
    color: ${({ theme }) => theme.colors.accent};
    width: 14px;
    height: 14px;
  }
`;

export const FooterBottom = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  padding: 3rem 4rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    padding: 3rem 2rem 0;
  }
`;

export const Copyright = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.gray};
  letter-spacing: 0.05em;
  font-weight: 300;
`;

export const PaymentMethods = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

export const PaymentBadge = styled.span`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.gray};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 400;
`;

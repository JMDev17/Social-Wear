import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderWrapper = styled.header<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${({ $isScrolled }) =>
    $isScrolled ? 'rgba(250, 249, 246, 0.9)' : 'transparent'};
  backdrop-filter: ${({ $isScrolled }) => ($isScrolled ? 'blur(15px)' : 'none')};
  border-bottom: 1px solid ${({ $isScrolled }) =>
    $isScrolled ? 'rgba(184, 153, 114, 0.1)' : 'transparent'};
  transition: ${({ theme }) => theme.transitions.normal};
`;

export const HeaderContainer = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  padding: 1.5rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1.25rem 2rem;
  }
`;

export const Logo = styled(motion.a)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.75rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.5rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 3rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const NavLink = styled(motion.a)`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.2em;
  position: relative;
  transition: ${({ theme }) => theme.transitions.fast};

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    width: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.accent};
    transition: ${({ theme }) => theme.transitions.normal};
    transform: translateX(-50%);
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};

    &::after {
      width: 100%;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const ActionButton = styled(motion.button)`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const CartButton = styled(motion.button)`
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.65rem;
  font-weight: 600;
  padding: 0.2rem 0.4rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  min-width: 18px;
  text-align: center;
`;

export const MobileMenuButton = styled(motion.button)`
  display: none;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MobileMenu = styled(motion.div)`
  display: none;
  background-color: ${({ theme }) => theme.colors.background};
  border-top: 1px solid rgba(184, 153, 114, 0.1);
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
  }
`;

export const MobileNavLink = styled(motion.a)`
  padding: 1.25rem 2rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.15em;
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    background-color: rgba(184, 153, 114, 0.05);
    color: ${({ theme }) => theme.colors.accent};
    padding-left: 3rem;
  }
`;

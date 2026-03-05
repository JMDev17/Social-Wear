import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProductsSection = styled.section`
  padding: 8rem 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 4rem;
`;

export const SectionHeader = styled(motion.div)`
  margin-bottom: 6rem;
  max-width: 800px;
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
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
  text-transform: uppercase;
  line-height: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

export const SectionDescription = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: 300;
  line-height: 1.8;
  max-width: 600px;
`;

export const FilterContainer = styled(motion.div)`
  display: flex;
  gap: 3rem;
  margin-bottom: 5rem;
  border-bottom: 1px solid rgba(17, 17, 17, 0.1);
  padding-bottom: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 1.5rem;
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }
`;

export const FilterButton = styled(motion.button) <{ $active: boolean }>`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.gray};
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: ${({ $active }) => ($active ? '100%' : '0')};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: ${({ theme }) => theme.transitions.normal};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const ProductCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
`;

export const ProductImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4/5;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s cubic-bezier(0.19, 1, 0.22, 1);

  ${ProductCard}:hover & {
    transform: scale(1.05);
  }
`;

export const Badge = styled.div<{ $type: 'new' | 'sale' }>`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ $type, theme }) =>
    $type === 'new' ? theme.colors.accent : theme.colors.error};
  z-index: 2;
`;

export const ProductOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(17, 17, 17, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;

  ${ProductCard}:hover & {
    opacity: 1;
  }
`;

export const ProductActions = styled.div`
  display: flex;
  gap: 1rem;
  transform: translateY(20px);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);

  ${ProductCard}:hover & {
    transform: translateY(0);
  }
`;

export const ActionButton = styled(motion.button)`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid rgba(17, 17, 17, 0.1);

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex-grow: 1;
`;

export const ProductCategory = styled.span`
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: ${({ theme }) => theme.colors.gray};
`;

export const ProductName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.75rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const ProductPricing = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const OriginalPrice = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gray};
  text-decoration: line-through;
  font-weight: 300;
`;

export const ProductPrice = styled.span`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accent};
`;

export const ProductColors = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ColorDot = styled.div<{ $color: string }>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
  border: 1px solid rgba(17, 17, 17, 0.1);
  cursor: pointer;
  
  &:hover {
    transform: scale(1.3);
  }
`;

export const MoreColors = styled.span`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.gray};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

export const AddToCartButton = styled(motion.button)`
  width: 100%;
  padding: 1.25rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  margin-top: auto;

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

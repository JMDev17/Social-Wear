import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 99998;
`;

export const Sidebar = styled(motion.aside)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 450px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  z-index: 99999;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const HeaderTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ItemCount = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray};
`;

export const CloseButton = styled(motion.button)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.darkGray};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.lightGray};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.darkGray};
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem 2rem;
  height: 100%;
`;

export const EmptyIcon = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  opacity: 0.3;
  margin-bottom: 1.5rem;
`;

export const EmptyTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.75rem;
`;

export const EmptyDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 2rem;
  max-width: 300px;
`;

export const ContinueShoppingButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CartItem = styled(motion.div)`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  position: relative;
`;

export const ItemImage = styled.img`
  width: 100px;
  height: 120px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  flex-shrink: 0;
`;

export const ItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ItemName = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1.3;
`;

export const ItemOptions = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray};
`;

export const ItemPrice = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  margin-top: auto;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

export const QuantityButton = styled(motion.button)`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const QuantityDisplay = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  min-width: 30px;
  text-align: center;
`;

export const RemoveButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.darkGray};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const Footer = styled.div`
  padding: 1.5rem 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

export const SubtotalLabel = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SubtotalValue = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
`;

export const ShippingNote = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
`;

export const CheckoutButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentHover};
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

export const ContinueShoppingLink = styled.button`
  width: 100%;
  padding: 0.75rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

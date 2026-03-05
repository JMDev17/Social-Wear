'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FiShoppingBag, FiMenu, FiX, FiSearch } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';
import * as S from './styles';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems, toggleCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Coleções', href: '#colecoes' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  const totalItems = getTotalItems();

  return (
    <S.HeaderWrapper $isScrolled={isScrolled}>
      <S.HeaderContainer>
        <S.Logo
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          SOCIAL WEAR
        </S.Logo>

        <S.Nav>
          {menuItems.map((item, index) => (
            <S.NavLink
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item.label}
            </S.NavLink>
          ))}
        </S.Nav>

        <S.Actions>
          <S.ActionButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiSearch size={20} />
          </S.ActionButton>

          <S.CartButton
            onClick={toggleCart}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiShoppingBag size={20} />
            {totalItems > 0 && <S.CartBadge>{totalItems}</S.CartBadge>}
          </S.CartButton>

          <S.MobileMenuButton
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </S.MobileMenuButton>
        </S.Actions>
      </S.HeaderContainer>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <S.MobileMenu
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuItems.map((item, index) => (
              <S.MobileNavLink
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {item.label}
              </S.MobileNavLink>
            ))}
          </S.MobileMenu>
        )}
      </AnimatePresence>
    </S.HeaderWrapper>
  );
};

export default Header;

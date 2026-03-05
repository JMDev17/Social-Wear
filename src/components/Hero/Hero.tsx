'use client';

import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import * as S from './styles';

const Hero: React.FC = () => {
  const scrollToProducts = () => {
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <S.HeroSection id="home">
      <S.HeroBackground
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      />

      <S.HeroContent>
        <S.HeroTextContent>
          <S.HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Alfaiataria Contemporânea
          </S.HeroSubtitle>

          <S.HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            A Arte do
            <br />
            Bem Vestir
          </S.HeroTitle>

          <S.HeroDescription
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Descubra uma coleção onde a tradição da alfaiataria encontra o design moderno.
            Peças exclusivas criadas para o homem que busca distinção em cada detalhe.
          </S.HeroDescription>

          <S.HeroButtons
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <S.PrimaryButton
              onClick={scrollToProducts}
              whileTap={{ scale: 0.98 }}
            >
              Ver Coleção
              <FiArrowRight size={16} />
            </S.PrimaryButton>

            <S.SecondaryButton
              whileTap={{ scale: 0.98 }}
            >
              Lookbook 2024
            </S.SecondaryButton>
          </S.HeroButtons>
        </S.HeroTextContent>

        <S.HeroImageContainer
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <S.HeroImage
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1000&h=1200&q=85&fit=crop"
            alt="Homem elegante com terno de luxo"
          />
        </S.HeroImageContainer>
      </S.HeroContent>

      <S.ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <S.ScrollText>Explore</S.ScrollText>
        <S.ScrollLine />
      </S.ScrollIndicator>
    </S.HeroSection>
  );
};

export default Hero;

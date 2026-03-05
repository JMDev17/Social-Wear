'use client';

import React from 'react';
import {
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiMapPin,
  FiPhone,
  FiMail
} from 'react-icons/fi';
import * as S from './styles';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <S.FooterWrapper>
      <S.FooterContent>
        <S.FooterSection>
          <S.FooterLogo>SOCIAL WEAR</S.FooterLogo>
          <S.FooterDescription>
            A excelência na alfaiataria masculina contemporânea.
            Criando silhuetas que transmitem confiança, tradição e sofisticação desde 2010.
          </S.FooterDescription>
          <S.SocialLinks>
            <S.SocialLink href="#" whileHover={{ y: -3 }}>
              <FiInstagram size={18} />
            </S.SocialLink>
            <S.SocialLink href="#" whileHover={{ y: -3 }}>
              <FiFacebook size={18} />
            </S.SocialLink>
            <S.SocialLink href="#" whileHover={{ y: -3 }}>
              <FiTwitter size={18} />
            </S.SocialLink>
          </S.SocialLinks>
        </S.FooterSection>

        <S.FooterSection>
          <S.FooterTitle>Explorar</S.FooterTitle>
          <S.FooterLinks>
            <S.FooterLink href="#home">Início</S.FooterLink>
            <S.FooterLink href="#produtos">Coleção</S.FooterLink>
            <S.FooterLink href="#sobre">Nossa História</S.FooterLink>
            <S.FooterLink href="#newsletter">The Club</S.FooterLink>
          </S.FooterLinks>
        </S.FooterSection>

        <S.FooterSection>
          <S.FooterTitle>Serviços</S.FooterTitle>
          <S.FooterLinks>
            <S.FooterLink href="#">Alfaiataria Sob Medida</S.FooterLink>
            <S.FooterLink href="#">Consultoria de Estilo</S.FooterLink>
            <S.FooterLink href="#">Guia de Tamanhos</S.FooterLink>
            <S.FooterLink href="#">Ajustes Expressos</S.FooterLink>
          </S.FooterLinks>
        </S.FooterSection>

        <S.FooterSection>
          <S.FooterTitle>Contato</S.FooterTitle>
          <S.ContactInfo>
            <S.ContactItem>
              <FiMapPin />
              <span>Av. da Elegância, 1000 - Jardim Europa, São Paulo</span>
            </S.ContactItem>
            <S.ContactItem>
              <FiPhone />
              <span>+55 (11) 99999-9999</span>
            </S.ContactItem>
            <S.ContactItem>
              <FiMail />
              <span>atendimento@socialwear.com</span>
            </S.ContactItem>
          </S.ContactInfo>
        </S.FooterSection>
      </S.FooterContent>

      <S.FooterBottom>
        <S.Copyright>
          © {currentYear} SOCIAL WEAR. TODOS OS DIREITOS RESERVADOS.
        </S.Copyright>
        <S.PaymentMethods>
          <S.PaymentBadge>VISA</S.PaymentBadge>
          <S.PaymentBadge>MASTERCARD</S.PaymentBadge>
          <S.PaymentBadge>AMEX</S.PaymentBadge>
          <S.PaymentBadge>PIX</S.PaymentBadge>
        </S.PaymentMethods>
      </S.FooterBottom>
    </S.FooterWrapper>
  );
};

export default Footer;

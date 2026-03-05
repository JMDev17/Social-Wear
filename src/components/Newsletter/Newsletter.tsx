'use client';

import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import * as S from './styles';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    // Simulating API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <S.NewsletterSection id="newsletter">
      <S.Container>
        <S.NewsletterContent
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <S.NewsletterSubtitle>Exclusividade</S.NewsletterSubtitle>
          <S.NewsletterTitle>The Sartorial Club</S.NewsletterTitle>
          <S.NewsletterDescription>
            Inscreva-se para receber acesso antecipado a novas coleções,
            convites para eventos privados e insights sobre o universo da alfaiataria.
          </S.NewsletterDescription>

          <S.NewsletterForm onSubmit={handleSubmit}>
            <S.InputWrapper>
              <S.Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === 'loading'}
              />
              <S.SubmitButton
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                whileTap={{ scale: 0.98 }}
              >
                {status === 'loading' ? 'Enviando...' : status === 'success' ? 'Inscrito' : 'Assinar'}
                <FiArrowRight size={16} />
              </S.SubmitButton>
            </S.InputWrapper>
            <S.NewsletterNote>
              Ao assinar, você concorda com nossa política de privacidade.
            </S.NewsletterNote>
          </S.NewsletterForm>
        </S.NewsletterContent>
      </S.Container>
    </S.NewsletterSection>
  );
};

export default Newsletter;

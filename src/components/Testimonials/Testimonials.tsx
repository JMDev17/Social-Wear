'use client';

import React from 'react';
import { FaStar } from 'react-icons/fa';
import { testimonials } from '@/data/products';
import * as S from './styles';

const Testimonials: React.FC = () => {
  return (
    <S.TestimonialsSection id="sobre">
      <S.Container>
        <S.SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <S.SectionSubtitle>Vozes da Distinção</S.SectionSubtitle>
          <S.SectionTitle>Relatos de Experiência</S.SectionTitle>
        </S.SectionHeader>

        <S.TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <S.TestimonialCard
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <S.QuoteIcon>&ldquo;</S.QuoteIcon>

              <S.Rating>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </S.Rating>

              <S.Comment>{testimonial.comment}</S.Comment>

              <S.AuthorInfo>
                <S.AuthorImage src={testimonial.image} alt={testimonial.name} />
                <S.AuthorDetails>
                  <S.AuthorName>{testimonial.name}</S.AuthorName>
                  <S.AuthorRole>{testimonial.role}</S.AuthorRole>
                </S.AuthorDetails>
              </S.AuthorInfo>
            </S.TestimonialCard>
          ))}
        </S.TestimonialsGrid>
      </S.Container>
    </S.TestimonialsSection>
  );
};

export default Testimonials;

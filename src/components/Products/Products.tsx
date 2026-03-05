'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FiShoppingCart, FiEye } from 'react-icons/fi';
import { products } from '@/data/products';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import * as S from './styles';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const { addToCart, openCart } = useCart();

  const categories = [
    { id: 'todos', label: 'Tudo' },
    { id: 'terno', label: 'Ternos' },
    { id: 'camisa', label: 'Camisas' },
    { id: 'calcas', label: 'Calças' },
    { id: 'colete', label: 'Coletes' },
    { id: 'acessorios', label: 'Acessórios' },
  ];

  const filteredProducts =
    selectedCategory === 'todos'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    addToCart(product, product.sizes[0], product.colors[0]);
    openCart();
  };

  return (
    <S.ProductsSection id="produtos">
      <S.Container>
        <S.SectionHeader
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <S.SectionSubtitle>Curadoria Exclusiva</S.SectionSubtitle>
          <S.SectionTitle>Essenciais da Alfaiataria</S.SectionTitle>
          <S.SectionDescription>
            Uma seleção de peças atemporais que definem a silhueta masculina contemporânea.
            Luxo, conforto e distinção em cada fio.
          </S.SectionDescription>
        </S.SectionHeader>

        <S.FilterContainer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <S.FilterButton
              key={category.id}
              $active={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </S.FilterButton>
          ))}
        </S.FilterContainer>

        <S.ProductGrid>
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <S.ProductCard
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <S.ProductImageContainer>
                  <S.ProductImage src={product.image} alt={product.name} />

                  {product.new && <S.Badge $type="new">Lançamento</S.Badge>}
                  {product.originalPrice && (
                    <S.Badge $type="sale">Exclusivo</S.Badge>
                  )}

                  <S.ProductOverlay>
                    <S.ProductActions>
                      <S.ActionButton
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        title="Ver detalhes"
                      >
                        <FiEye size={18} />
                      </S.ActionButton>

                      <S.ActionButton
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleAddToCart(product)}
                        title="Adicionar ao carrinho"
                      >
                        <FiShoppingCart size={18} />
                      </S.ActionButton>
                    </S.ProductActions>
                  </S.ProductOverlay>
                </S.ProductImageContainer>

                <S.ProductInfo>
                  <S.ProductCategory>
                    {categories.find(c => c.id === product.category)?.label}
                  </S.ProductCategory>
                  <S.ProductName>{product.name}</S.ProductName>

                  <S.ProductPricing>
                    {product.originalPrice && (
                      <S.OriginalPrice>R$ {product.originalPrice.toFixed(0)}</S.OriginalPrice>
                    )}
                    <S.ProductPrice>R$ {product.price.toFixed(0)}</S.ProductPrice>
                  </S.ProductPricing>

                  <S.ProductColors>
                    {product.colors.map((color, i) => (
                      <S.ColorDot key={i} $color={color} title={color} />
                    ))}
                  </S.ProductColors>

                  <S.AddToCartButton
                    onClick={() => handleAddToCart(product)}
                    whileTap={{ scale: 0.98 }}
                  >
                    Adicionar à sacola
                  </S.AddToCartButton>
                </S.ProductInfo>
              </S.ProductCard>
            ))}
          </AnimatePresence>
        </S.ProductGrid>
      </S.Container>
    </S.ProductsSection>
  );
};

export default Products;

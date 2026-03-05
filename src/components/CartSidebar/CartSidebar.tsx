'use client';

import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { FiX, FiMinus, FiPlus, FiTrash2, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';
import * as S from './styles';

const CartSidebar: React.FC = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    getTotalPrice,
    getTotalItems,
  } = useCart();

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <>
      <AnimatePresence>
        {isCartOpen && (
          <>
            <S.Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeCart}
            />

            <S.Sidebar
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <S.Header>
                <S.HeaderContent>
                  <S.HeaderTitle>
                    <FiShoppingBag size={24} />
                    Meu Carrinho
                  </S.HeaderTitle>
                  <S.ItemCount>{totalItems} {totalItems === 1 ? 'item' : 'itens'}</S.ItemCount>
                </S.HeaderContent>

                <S.CloseButton
                  onClick={closeCart}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiX size={24} />
                </S.CloseButton>
              </S.Header>

              <S.Content>
                {cart.length === 0 ? (
                  <S.EmptyCart>
                    <S.EmptyIcon>
                      <FiShoppingBag size={64} />
                    </S.EmptyIcon>
                    <S.EmptyTitle>Seu carrinho está vazio</S.EmptyTitle>
                    <S.EmptyDescription>
                      Adicione produtos ao carrinho para continuar comprando
                    </S.EmptyDescription>
                    <S.ContinueShoppingButton
                      onClick={closeCart}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Continuar Comprando
                    </S.ContinueShoppingButton>
                  </S.EmptyCart>
                ) : (
                  <S.CartItems>
                    {cart.map((item, index) => (
                      <S.CartItem
                        key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <S.ItemImage src={item.image} alt={item.name} />

                        <S.ItemDetails>
                          <S.ItemName>{item.name}</S.ItemName>
                          <S.ItemOptions>
                            Tamanho: {item.selectedSize} | Cor: {item.selectedColor}
                          </S.ItemOptions>

                          <S.ItemPrice>R$ {item.price.toFixed(2)}</S.ItemPrice>

                          <S.QuantityControl>
                            <S.QuantityButton
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <FiMinus size={14} />
                            </S.QuantityButton>

                            <S.QuantityDisplay>{item.quantity}</S.QuantityDisplay>

                            <S.QuantityButton
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <FiPlus size={14} />
                            </S.QuantityButton>
                          </S.QuantityControl>
                        </S.ItemDetails>

                        <S.RemoveButton
                          onClick={() => removeFromCart(item.id)}
                          whileHover={{ scale: 1.1, color: '#f44336' }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FiTrash2 size={18} />
                        </S.RemoveButton>
                      </S.CartItem>
                    ))}
                  </S.CartItems>
                )}
              </S.Content>

              {cart.length > 0 && (
                <S.Footer>
                  <S.Subtotal>
                    <S.SubtotalLabel>Subtotal:</S.SubtotalLabel>
                    <S.SubtotalValue>R$ {totalPrice.toFixed(2)}</S.SubtotalValue>
                  </S.Subtotal>

                  <S.ShippingNote>
                    Frete e impostos calculados no checkout
                  </S.ShippingNote>

                  <S.CheckoutButton
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Finalizar Compra
                  </S.CheckoutButton>

                  <S.ContinueShoppingLink onClick={closeCart}>
                    Continuar Comprando
                  </S.ContinueShoppingLink>
                </S.Footer>
              )}
            </S.Sidebar>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CartSidebar;

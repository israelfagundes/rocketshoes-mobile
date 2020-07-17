import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import { formatPrice } from '../../util/format';
import { updateAmountRequest } from '../../store/modules/cart/actions';

import {
  Container,
  CartWrapper,
  ItemsWrapper,
  Item,
  ItemInfoWrapper,
  ItemImage,
  ItemInfo,
  ItemTitle,
  ItemPrice,
  ItemAmountInfo,
  ItemActions,
  ItemRemoveButton,
  ItemAmountDisplay,
  ItemAmountValue,
  ItemAddButton,
  ItemSubtotal,
  CheckoutWrapper,
  CheckoutLabel,
  CheckoutValue,
  CheckoutProceedButton,
  CheckoutProceedButtonText,
  NoItemsDisplay,
  NoItemsDisplayMessage,
} from './styles';

export default function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector((state) =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  function increment(product) {
    dispatch(updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      <CartWrapper>
        {cart.length !== 0 && (
          <>
            <ItemsWrapper>
              {cart.map((product) => (
                <Item key={String(product.id)}>
                  <ItemInfoWrapper>
                    <ItemImage source={{ uri: product.image }} />
                    <ItemInfo>
                      <ItemTitle>{product.title}</ItemTitle>
                      <ItemPrice>{product.priceFormatted}</ItemPrice>
                    </ItemInfo>
                  </ItemInfoWrapper>
                  <ItemAmountInfo>
                    <ItemActions>
                      <ItemRemoveButton onPress={() => decrement(product)}>
                        <Icon name="minus-circle" color="#7159c1" size={23} />
                      </ItemRemoveButton>
                      <ItemAmountDisplay>
                        <ItemAmountValue>{product.amount}</ItemAmountValue>
                      </ItemAmountDisplay>
                      <ItemAddButton onPress={() => increment(product)}>
                        <Icon name="plus-circle" color="#7159c1" size={23} />
                      </ItemAddButton>
                    </ItemActions>
                    <ItemSubtotal>{product.subtotal}</ItemSubtotal>
                  </ItemAmountInfo>
                </Item>
              ))}
            </ItemsWrapper>
            <CheckoutWrapper>
              <CheckoutLabel>Total</CheckoutLabel>
              <CheckoutValue>{total}</CheckoutValue>
              <CheckoutProceedButton>
                <CheckoutProceedButtonText>
                  Finalizar compra
                </CheckoutProceedButtonText>
              </CheckoutProceedButton>
            </CheckoutWrapper>
          </>
        )}
        {cart.length === 0 && (
          <NoItemsDisplay>
            <Icon2 name="cart-off" color="#eee" size={200} />
            <NoItemsDisplayMessage>
              Seu carrinho está vazio :(
            </NoItemsDisplayMessage>
          </NoItemsDisplay>
        )}
      </CartWrapper>
    </Container>
  );
}

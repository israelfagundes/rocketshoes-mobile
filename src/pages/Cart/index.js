import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

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

const Cart = ({ cart, updateAmount, removeFromCart, total }) => {
  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
    if (product.amount === 1) {
      removeFromCart(product.id);
    }
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
};

const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

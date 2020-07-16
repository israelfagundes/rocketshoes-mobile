import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  CartWrapper,
  ItemWrapper,
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

const Cart = () => {
  return (
    <Container>
      <CartWrapper>
        {/**
        <ItemWrapper>
          <ItemInfoWrapper>
            <ItemImage />
            <ItemInfo>
              <ItemTitle>Tênis de Caminhada Leve Confortável</ItemTitle>
              <ItemPrice>R$ 179,90</ItemPrice>
            </ItemInfo>
          </ItemInfoWrapper>
          <ItemAmountInfo>
            <ItemActions>
              <ItemRemoveButton>
                <Icon name="minus-circle" color="#7159c1" size={23} />
              </ItemRemoveButton>
              <ItemAmountDisplay>
                <ItemAmountValue>3</ItemAmountValue>
              </ItemAmountDisplay>
              <ItemAddButton>
                <Icon name="plus-circle" color="#7159c1" size={23} />
              </ItemAddButton>
            </ItemActions>
            <ItemSubtotal>R$578,80</ItemSubtotal>
          </ItemAmountInfo>
        </ItemWrapper>

        <ItemWrapper>
          <ItemInfoWrapper>
            <ItemImage />
            <ItemInfo>
              <ItemTitle>Tênis de Caminhada Leve Confortável</ItemTitle>
              <ItemPrice>R$ 179,90</ItemPrice>
            </ItemInfo>
          </ItemInfoWrapper>
          <ItemAmountInfo>
            <ItemActions>
              <ItemRemoveButton>
                <Icon name="minus-circle" color="#7159c1" size={23} />
              </ItemRemoveButton>
              <ItemAmountDisplay>
                <ItemAmountValue>3</ItemAmountValue>
              </ItemAmountDisplay>
              <ItemAddButton>
                <Icon name="plus-circle" color="#7159c1" size={23} />
              </ItemAddButton>
            </ItemActions>
            <ItemSubtotal>R$578,80</ItemSubtotal>
          </ItemAmountInfo>
        </ItemWrapper>

        <ItemWrapper>
          <ItemInfoWrapper>
            <ItemImage />
            <ItemInfo>
              <ItemTitle>Tênis de Caminhada Leve Confortável</ItemTitle>
              <ItemPrice>R$ 179,90</ItemPrice>
            </ItemInfo>
          </ItemInfoWrapper>
          <ItemAmountInfo>
            <ItemActions>
              <ItemRemoveButton>
                <Icon name="minus-circle" color="#7159c1" size={23} />
              </ItemRemoveButton>
              <ItemAmountDisplay>
                <ItemAmountValue>3</ItemAmountValue>
              </ItemAmountDisplay>
              <ItemAddButton>
                <Icon name="plus-circle" color="#7159c1" size={23} />
              </ItemAddButton>
            </ItemActions>
            <ItemSubtotal>R$578,80</ItemSubtotal>
          </ItemAmountInfo>
        </ItemWrapper>
         
        <CheckoutWrapper>
          <CheckoutLabel>Total</CheckoutLabel>
          <CheckoutValue>R$1647,69</CheckoutValue>
          <CheckoutProceedButton>
            <CheckoutProceedButtonText>
              Finalizar compra
            </CheckoutProceedButtonText>
          </CheckoutProceedButton>
        </CheckoutWrapper>
        */}
        <NoItemsDisplay>
          <Icon2 name="cart-off" color="#eee" size={200} />
          <NoItemsDisplayMessage>
            Seu carrinho está vazio :(
          </NoItemsDisplayMessage>
        </NoItemsDisplay>
      </CartWrapper>
    </Container>
  );
};

export default Cart;

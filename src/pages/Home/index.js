import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import { addToCartRequest } from '../../store/modules/cart/actions';

import {
  Container,
  ItemList,
  ItemWrapper,
  ItemImage,
  ItemTitle,
  ItemPrice,
  ItemAddButton,
  IconWrapper,
  Amount,
  ItemAddButtonText,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector((state) =>
    state.cart.reduce((amountSum, product) => {
      amountSum[product.id] = product.amount;
      return amountSum;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(addToCartRequest(id));
  }
  return (
    <Container>
      <ItemList
        data={products}
        keyExtractor={(product) => String(product.id)}
        renderItem={({ item }) => (
          <ItemWrapper>
            <ItemImage source={{ uri: item.image }} />
            <ItemTitle>{item.title}</ItemTitle>
            <ItemPrice>{item.priceFormatted}</ItemPrice>
            <ItemAddButton>
              <IconWrapper>
                <Icon name="shopping-bag" color="#fff" size={18} />
                <Amount>{amount[item.id] || '0'}</Amount>
              </IconWrapper>
              <ItemAddButtonText onPress={() => handleAddProduct(item.id)}>
                Adicionar
              </ItemAddButtonText>
            </ItemAddButton>
          </ItemWrapper>
        )}
      />
    </Container>
  );
}

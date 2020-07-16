import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import api from '../../services/api';

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

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    this.setState({ products: response.data });
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <ItemList
          data={products}
          keyExtractor={(product) => product.id}
          renderItem={({ item }) => (
            <ItemWrapper>
              <ItemImage source={{ uri: item.image }} />
              <ItemTitle>{item.title}</ItemTitle>
              <ItemPrice>{item.price}</ItemPrice>
              <ItemAddButton>
                <IconWrapper>
                  <Icon name="shopping-bag" color="#fff" size={18} />
                  <Amount>3</Amount>
                </IconWrapper>
                <ItemAddButtonText>Adicionar</ItemAddButtonText>
              </ItemAddButton>
            </ItemWrapper>
          )}
        />
      </Container>
    );
  }
}

export default Home;

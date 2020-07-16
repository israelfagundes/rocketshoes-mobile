import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Feather';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

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

    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct(product) {
    const { addToCart } = this.props;

    addToCart(product);
  }

  render() {
    const { products } = this.state;
    const { amount } = this.props;

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
                <ItemAddButtonText onPress={() => this.handleAddProduct(item)}>
                  Adicionar
                </ItemAddButtonText>
              </ItemAddButton>
            </ItemWrapper>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);

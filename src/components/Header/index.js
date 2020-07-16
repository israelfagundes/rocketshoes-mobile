import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';

import logo from '../../assets/logo.png';

import { Container, Logo, Cart, Badge, Amount } from './styles';

const Header = ({ navigation, cartSize }) => {
  return (
    <Container>
      <Logo source={logo} />
      <Cart onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-cart" size={24} color="#fff" />
        {cartSize !== 0 && (
          <Badge>
            <Amount>{cartSize}</Amount>
          </Badge>
        )}
      </Cart>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);

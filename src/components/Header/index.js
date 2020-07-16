import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import logo from '../../assets/logo.png';

import { Container, Logo, Cart, Badge, Amount } from './styles';

const Header = ({ navigation }) => {
  return (
    <Container>
      <Logo source={logo} />
      <Cart onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-cart" size={24} color="#fff" />
        <Badge>
          <Amount>3</Amount>
        </Badge>
      </Cart>
    </Container>
  );
};

export default Header;

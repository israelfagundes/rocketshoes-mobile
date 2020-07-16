import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px 20px;
  background: #141419;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  height: 24px;
  width: 185px;
`;

export const Cart = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
`;

export const Badge = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: #7159c1;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -10px;
  right: 5px;
`;

export const Amount = styled.Text`
  color: #fff;
  font-size: 12px;
`;

import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
  background: #191920;
  padding: 20px;
`;

export const ItemList = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const ItemWrapper = styled.View`
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  max-width: 220px;
  max-height: 380px;
  margin-right: 20px;
`;

export const ItemImage = styled.Image`
  width: 200px;
  height: 200px;
  background-color: #999;
  border-radius: 4px;
`;

export const ItemTitle = styled.Text`
  font-size: 16px;
  color: #333;
  margin-top: auto;
  padding: 0 5px;
`;

export const ItemPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
  padding: 0 5px;
  margin-top: 5px;
`;

export const ItemAddButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin-top: 15px;
  flex-direction: row;
  background: #7159c1;
  border-radius: 4px;
`;

export const IconWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  background: ${darken(0.2, '#7159c1')};
  padding: 10px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const Amount = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-left: 5px;
`;

export const ItemAddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  padding: 10px 0;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
`;

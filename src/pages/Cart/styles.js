import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #191920;
  padding: 20px;
`;

const windowHeight = Dimensions.get('window').height;
const intParsedHeight = parseInt(windowHeight, 10);
const cartWrapperHeight = intParsedHeight - intParsedHeight * 0.08;

export const CartWrapper = styled.View`
  background: #fff;
  padding: 0 10px 10px;
  border-radius: 4px;
  max-height: ${`${parseInt(cartWrapperHeight, 10)}px`};
`;

export const ItemsWrapper = styled.ScrollView``;

export const Item = styled.View`
  margin-top: 15px;
`;

export const ItemInfoWrapper = styled.View`
  flex-direction: row;
`;

export const ItemImage = styled.Image`
  width: 80px;
  height: 80px;
  background: #ccc;
`;

export const ItemInfo = styled.View`
  flex: 1;
  padding: 10px;
`;

export const ItemTitle = styled.Text`
  font-size: 14px;
  color: #333;
`;

export const ItemPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: auto;
`;

export const ItemAmountInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #eee;
  border-radius: 4px;
  padding: 0 10px;
  margin-top: 10px;
  min-height: 40px;
`;

export const ItemActions = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ItemAmountDisplay = styled.View`
  background: #fff;
  height: 26px;
  width: 51px;
  border-radius: 4px;
  border: 1px #ddd;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

export const ItemAmountValue = styled.Text`
  color: #666;
  font-size: 14px;
`;

export const ItemRemoveButton = styled.TouchableOpacity``;

export const ItemAddButton = styled.TouchableOpacity``;

export const ItemSubtotal = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const CheckoutWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const CheckoutLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #999;
  text-transform: uppercase;
`;

export const CheckoutValue = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const CheckoutProceedButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin-top: 30px;
  background: #7159c1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 4px;
`;

export const CheckoutProceedButtonText = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;

export const NoItemsDisplay = styled.View`
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const NoItemsDisplayMessage = styled.Text`
  position: absolute;
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  color: #666;
`;

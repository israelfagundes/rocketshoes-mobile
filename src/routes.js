import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';

import Home from './pages/Home';
import Cart from './pages/Cart';

import { navigationRef } from './services/rootNavigation';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerMode: 'screen',
          header: ({ navigation }) => {
            return <Header navigation={navigation} />;
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

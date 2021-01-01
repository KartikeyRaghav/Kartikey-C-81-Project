import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import ExchangeScreen from '../screens/ExchangeScreen';
import { FontAwesome5 } from 'react-native-vector-icons';

export const AppTabNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Exchange: { screen: ExchangeScreen },
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, color }) => {
        const routeName = navigation.state.routeName;
        let iconName;
        if (routeName === "Home") {
          if ((iconName = focused)) {
            color = 'blue';
          }
          return (
            <FontAwesome5 name="home" size={30} color={color} />
          );

        }
        else if (routeName === "Exchange") {
          if ((iconName = focused)) {
            color = 'red';
          }
          return (
            <FontAwesome5
              name="exchange-alt"
              size={30}
              color={color}
            />
          );

        }
      }
    })
  })
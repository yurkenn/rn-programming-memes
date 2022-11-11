import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/screen/Home';
import Favorites from './src/screen/Favorites';
import Creator from './src/screen/Creator';

import Icon from 'react-native-vector-icons/MaterialIcons';

import store from './src/redux/store';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: '#e91e63',
              tabBarInactiveTintColor: '#000',
              tabBarStyle: {
                backgroundColor: '#fff',
                borderTopColor: 'transparent',
                elevation: 0,
              },
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
                color: '#000',
              },
            }}>
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarIcon: ({color, size}) => (
                  <Icon name="home" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Favorites"
              component={Favorites}
              options={{
                tabBarIcon: ({color, size}) => (
                  <Icon name="info" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Creator"
              component={Creator}
              options={{
                tabBarIcon: ({color, size}) => (
                  <Icon name="person" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;

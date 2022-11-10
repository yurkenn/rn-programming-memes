import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/screen/Home';
import About from './src/screen/About';
import Creator from './src/screen/Creator';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
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
          name="About"
          component={About}
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
  );
};

export default App;

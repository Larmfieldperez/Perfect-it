import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Record from './Record';
import Input from './Input';

const Tab = createBottomTabNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color}) => {
            let iconName;

            if (route.name === 'Input') {
              iconName = 'plus';
            }
            if (route.name === 'Recording') {
              iconName = 'microphone';
            }

            return <Icon name={iconName} size={24} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#DA2196',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Input" component={Input} />
        <Tab.Screen name="Recording" component={Record} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Record from './components/Record';
import Input from './components/Input';

const Tab = createBottomTabNavigator();


function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={ ({route}) => ({
          tabBarIcon: ({focused, color}) =>{
            let iconName;

            if (route.name === 'Input') {
              iconName = 'plus';
            }
            if (route.name === 'Recording') {
              iconName = 'microphone';
            }

            return <Icon name={iconName} size={24} color={color} />;
          }
        })}
        tabBarOptions={{
          activeTintColor: 'purple',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Input" component={Input} />
        <Tab.Screen name="Recording" component={Record} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
});

export default App;

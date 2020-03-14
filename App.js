import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Record from './components/Record';
import Input from './components/Input'

const Tab = createBottomTabNavigator();

import Header from './components/Header';

function Home() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Input" component={Input} />
        <Tab.Screen name="Recording" component={Record} />
      </Tab.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>hello??</Text>
    // </View>
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

import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

import Voice from 'react-native-voice';

class Record extends React.Component {
  constructor() {
    super();
    this.state = {
      result: [],
      listening: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>take 2 bb</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D1FFF1',
  },
  transcript: {
    textAlign: 'center',
    color: '#B0171F',
    marginBottom: 1,
    top: '400%',
  },
});

export default Record;

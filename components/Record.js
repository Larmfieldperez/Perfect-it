import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

import Voice from 'react-native-voice';

class Record extends React.Component {
  constructor() {
    super();
    this.state = {
      recognized: '',
      started: '',
      results: [],
    };
    Voice.onSpeechStart = this.onSpeechStart.bind(this);
    Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);

    this.checkAvailability =  this.checkAvailability.bind(this);
  }

  async _startRecognition(e) {
    this.setState({
      recognized: '',
      started: '',
      results: [],
    });
    try {
      await Voice.start('en-US');
      console.log('recognition begun');
      console.log('event, ', e)
    } catch (e) {
      console.error(e);
    }
  }

  onSpeechStart(e) {
    console.log('speech started');
    this.setState({
      started: '√',
    });
    console.log('event, ', e)
  }
  onSpeechRecognized(e) {
    console.log('speech recognized');
    this.setState({
      recognized: '√',
    });
  }
  onSpeechResults(e) {
    console.log('speech results')
    this.setState({
      results: e.value,
    });
  }

  async checkAvailability(){
    console.log('availability?');
    await console.log(Voice.isAvailable());
  }

  render() {
    return (
      <View style={styles.container}>
      <View>
        <Text style={styles.transcript}>Transcript?</Text>
        {this.state.results.map((result, index) => <Text style={styles.transcript}> {result}</Text>
        )}

        <Button onPress={this.checkAvailability} title="check">check</Button>

        <Button style={styles.transcript}
        onPress={this._startRecognition.bind(this)}
        title="Start" />

      </View>
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

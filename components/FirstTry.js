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
    Voice._onSpeechStart = this.onSpeechStart.bind(this);
    // Voice._onSpeechEnd = this.endListening.bind(this)

    Voice._onSpeechRecognized = this.onSpeechRecognized.bind(this);
    Voice._onSpeechResults = this.onSpeechResults.bind(this);

    this.checkAvailability = this.checkAvailability.bind(this);
    // this.endListening = this.endListening.bind(this);
  }

  async startRecognition(evt) {
    this.setState({
      recognized: '',
      started: '',
      results: [],
    });
    try {

      const speak = await Voice.start('en-US');
      console.log('recognition begun');
      console.log('speak ', speak)

    } catch (evt) {
      console.error(evt);
    }
  }

  onSpeechStart(evt) {
    console.log('speech started');
    this.setState({
      started: '√',
    });

    console.log(this.state);
  }

  // onSpeechEnd(evt) {

  // }

  onSpeechRecognized(evt) {
    console.log('speech recognized');
    this.setState({
      recognized: '√',
    });
  }
  onSpeechResults(evt) {
    console.log('speech results');
    this.setState({
      results: evt.value,
    });
  }

  async endListening() {
    await console.log(Voice.stop());

    console.log('stopped');
  }
  // onSpeechEnd(evt){
  //   console.log('speech is over');
  // }

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
        onPress={this.startRecognition.bind(this)}
        title="Start" />

        <Button style={styles.transcript}
        onPress={this.stopListening}
        title="STOP" />

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

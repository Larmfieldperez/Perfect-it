/* eslint-disable no-alert */
import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

import Voice from 'react-native-voice';

class Record extends React.Component {
  constructor() {
    super();
    this.state = {
      result: '',
      listening: false,
    };
    this.startRecording = this.startRecording.bind(this);
    Voice.onSpeechResults = this.recordingResults.bind(this);
    this.stopRecording = this.stopRecording.bind(this);
    Voice.onSpeechEnd = this.onSpeechEnd.bind(this);
  }

  startRecording() {
    console.log('starting');
    Voice.start('en-us');
    this.setState({
      listening: true,
    });
  }

  recordingResults(res) {
    console.log('in recording results');

    console.log('unstringified res');
    console.log(res.value);
    this.setState({
      result: res.value[0],
    });
  }

  stopRecording() {
    console.log('stop recording button pressd');

    Voice.stop();
    this.setState({
      listening: false,
    });

    console.log('ended');
    console.log(this.state);
  }

  onSpeechEnd() {
    //this never seems to run??? that's ok
    console.log('in on speech end, setting state to be...');
    this.setState({
      listening: false,
    });
    console.log(this.state);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>take 2 bb</Text>
        <Button
          title="START"
          onPress={this.startRecording}
          style={styles.button}
        />
        <Button
          title="STOP"
          onPress={this.stopRecording}
          style={styles.button}
        />
        <Text>Transcription?</Text>
        <Text>{this.state.result}</Text>
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

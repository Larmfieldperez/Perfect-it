/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

import {connect} from 'react-redux';

import Voice from 'react-native-voice';

class Record extends React.Component {
  constructor() {
    super();
    this.state = {
      result: '',
      listening: false,
      // forbidden: ['wiggle', 'hey'],
      //should be located in props now
      saidCount: 0,
    };
    this.startRecording = this.startRecording.bind(this);
    Voice.onSpeechResults = this.recordingResults.bind(this);
    this.stopRecording = this.stopRecording.bind(this);
    Voice.onSpeechEnd = this.onSpeechEnd.bind(this);
    this.checkTranscription = this.checkTranscription.bind(this);
  }

  checkTranscription() {
    console.log('in check transcript');
    const transcript = this.state.result.split(' ');
    const forbidden = this.state.forbidden;

    let newCount = 0;

    console.log('split transcript ', transcript);
    transcript.forEach(wrd => {
      wrd = wrd.toLowerCase();
      if (forbidden.includes(wrd)) newCount++;
    });

    console.log('setting count in state');
    this.setState({
      saidCount: newCount,
    });
  }

  startRecording() {
    console.log('starting');
    Voice.start('en-us');
    this.setState({
      result: '',
      listening: true,
      saidCount: 0,
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
    console.log('state after end ', this.state);
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
    const forbiddenWords = this.props.forbidden;

    console.log('in render in record.js');
    console.log('props', this.props);

    return (
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold'}}>current no-no words:</Text>
        <Text style={{color: 'red'}}>{forbiddenWords}</Text>

        <Button
          title="START"
          onPress={() => {
            if (!this.state.listening) this.startRecording();
            else alert("hey you're already recording!");
          }}
          style={styles.button}
        />
        <Button
          title="STOP"
          onPress={() => {
            if (this.state.listening) {
              this.stopRecording();

              console.log('checking');
              this.checkTranscription();
            } else alert("hey there's no current recording to stop");
          }}
          style={styles.button}
        />

        <Text>Transcription?</Text>
        <Text>{this.state.result}</Text>
        <Text>word count:</Text>
        <Text>{this.state.saidCount}</Text>
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

const mapState = state => ({
  forbidden: [...state.words],
});
//this.props.forbidden = the words put on the redux state

//might need a dispatch to fetch the words from the state on press of the start button in case there were any updates

// export default Record;
export default connect(mapState, null)(Record);

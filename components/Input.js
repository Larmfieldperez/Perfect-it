/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, View, Text, StyleSheet} from 'react-native';

import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

import TagInput from 'react-native-tags-input';

const deleteIcon = <Icon1 name="x-circle" size={13} color={'#428C76'} />;

const addIcon = <Icon2 name="playlist-add" size={30} color={'gray'} />;

export class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: {
        tag: '',
        tagsArray: ['peep'],
      },
    };
  }

  updateTagState = state => {
    console.log('hi', state);

    //somehow now allow an existing word to be added
    this.setState({
      tags: state,
    });
  };

  render() {
    return (
      <View style={styles.container}>

        <TagInput
          updateState={this.updateTagState}
          tags={this.state.tags}
          placeholder="enter your forbidden words here"
          label="Press space to add a word!"
          labelStyle={{color: 'gray', textAlign: 'right'}}
          leftElement={addIcon}
          leftElementContainerStyle={{marginLeft: 3}}
          deleteElement={deleteIcon}
          containerStyle={{width: Dimensions.get('window').width - 40}}
          inputContainerStyle={[styles.textInput, {backgroundColor: '#D1FFF1'}]}
          inputStyle={{color: this.state.tagsText}}
          onFocus={() => this.setState({tagsColor: 'yellow', tagsText: 'gray'})}
          onBlur={() => this.setState({tagsColor: 'gray', tagsText: 'gray'})}
          autoCorrect={false}
          tagStyle={styles.tag}
          tagTextStyle={styles.tagText}
          keysForTag={' '}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D1FFF1',
  },
  textInput: {
    height: 40,
    borderColor: '#D1FFF1',
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 5,
    padding: 3,
  },
  tag: {
    backgroundColor: '#D1FFF1',
    borderColor: '#D1FFF1',
    // borderBottomColor: '#428C76',
    // borderRadius: 0,
  },
  tagText: {
    color: '#428C76',
  },
  // tagInput: {
  //   alignSelf: 'center',
  //   backgroundColor: 'red',
  //   width: 300,
  //   color: 'white',
  //   padding: 10
  // },
});

export default Input;

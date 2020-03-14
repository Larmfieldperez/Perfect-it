import React from 'react';
import {Dimensions, View, Text, StyleSheet} from 'react-native';

// import Icon from 'react-native-vector-icons';
import TagInput from 'react-native-tags-input';

// const deleteIcon = <Icon name="x-circle" size={15} color="#428C76" />;

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

    // if (state.tagsArray.includes(state.tag)){
    //   alert('hey you already added this word!')
    // } else {
    this.setState({
      tags: state,
    });
    // }
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <TagInput
          style={styles.tagInput}
          updateState={this.updateTagState}
          tags={this.state.tags}
          /> */}

        <TagInput
          updateState={this.updateTagState}
          tags={this.state.tags}
          placeholder="enter your forbidden words here"
          label="Press space to add a word!"
          labelStyle={{color: 'gray', textAlign: 'right'}}
          // leftElement={
          //   <Icon name={'x-circle'} size={30} color={'gray'} />
          // }
          leftElementContainerStyle={{marginLeft: 3}}
          // deleteElement={deleteIcon}
          containerStyle={{width: Dimensions.get('window').width - 40}}
          inputContainerStyle={[styles.textInput, {backgroundColor: '#D1FFF1'}]}
          inputStyle={{color: this.state.tagsText}}
          onFocus={() => this.setState({tagsColor: 'yellow', tagsText: 'gray'})}
          onBlur={() => this.setState({tagsColor: 'gray', tagsText: 'gray'})}
          autoCorrect={false}
          // deletElement={color={}}
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
  // wordBox: {
  //   flex: 2,
  //   borderColor: 'black',
  //   borderWidth: 2
  // }
});

export default Input;

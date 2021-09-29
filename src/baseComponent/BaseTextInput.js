/**
 *  * Created by Zhourundong on 2021-09-24.
 */
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const TAG = 'BaseTextInput ';
let initValue = '';
export default class BaseTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue,
    };
    console.log(TAG, 'construct----' + props);
    console.log(props);
    initValue = props.defaultValue;
  }

  componentDidMount() {
    console.log(TAG + 'componentDidMount', this.props.onHandleFunc);
    console.log(this.props);
    this.props.onHandleFunc(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(TAG + 'componentDidUpdate');
  }

  _onChange = (value) => {
    this.setState({ value });
  };

  static getDerivedStateFromProps(props, state) {
    console.log(TAG + 'props, state: ', props, state);
    if (
      props.defaultValue !== state.value &&
      initValue !== props.defaultValue
    ) {
      return { value: props.defaultValue };
    }
    return null;
  }

  reset(newValue) {
    this.setState({ value: newValue });
  }

  render() {
    console.log(TAG + 'render=---');
    console.log(this.props);
    return (
      <View style={styleSheets.container}>
        <TextInput
          style={styleSheets.textInput}
          value={this.state.value}
          onChangeText={(e) => this._onChange(e)}
        />
      </View>
    );
  }
}

const styleSheets = StyleSheet.create({
  container: {
    flex: 0.3,
    height: 80,
    width: 300,
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

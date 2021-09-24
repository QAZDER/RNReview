/**
 *  * Created by Zhourundong on 2021-09-23.
 */
import React from 'react';
import { View, Text } from 'react-native';

const TAG = 'BaseText ';
export default class BaseText extends React.Component {
  constructor(props) {
    super(props);
    console.log(TAG + 'constructor: ', props);
    this.state = {
      content: this.props.content,
    };
  }

  // componentWillMount() {
  //   console.log(TAG + 'componentWillMount...');
  // }

  componentDidMount() {
    console.log(TAG + 'componentDidMount');
  }

  static getDerivedStateFromProps(props, state) {
    console.log(TAG, 'getDerivedStateFromProps, props, state: ', props, state);
    return {
      content: props.content,
    };
  }

  // componentWillReceiveProps(nextProps, nextContext) {
  //   console.log(
  //     TAG,
  //     'componentWillReceiveProps, nextProps: ',
  //     nextProps,
  //     'nextContext: ',
  //     nextContext,
  //   );
  //   this.setState({ content: nextProps.content });
  // }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   console.log(
  //     TAG,
  //     'shouldComponentUpdate ',
  //     'nextProps: ',
  //     nextProps,
  //     ' nextState: ',
  //     nextState,
  //     ' nextContext: ',
  //     nextContext,
  //   );
  //   // return nextProps.content !== this.props.content;
  //   return false;

  render() {
    console.log(TAG + 'render');
    return (
      <View>
        <Text>{this.state.content}</Text>
      </View>
    );
  }
}

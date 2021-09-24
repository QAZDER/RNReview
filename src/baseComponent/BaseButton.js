/**
 *  * Created by Zhourundong on 2021-09-23.
 */
import React from 'react';
import { View, Button } from 'react-native';

const TAG = 'baseButton ';
export default class baseButton extends React.Component {
  constructor(props) {
    super(props);
    console.log(TAG + 'constructor: ', props);
    this.state = {
      title: this.props.title,
    };
  }

  componentWillMount() {
    console.log(TAG + 'componentWillMount');
  }

  componentDidMount() {
    console.log(TAG + 'componentDidMount');
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log(TAG, 'componentWillReceiveProps');
  }

  render() {
    console.log(TAG + 'render');
    return (
      <View>
        <Button title={this.state.title} onPress={() => this.props.onClick()} />
      </View>
    );
  }
}

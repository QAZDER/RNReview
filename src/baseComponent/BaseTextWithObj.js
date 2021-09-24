/**
 *  * Created by Zhourundong on 2021-09-24.
 */
import React from 'react';
import { View, Text } from 'react-native';

export default class BaseTextWithObj extends React.Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextProps.item.value !== this.props.item.value;
    // return nextProps.item !== this.props.item;
  }

  render() {
    return (
      <View>
        <Text>{this.props.item.value}</Text>
      </View>
    );
  }
}

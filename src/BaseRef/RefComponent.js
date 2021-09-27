/**
 *  * Created by Zhourundong on 2021-09-27.
 */
import React from 'react';
import { View, Text, Button } from 'react-native';

const RefComponent = React.forwardRef((props = { title: '' }, ref) => {
  return (
    <View>
      <Text>{props.children}</Text>
      <Button title={props.title} onPress={() => console.log(1)} />
    </View>
  );
});

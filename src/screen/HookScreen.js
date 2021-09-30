/**
 *  * Created by Zhourundong on 2021-09-29.
 */
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

export default function HookScreen() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  console.log(1111);

  // componentDidMount, componentDidUpdate, componentWillUnmount
  useEffect(() => {
    console.log('useEffect: ');
    return () => {
      console.log('componentWillUnmount');
    };
  }, [otherCount]);

  return (
    <View>
      <Text>count is {count}</Text>
      <Button title={'add count'} onPress={() => setCount(count + 1)} />
      <Text>count is {otherCount}</Text>
      <Button
        title={'add count'}
        onPress={() => setOtherCount(otherCount + 1)}
      />
    </View>
  );
}

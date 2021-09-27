/**
 *  * Created by Zhourundong on 2021-09-27.
 */
import React from 'react';
import { View, Button } from 'react-native';

const BaseButtonFunc = ({ onRef }) => {
  console.log('onRef: ', onRef);
  const alert = () => {
    console.log('alert');
  };

  return (
    <View>
      <Button
        ref={onRef}
        title={'BaseButtonFunc'}
        onPress={() => console.log(1)}
      />
    </View>
  );
};

export default BaseButtonFunc;

/**
 *  * Created by Zhourundong on 2021-09-27.
 */
import React from 'react';
import { View, Button } from 'react-native';

const BaseButtonFunc = ({ title = 'BaseButtonFunc', onRef }) => {
  // console.log('title: ', props);
  const alert = () => {
    console.log('alert');
  };

  return (
    <View>
      <Button
        // ref={onRef}
        title={title}
        onPress={() => console.log(1)}
      />
    </View>
  );
};

export default BaseButtonFunc;

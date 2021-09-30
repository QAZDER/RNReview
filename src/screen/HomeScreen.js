/**
 *  * Created by Zhourundong on 2021-09-29.
 */
import React from 'react';
import { View, StyleSheet, Button, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
export default function HomeScreen({ route, navigation }) {
  const navigateScreen = (pages, params) => {
    navigation.navigate(pages, params);
  };
  return (
    <View style={styleSheets.container}>
      <Button
        style={styleSheets.button}
        title={'view hook state'}
        onPress={() => navigateScreen('Hook')}
      />
    </View>
  );
}

const styleSheets = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    width: width / 3,
    height: 50,
  },
});

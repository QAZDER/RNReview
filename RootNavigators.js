/**
 *  * Created by Zhourundong on 2021-09-29.
 */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screen/HomeScreen';
import HookScreen from './src/screen/HookScreen';
import ComponentLifeCycleScreen from './src/screen/ComponentLifeCycleScreen';

const StackNavigator = createNativeStackNavigator();

const RootNavigators = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name={'Home'} component={HomeScreen} />
      <StackNavigator.Screen name={'Hook'} component={HookScreen} />
      <StackNavigator.Screen
        name={'ComponentLifeCycle'}
        component={ComponentLifeCycleScreen}
      />
    </StackNavigator.Navigator>
  );
};

export default RootNavigators;

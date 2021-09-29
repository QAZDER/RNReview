/**
 *  * Created by Zhourundong on 2021-09-28.
 */
import React from 'react';
import { View, Text } from 'react-native';

const DataSource = {};
function WithSubscription(WrappedComponent, selectedData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      console.log('WithSubscription, props: ', props);
      this.state = {
        // data: selectedData(DataSource, props),
        data: '112',
      };
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}

class Test extends React.Component {
  constructor(props) {
    super(props);
    console.log('test: props: ', props);
  }

  render() {
    return (
      <View>
        <Text>123</Text>
      </View>
    );
  }
}

const withTest = WithSubscription(Test, () => console.log(1));

class HOComponent extends React.Component {
  render() {
    return (
      <View>
        <withTest />
      </View>
    );
  }
}

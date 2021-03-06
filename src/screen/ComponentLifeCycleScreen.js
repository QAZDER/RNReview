/**
 *  * Created by Zhourundong on 2021-09-29.
 */
import React from 'react';
import { View } from 'react-native';

import BaseButton from '../baseComponent/BaseButton';
import BaseText from '../baseComponent/BaseText';
import BaseTextWithObj from '../baseComponent/BaseTextWithObj';
import BaseTextInput from '../baseComponent/BaseTextInput';
import BaseButtonFunc from '../baseComponent/BaseButtonFunc';

const TAG = 'ComponentLifeCycle';
export default class ComponentLifeCycleScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log(TAG, 'constructor: ', props);
    this.state = {
      content: 'BaseText',
      title: 'click',
      originText: 'origin',
      textValue: '123@',
      id: 123,
      arr: [1, 2, 3],
      arr1: [{ value: 1 }, { value: 2 }, { value: 3 }],
    };
  }

  // 通过ref属性将一个React.createRef()创建的对象或回调函数附加到组件上
  // React.createRef 创建一个能够通过 ref 属性附加到 React 元素的 ref。
  inputRef = React.createRef();

  buttonRef = React.createRef(null);

  componentWillMount() {
    console.log(TAG, 'componentWillMount...', this.inputRef);
  }

  componentDidMount() {
    console.log(TAG, 'componentDidMount...', this.inputRef);
    // setTimeout(() => {
    //   this.setState({
    //     originText: 'changed',
    //   });
    // }, 2000);
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log(TAG, 'componentWillUpdate...');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(TAG, 'componentDidUpdate... ');
  }

  _resetInput(value) {
    console.log('_resetInput: ', value);
    value.reset('11111');
  }
  render() {
    console.log('father render');
    return (
      <View style={{ flex: 1 }}>
        <BaseButton
          title={this.state.title}
          onClick={() => {
            this.setState({ textValue: '123@', id: 456 });
          }}
        />
        <BaseButton
          key={1}
          title={'resetInput'}
          onClick={() => {
            this.buttonRef.current.reset('newValue');
          }}
        />
        {/*<BaseText content={this.state.content} />*/}
        <BaseTextInput
          ref={this.inputRef}
          key={this.state.id}
          onHandleFunc={(value) => console.log('value: ', value)}
          defaultValue={this.state.textValue}
        />
        <View style={{ flex: 0.3 }}>
          {this.state.arr1.map((item, index) => {
            return <BaseTextWithObj item={item} />;
          })}
          <BaseButton
            title={'change Arr'}
            onClick={() => {
              const newArr = this.state.arr1;
              newArr[1].value = 9;
              newArr[1] = Object.assign({}, newArr[1]);
              // newArr[1] = 7;
              this.setState({ arr1: newArr });
            }}
          />
          {/* 无法在函数组件上使用ref */}
          <BaseButtonFunc
            onRef={(value) => {
              // 无效
              this.buttonRef.current = value;
              // this.buttonRef.current.alert();
            }}
          />
        </View>
      </View>
    );
  }
}

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
* 第一部分
* 导入ReactNative包，导入ReactNative组件
* AppRegistry：JS运行所有ReactNative应用的入口
* StyleSheet：ReactNative中使用的样式表，类似Css样式表
* 各种开发中需要使用的组件
* */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

/*
* 第二部分
* 创建ReactNative组件
*
* 模版中使用的是ES6语法
* render() {}  ES6简写
* */
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to My Love!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

/*
* 第三部分
*
* StyleSheel.create创建样式的实例
* 在应用中只会被创建一次，不用每次在渲染周期中重新创建
* */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

type Props = {};

// 定义组件
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.top, styles.border]}>
          123
        </Text>
        <Text style={[styles.bottom, styles.border, {borderWidth: 5}]}>
          124
        </Text>
      </View>
    );
  }
}
// 定义样式
const styles = StyleSheet.create({
    container: { // 外层
        marginTop: 25,
        marginLeft: 30,
        backgroundColor: "red",
        width: 300,
        height: 400
    },
    // 上层
    top: {
        backgroundColor: "green",
        width: 280,
        height: 250,
        margin: 10
    },
    // 下层div
    bottom: {
        backgroundColor: 'yellow',
        width: 280,
        height: 110,
        margin: 10
    },
    border: {
        borderWidth: 3,
        borderColor: "black"
    }
});

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

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.child1}>
        </Text>
        <Text style={styles.child2}>

        </Text>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//     container: {
//         margin: 30,
//         width: 300,
//         height: 500,
//         backgroundColor: 'yellow',
//         // 默认主轴方向 column
//         // 设置为横向排列
//         flexDirection: 'row',
//         justifyContent: 'center',
//         // 交叉轴
//         alignItems: 'center'
//     },
//     child1: {
//         width: 100,
//         height: 100,
//         backgroundColor: 'green'
//     },
//     child2: {
//         width: 100,
//         height: 100,
//         backgroundColor: 'blue'
//     }
// });
const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flex: 1,
        backgroundColor: 'cyan'
    },
    child1: {
        flex: 1,
        backgroundColor: 'green'
    },
    child2: {
        flex: 3,
        backgroundColor: 'yellow'
    }
});


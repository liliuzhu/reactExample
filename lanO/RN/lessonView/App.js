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
export default class LessonView extends Component<Props>{
    render() {
      return (
          <View style={[styles.container, styles.flex]}>
              <View style={styles.item}>
                  <View style={[styles.flex, styles.center]}>
                      <Text>酒店</Text>
                  </View>
                  <View style={[styles.flex, styles.lineLeftRight]}>
                      <View style={[styles.flex, styles.center, styles.lineCenter]}>
                          <Text>海外酒店</Text>
                      </View>
                      <View style={[styles.flex, styles.center]}>
                          <Text>特价酒店</Text>
                      </View>
                  </View>
                  <View style={styles.flex}>
                      <View style={[styles.flex, styles.center, styles.lineCenter]}>
                          <Text>团购</Text>
                      </View>
                      <View style={[styles.flex, styles.center]}>
                          <Text>民宿.客栈</Text>
                      </View>
                  </View>
              </View>
          </View>
      )
    }
}
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
    container: {
        margin: 25,
        backgroundColor: '#f2f2f2',
    },
    // 多个组件都需要设置
    flex: {
        flex: 1
    },
    // 多个组件需要设置
    center: {
        justifyContent: "center",
        alignItems: 'center',
    },
    item: {
        flexDirection: "row",
        backgroundColor: "#FF607c",
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        height: 80,
        borderRadius: 5
    },
    // 给中间的区域设置左右边线
    lineLeftRight: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "white"

    },
    lineCenter: {
        borderBottomWidth: 1,
        borderColor: "white"
    }
})

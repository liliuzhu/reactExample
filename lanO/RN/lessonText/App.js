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
/*
* https://reactnative.cn/docs/0.51/handling-touches.html#content
* 常用属性：
* onPress 手指触摸事件
* numberOfLines 显示多少行
*
* 可以设置字体颜色、大小、对齐方式等等
* */
/*
* 界面布局分为两部分
* Header和新闻信息
*
* 整个页面是一个组件，由两个子组件组成
*
* 如果都写在index.js文件中，代码比较乱
* 在单独一个文件中定义子组件，使用Module.exports将组件导出为独立的模块
* 可以在其他文件中引用
* */

// 引入
import Header from './components/Header';
import News from './components/News';
type Props = {};
export default class LessonText extends Component<Props> {
    render() {
        // 定义数组存新闻内容
        let news = [
            "1.Vue的双向数据绑定的原理相信大家也都十分了解了，主要是通过 Object对象的defineProperty属性主要是通过 Object对象的defineProperty属性",
            "2.Vue的双向数据绑定的原理相信大家也都十分了解了，主要是通过",
            "3.Vue的双向数据绑定的原理相信大家也都十分了解了，主要是通过 Object对象的defineProperty属性",
            "4.Vue的双向数据绑定的原理相信大家"
        ];
        return (
            <View style={styles.flex}>
                {/*Header*/}
                <Header></Header>
                {/*New*/}
                <News news={news}></News>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  flex:{
    flex:1
  }
});

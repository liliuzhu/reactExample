/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';

/*
* React Native 提供3个组件用于给其他没有触摸事件
* TouchableOpacity 透明触摸，点击时，组件会出现透明效果
* TouchableHighlight 透明触摸，点击时，组件会出现高亮效果
* TouchableWithoutFeedback 无反馈性触摸，点击时，组件无视觉变化
* 需要导入组件
* */
/*
* TextInput 是一个允许用户在应用中通过键盘输入文本的基础组件
* 本组件的属性提供了多种特性的配置，譬如自动完成、自动大小写
* 占位文字，以及多种不同的键盘类型，（如纯数字键盘）等等
* 常用：
* placeholder 占位符
* value 输入框的值
* password 是否密文输入
* editable 是否可编辑
* returnKeyType 键盘return键类型
* onChange 当文本变化时调用
* onEndEditing 当结束编辑时调用
* onSubmitEditing 当结束编辑，点击提交时调用
* ...
* */
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class LessonTouchable extends Component<Props> {
    state = { inputText: '' };
    // 输入框的onChange实现
    getContent(text){
        this.setState({
            inputText: text
        });
    };
    clickBtn() {
        alert(this.state.inputText);
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.flex}>
                    <TextInput
                        style={styles.input}
                        returnKeyType="search"
                        placeholder="请输入内容"
                        onChangeText={this.getContent.bind(this)}
                    />
                </View>
                <TouchableOpacity style={styles.btn} onPress={this.clickBtn.bind(this)}>
                    <Text style={styles.search}>搜索</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 45,
        marginTop: 25
    },
    flex: {
        flex: 1
    },
    input: {
        height: 45,
        borderWidth: 1,
        marginLeft: 5,
        paddingLeft: 5,
        borderColor: "#ccc",
        borderRadius: 4
    },
    btn: {
        width: 55,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#23beff',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    search: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    }
});

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
    Image
} from 'react-native';

/*
* 用于显示图片的组件，包括网络图片，静态资源等等
* 常用性能
*   resizeMode 图片适应模式cover 、contain、stretch
*   source 图片引用地址
*   ios支持属性：onLoad、onloadEnd、onLoadStart、onProgress
*   https://www.baidu.com/img/bd_logo1.png?qua=high
* */
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class LessonImage extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.net}>
                    <Image style={styles.netImage}
                           source={{uri:"https://www.baidu.com/img/bd_logo1.png?qua=high"}}
                    />
                </View>
                <View style={styles.local}>
                    <Image style={styles.localImage}
                        source={require("./static/img/下载.jpg")}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 25,
        alignItems: 'center'
    },
    net: {
        marginTop: 30,
        width: 300,
        height: 240,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'cyan'
    },
    netImage: {
        width: 270,
        height: 129,
        backgroundColor: 'gray'
    },
    local: {
        marginTop: 30,
        width: 300,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    localImage: {
        width: 180,
        height: 180,
        backgroundColor: 'gray'
    }
});

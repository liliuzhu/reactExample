/*
* 实现功能：封装webView，根据传入的url展示网页信息
* 包含组件：Header,WebView
* 外部传入：
* 给Header设置：navigator，initObj(backName，title)
* 给WebView设置：source
* */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

import Header from './header';

class CustomWebView extends Component{
    render(){
        return (
            <View style={{backgroundColor:'#fff',flex: 1}}>
                <Header
                    navigator={this.props.navigator}
                    initObj={{
                        backName:this.props.backName,
                        barTitle:this.props.title
                    }}
                />
                <WebView
                    startInLoadingState={true}
                    contentInset={{top: -44, bottom: -120}}
                    source={{uri: this.props.url}}
                />
            </View>
        )
    }
}
export default CustomWebView;
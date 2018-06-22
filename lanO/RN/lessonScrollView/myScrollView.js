import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    ToastAndroid,
    RefreshControl
} from 'react-native';

/*
ScrollView的简单实现
实现检测拖拽，滑动的相关方法
添加几个子组件
* */
export default class MyScrollView extends Component {
    _onScrollBeginDrag(){
        // ToastAndroid.showWithGravity(
        //     '开始拖拽',
        //     ToastAndroid.SHORT,
        //     ToastAndroid.TOP,
        // );
    };
    _onScrollEndDrag(){
        // ToastAndroid.showWithGravity(
        //     '结束拖拽',
        //     ToastAndroid.SHORT,
        //     ToastAndroid.CENTER,
        // );
    };
    _onMomentumScrollBegin(){
        // ToastAndroid.showWithGravity(
        //     '开始滑动',
        //     ToastAndroid.SHORT,
        //     ToastAndroid.BOTTOM,
        // );
    };
    _onMomentumScrollEnd(){
        // ToastAndroid.showWithGravity(
        //     '滑动结束',
        //     ToastAndroid.SHORT,
        //     ToastAndroid.TOP,
        // );
    };
    _onRefresh(){
        ToastAndroid.showWithGravity(
            '刷新',
            ToastAndroid.SHORT,
            ToastAndroid.TOP,
        );
    };
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.scrollView}
                    showVerticalScrollIndicator={true}
                    onScrollBeginDrag={this._onScrollBeginDrag}
                    onScrollEndDrag={this._onScrollEndDrag}
                    onMomentumScrollBegin={this._onMomentumScrollBegin}
                    onMomentumScrollEnd={this._onMomentumScrollEnd}
                    refreshControl={
                        <RefreshControl
                        refreshing={false}
                        tintColor="red"
                        colors = {['#ff0000', '#00ff00', '#0000ff']}
                        progressBackgroundColor="#fff"
                        title="正在刷新..."
                        onRefresh={this._onRefresh}
                        />
                    }
                >
                    <View style={styles.view_1}></View>
                    <View style={styles.view_2}></View>
                    <View style={styles.view_3}></View>
                </ScrollView>
            </View>
        )

    }
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'cyan'
    },
    scrollView:{
        marginTop: 25,
        backgroundColor: "#ccc"
    },
    view_1: {
        margin: 15,
        flex: 1,
        height: 300,
        backgroundColor: 'yellow'
    },
    view_2: {
        margin: 15,
        flex: 1,
        height: 300,
        backgroundColor: 'blue'
    },
    view_3: {
        margin: 15,
        flex: 1,
        height: 300,
        backgroundColor: 'green'
    }
});
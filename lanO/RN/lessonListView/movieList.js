
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    Image
} from 'react-native';

// 从文件中获取数据
let movieData = require('./data');

// 获取所有movies数据，属性movie是一个数据
// 原始数据
let movies = movieData.movies;

export default class MyListView extends Component{
    constructor(props){
        super(props);
        // 创建一个dataSource对象
        let ds = new ListView.DataSource({
            rowHasChanged: (oldRow, newRow) => oldRow !== newRow
        });
        this.state = {
            dataSource: ds.cloneWithRows(movies)
        };
    };
    // 渲染行组件
    _renderRow(movie:object){
        return (
            <View style={styles.row}>
                <Image style={styles.thumbnail}
                source={{uri:movie.posters.thumbnail}}/>
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                </View>
            </View>
        )
    };
    // 渲染头部
    _renderHeader(){
        return (
            <View style={styles.header}>
                <Text style={styles.header_text}>Movies List</Text>
                <View style={styles.separator}></View>
            </View>
        );
    };
    // 渲染分割线
    _renderSeparator(sectionID:number, rowID:number){
        return (
            <View style={styles.separator} key={sectionID+rowID}></View>
        )
    };
    render() {
        return (
            <ListView style={styles.listView}
                      dataSource={this.state.dataSource}
                      renderRow={this._renderRow}
                      renderHeader={this._renderHeader}
                      renderSeparator={this._renderSeparator}
                      initialListSize={10}
            >
            </ListView>
        )
    }
}
const styles = StyleSheet.create({
    listView: {
        flex: 1,
        marginTop: 25,
        backgroundColor: '#f5f5f5'
    },
    // 行组件样式
    row: {
        flexDirection: 'row',
        // justifyContent:'center',
        alignItems: 'center',
        padding: 5,
        height: 100,
        backgroundColor: '#f5f5f5'
    },
    thumbnail: {
        width: 53,
        height: 81,
        backgroundColor: 'gray'
    },
    rightContainer: {
        marginLeft: 10,
        flex: 1
    },
    title: {
        fontSize: 18,
        marginTop: 3,
        marginBottom: 3,
        textAlign: 'center'
    },
    year: {
        marginBottom: 3,
        textAlign: 'center'
    },
    // header 组件样式
    header: {
        height: 50,
        backgroundColor: '#f5f5f5'
    },
    header_text: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 44
    },
    // 分隔线样式
    separator: {
        height:1,
        backgroundColor: '#ccc'
    }
});
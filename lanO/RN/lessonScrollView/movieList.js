import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';
/*
* 数据源网址：
* https://raw.githubusercontent.com/facebook/react-native/0.44-stable/docs/MoviesExample.json
*
* 返回的是JSON格式的数据
*
* 还没学习网络请求，使用本地数据
*
* JSON格式化工具网址：
* http://www.runoob.com/jsontool
* */
import moviesData from './data.json';
//获取所有Movie数据，属性Movies是一个数组
const movies = moviesData.movies;

export default class MovieLit extends Component {
    render() {
        // 创建电影列表组件。根据movies中元素的个数，创建对应的组件
        // 遍历数组。每当获取一个movie对象，就创建一个组件对象。样式一样，显示内容不一样
        // 定义空数组。存储显示电影信息的组件
        var moviesRows = [];
        // 遍历数组
        for (let i in movies){
            let movie = movies[i];
            // 创建组件，显示电影信息；图像movie.posters.thumbnail，电影名称movie.title，上映时间(movie.year)
            let row = (
                <View key={i} style={styles.row}>
                    <Image style={styles.thumbnail} source={{uri:movie.posters.thumbnail}}/>
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>{movie.title}</Text>
                        <Text style={styles.year}>{movie.year}</Text>
                    </View>
                </View>
            );
            //将创建的组件存放到数组中
            moviesRows.push(row)
        }

        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    {
                        // 数组(所有子组件)
                        moviesRows
                    }
                </ScrollView>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        marginTop:25,
        backgroundColor: '#f5fcff'
    },
    row: {
        flexDirection:'row',
        padding: 5,
        alignItems:'center',
        backgroundColor:'#f5fcff'
    },
    thumbnail:{
        width: 53,
        height:81,
        backgroundColor:'gray'
    },
    rightContainer: {
        marginLeft: 10,
        flex:1
    },
    title: {
        fontSize:18,
        marginTop:3,
        marginBottom: 3,
        textAlign:'center'
    },
    year: {
        marginBottom:3,
        textAlign:'center'
    }
});
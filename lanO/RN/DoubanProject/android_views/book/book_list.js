/*
图书列表模块：搜索栏、图书列表
图书列表的内容：通过调用图书搜索接口获得多条图书数据
图书列表Item是单独封装的
* */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ListView,
    ScrollView
} from 'react-native';

import Util from '../common/util';
import SearchBar from '../common/searchBar';
import ServiceURL from '../common/service';
import BookItem from './book_item';

class BookList extends Component{
    constructor(props){
        super(props);
        let ds = new ListView.DataSource({
            rowHasChanged:(oldRow, newRow) => oldRow!==newRow
        });
        this.state={
            dataSource: ds, // dataSource
            show: false, // 网络请求状态标识
            // 搜索关键字
            // 作用：1、搜索接口需要设置搜索内容
            // 2、点击搜索按钮时、修改关键字内容、重新请求数据、重新渲染
            keyworlds: "React"
        }
    }
    render(){
        return (
            <ScrollView>
                {/*请求数据时显示loading，数据请求成功后显示ListView*/}
            </ScrollView>
        )
    }
}
let styles=StyleSheet.create({

});

export default BookList;
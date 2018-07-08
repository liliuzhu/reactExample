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
import BookDetail from './book_detail';

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
            keywords: "javascript"
        }
    }
    render(){
        return (
            <View>
                <SearchBar
                    placeholder="请输入图书的名称"
                    onPress={this._searchPress.bind(this)}
                    onChangeText={this._changeText.bind(this)}
                />
                <ScrollView>
                    {
                        /*请求数据时显示loading，数据请求成功后显示ListView*/
                        this.state.show?
                            <ListView
                                dataSource={this.state.dataSource}
                                initialListSize={10}
                                renderRow={this._renderRow.bind(this)}
                                renderSeparator={this._renderSeparator}
                            />
                            :Util.Loading
                    }
                </ScrollView>
            </View>
        )
    };
    componentDidMount(){
        // 请求数据
        this.getData();
    };
    getData(){
        // 开启loading，每次搜索时都需要重新下载显示数据
        this.setState({
            show: false
        });
        // 请求数据
        // let that = this;
        let url = ServiceURL.book_search + '?count=20&q=' +this.state.keywords;
        Util.getRequest(url, (data)=>{
            // 请求成功回调函数
            /*
            * 如果没有相关书籍，使用alert提示
            * https://api.douban.com/v2/book/search?count=20&q=react
            * */
            if(!data.books||data.books.length===0){
                this.setState({
                    show: true
                });
                return alert('未查到相关书籍');
            }
            // 设置下载状态和数据源
            let ds = new ListView.DataSource({
                rowHasChanged: (oldRow, newRow) => oldRow !== newRow
            });
            this.setState({
                show: true,
                dataSource: ds.cloneWithRows(data.books)
            });
        },(err)=>{
            // 请求失败回调函数
            // alert(err);
        })
    };
    // TextInput的onchange事件处理
    _changeText(text){
        this.setState({
            keywords: text
        });
    };
    _searchPress(){
        this.getData();
    };
    _renderRow(book){
        return (
            <BookItem book={book} onPress={this._showDetail.bind(this, book.id)} />
        )
    };
    _renderSeparator(sectionID:number, rowID:number){
        let style = {
            height: 1,
            backgroundColor: '#ccc'
        };
        return (
            <View style={style} key={sectionID+rowID}></View>
        );
    };
    _showDetail(bookID){
        let detailRoute = {
            component: BookDetail,
            passProps: {
                bookID: bookID
            }
        };
        this.props.navigator.push(detailRoute);
    }
}
export default BookList;
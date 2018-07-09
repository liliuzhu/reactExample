/*
* 电影列表模块：搜索栏、电影列表
* 电影列表的内容：通过调用电影搜索接口获得多条电影数据
* */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    ScrollView
} from 'react-native';
import SearchBar from '../common/searchBar';
import Util from '../common/util';
import ServiceURL from '../common/service';
import MovieItem from './movie_item';
import MovieWebView from '../common/customWebView';

class MovieList extends Component{
    constructor(props){
        super(props);
        let ds = new ListView.DataSource({
            rowHasChanged:(oldRow, newRow) => oldRow!==newRow
        });
        this.state = {
            dataSource: ds,
            show: false,
            keywords:'哈利波特'
        }
    }
    render(){
        return (
            <View>
                <SearchBar
                    placeholder="请输入电影名称"
                    onPress={this._searchPress.bind(this)}
                    onChangeText={this._changeText.bind(this)}
                />
                <ScrollView>
                    {
                        this.state.show?
                            <ListView
                                dataSource={this.state.dataSource}
                                initialListSize={10}
                                renderRow={this._renderRow.bind(this)}
                                renderSeparator={this._renderSeparator}
                            />
                            : Util.Loading
                    }
                </ScrollView>
            </View>
        )
    };
    componentDidMount(){
        this.getData();
    };
    getData(){
        this.setState({
            show: false
        });
        let url = ServiceURL.movie_search + '?count=20&q='+this.state.keywords;
        Util.getRequest(url,data => {
            if (!data.subjects || data.subjects.length === 0) {
                return alert('未找到相关电影');
            }
            let ds = new ListView.DataSource({
                rowHasChanged: (oldRow, newRow) => oldRow !== newRow
            });
            let movies = data.subjects;
            this.setState({
                show: true,
                dataSource: ds.cloneWithRows(movies)
            })
        }, err => {
            alert(err);
        })
    };
    _renderRow(movie){
        return <MovieItem movie={movie} onPress={this._showDetail.bind(this, movie.title, movie.alt)} />
    };
    _renderSeparator(sectionID:number, rowID:number){
        let style={
            height:1,
            backgroundColor:'#ccc'
        }
        return <View style={style} key={sectionID+rowID}></View>
    };
    _changeText(text){
        this.setState({
            keywords: text
        })
    };
    _searchPress(){
        this.getData();
    };
    _showDetail(title, url){
        let detailRoute ={
            component: MovieWebView,
            passProps:{
                backName: '电影',
                title: title,
                url: url
            }
        };
        this.props.navigator.push(detailRoute);
    }
}

let styles= StyleSheet.create({

})
export default MovieList;
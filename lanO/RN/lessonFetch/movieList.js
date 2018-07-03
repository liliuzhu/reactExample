import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';

/*
* 展示电影列表
* 逻辑：未获得数据时，显示等待页面；获得数据时，显示电影列表页面
*
* 需要给state添加一个属性，用于记录下载状态
* */
let REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/0.44-stable/docs/MoviesExample.json';
export default class MovieList extends Component{
    // 设置初始状态值
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({
           rowHasChanged:(oldRow, newRow) => oldRow!==newRow
        });
        this.state = {
            loaded: false, //数据是否下载成功的标识
            dataSource: ds
        }
    }
    render(){
        // 如果为请求到数据提示“等待加载页面”
        if(!this.state.loaded) {
            return this.renderLoadingView();
        }
        return (
            <ListView style={styles.listView}
                      dataSource={this.state.dataSource}
                      initialListSize={10}
                      renderHeader={this._renderHeader}
                      renderRow={this._renderRow}
                      renderSeparator={this._renderSeparator}
            >
            </ListView>
        )
    };
    // 组件挂载完成
    componentDidMount(){
        // 组件挂载后，开始下载数据
        this.getData();
    };
    // 下载数据
    getData(){
        fetch(REQUEST_URL)
            .then(res=>{
                return res.json()
            })
            .then(responsData=>{
                // 刷新组件，重新渲染组件，展示ListView
                // 得到新的数据，更新dataSource
                this.setState({
                    loaded: true,
                    dataSource: this.state.dataSource.cloneWithRows(responsData.movies)
                });
                // this.state.loaded = true;
                // this.state.dataSource = this.state.dataSource.cloneWithRows(responsData.movies)
            })
            .catch(err=>{
                alert(err);
            })
    }
    // 等待加载页面
    renderLoadingView() {
        return (
            <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>Loading movies...</Text>
            </View>
        )
    }
    // 渲染行
    _renderRow(movie){
        return (
            <View style={styles.rowContainer}>
                <Image
                    style={styles.thumbnail}
                    source={{uri: movie.posters.thumbnail}}
                />
                <View style={styles.textContainer}>
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
                <Text style={styles.headerText}>Movie List</Text>
                <View style={styles.headerSeparator}></View>
            </View>
        )
    };
    // 分割线
    _renderSeparator(sectionID:number, rowID:number) {
        return (
            <View style={styles.headerSeparator} key={sectionID+rowID}></View>
        )
    }
}

let styles = StyleSheet.create({
    // loading样式
    loadingContainer:{
        flex:1,
        backgroundColor:'cyan',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingText:{
        fontSize: 30,
        fontWeight:'bold',
        textAlign:'center',
        marginLeft: 10,
        marginRight:10
    },
    // ListView Row
    rowContainer: {
        flexDirection:'row',
        padding: 5,
        alignItems:'center',
        backgroundColor:'#f5fcff'
    },
    thumbnail: {
        width: 53,
        height:81,
        backgroundColor:'gray'
    },

    textContainer: {
        flex:1,
        marginLeft:10
    },
    title: {
        marginTop: 3,
        // marginBottom:3,
        fontSize:18,
        textAlign:'center'
    },
    year: {
        marginTop: 3,
        marginBottom:3,
        textAlign: "center"
    },
    // ListView header
    header:{
        height:44,
        backgroundColor:'#f5fcff',
    },
    headerText:{
        flex:1,
        fontSize: 20,
        fontWeight:'bold',
        textAlign: 'center'
    },
    headerSeparator:{
        height: 1,
        backgroundColor: '#ccc'
    },
    // ListView
    listView: {
        backgroundColor:'#f5fcff',
    }
});
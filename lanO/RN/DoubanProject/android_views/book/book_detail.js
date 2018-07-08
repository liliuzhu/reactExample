/*
* 图书详情
* 实现功能：
* 包含组件：
* 外部传入：
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
import ServiceURL from '../common/service';
import Util from '../common/util';
import Header from '../common/header';
import BookItem from './book_item';
class BookDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            bookData: null //图书对象详情信息
        }
    };
    render(){
        return (
            <ScrollView style={styles.container}>
                {
                    this.state.bookData?
                        <View>
                            <Header initObj={{backName: "图书", barTitle: this.state.bookData.title}}
                                navigator={this.props.navigator}
                            />
                            <BookItem book={this.state.bookData} />
                            <View>
                                <Text style={styles.title}>图书简介</Text>
                                <Text style={styles.text}>{this.state.bookData.summary}</Text>
                            </View>
                            <View style={{marginTop:10}}>
                                <Text style={styles.title}>作者简介</Text>
                                <Text style={styles.text}>{this.state.bookData.author_intro}</Text>
                            </View>
                            <View style={{height: 55}}></View>
                        </View>
                        : Util.Loading
                }
            </ScrollView>
        )
    };
    componentDidMount(){
        // 请求图书详情
        this.getData();
    };
    getData(){
        let url = ServiceURL.book_detail_id + this.props.bookID;
        Util.getRequest(url, (data) => {
            this.setState({
                bookData: data
            })
        }, err => {
            alert(err);
        })
    }
}
let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        fontSize:16,
        marginTop:10,
        marginLeft:10,
        marginBottom:10,
        fontWeight: 'bold'
    },
    text: {
        marginLeft: 10,
        marginRight: 10,
        color:'#000D22'
    }
});
export default BookDetail;
/*
*实现功能：显示图书信息，点击item进入item进入图书详情页面
* 包含组件：基本组件
*
* 外部传入：
* book                图书对象
* onPress事件处理方法  通过...this.props绑定，需要设置参数，即图书id
*
* 需要使用的字段
*
* image  图书缩略图
* title  图书名称
* publisher 出版社
* price  价格
* pages  图书总页数
* */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

class BookItem extends Component{
    render(){
        let book = this.props.book;
        return(
            <TouchableOpacity style={styles.item} {...this.props}>
                {/*图像*/}
                <View style={style.imageContainer}>
                    <Image style={styles.image} source={{uri:book.image}}/>
                </View>
                {/*图书信息*/}
                <View style={styles.contentContainer}>
                    <View style={style.textContainer}>
                        <Text numberOfLines={1}>{book.title}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.publisher_author} numberOfLines={1}>{book.publisher}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.publisher_author}>{book.author}</Text>
                    </View>
                    <View style={{flexDirection:'row',flex: 1,alignItems:'center'}}>
                        <Text style={styles.price}>{book.price}</Text>
                        <Text style={styles.price}>{book.pages}页</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

let styles=StyleSheet.create({
    item: {
        flexDirection: 'row',
        height: 120,
        padding: 10,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 80,
        height: 100
    },
    contentContainer: {
        flex: 1,
        marginLeft: 15
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    publisher_author:{
        color: '#a3a3a3',
        fontSize: 13
    },
    price:{
        color:'#2BB2A3',
        fontSize:16
    },
    pages: {
        marginLeft: 10,
        color: '#A7A0A0'
    }
});
export default BookItem;
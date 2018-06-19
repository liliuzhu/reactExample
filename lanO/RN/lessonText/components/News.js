import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

type Props={};
class News extends Component<Props>{
    show(title){
        alert(title);
    };
    render() {
        // 定义数组，用于存储设置好的Text组件
        let newsComponents=[];
        // 遍历存储信息的数组，从外面传入的
        for (let i in this.props.news){
            let text = (
                <Text onPress={this.show.bind(this, this.props.news[i])} style={styles.news_item} numberOfLines={2} key={i}>
                    {this.props.news[i]}
                </Text>
            )
            // 将设置好的Text存入数组
            newsComponents.push(text);
        }
        return(
            <View style={styles.flex}>
                <Text style={styles.news_title}>今日要闻</Text>
                {newsComponents}
            </View>
        )
    }
}
const styles= StyleSheet.create({
    flex: {
        flex:1,
    },
    // 今日要闻标题
    news_title:{
        fontSize:20,
        fontWeight: 'bold',
        color: "#cd1d1c",
        marginLeft:10,
        marginTop:15
    },
    // 每日新闻
    news_item: {
        marginTop: 10,
        marginLeft:10,
        marginRight: 10,
        fontSize:15,
        lineHeight: 30
    }
});
export default News;
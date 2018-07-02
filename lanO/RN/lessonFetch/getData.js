import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

/*
* 在ReactNative，使用fetch实现网络请求。fetch同XMLHttpRequest非常的类似，是一个封装程度更高多的网络
* API，使用起来很简洁，因为使用了Promise
* fetch(url, opts)
* .then(res => {
*   //网络请求成功执行该回调函数，得到响应对象，通过res可以获取请求的数据
*   // 例如： json、text等等
*   return res.text()
// *   return res.json()
*
* })
* .then(res => {
*   // 处理请求返回的数据
* })
* .catch(err => {
*  // 网络请求失败执行该回调函数，得到错误信息
* })
* */
function getRequest(url) {
    let opts = {
        method: 'GET',
    };
    fetch(url,opts)
        .then(res => {
            return res.text(); // 返回一个带有文本的对象
        })
        .then(responseText => {
            alert(responseText)
        })
        .catch(err => {
            alert(err);
        })
}
/*
* FormData
* */
function postRequest(url) {
    // 将key1=value1&key2=value2封装成FormData形式
    let formData = new FormData();
    formData.append("username",'reactNative');
    formData.append("password",'456');
    let opts = {
        method: "POST",
        body: formData
    }
    fetch(url, opts)
        .then(res => {
            return res.text();
        })
        .then(responseText => {
            alert(responseText);
        })
        .catch(err => {
            alert(err);
        })
}
export default class GetData extends Component{
    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={getRequest.bind(this, "https://code.ziqiangxuetang.com/try/ajax/demo_test.php")}>
                    <View style={styles.btn}>
                        <Text>GET</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={postRequest.bind(this,'https://code.ziqiangxuetang.com/try/ajax/demo_test_post.php')}>
                    <View style={styles.btn}>
                        <Text>POST</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
        backgroundColor: 'cyan',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center'
    },
    btn:{
        width: 60,
        height:30,
        borderWidth:1,
        borderRadius:3,
        borderColor:'black',
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center'
    }
})
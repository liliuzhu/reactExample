import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
// 从前一个页面向后一个页面传值

// 定义inputPage 输入框 、按钮
class InputPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            // 记录输入框的值
            content: ''
        };

    };
    getInputContent(inputText){
        // 将输入框的值进行记录
        // this.setState({
        //     content: inputText
        // });
        this.state.content = inputText;
    };
    pushNextpage(){
      // 退出下一个页面，并且传值
        let nextRoute = {
            component: DetailPage,
            passProps:{
                // 将输入值的内容传递给下一级页面
                showText: this.state.content
            }
        }
        this.props.navigator.push(nextRoute)
    };
    render(){
        return (
            <View style={inputStyle.container}>
                <TextInput style={inputStyle.input}
                    placeholder="请输入内容"
                    onChangeText={this.getInputContent.bind(this)}/>
                <TouchableOpacity style={inputStyle.btn} onPress={this.pushNextpage.bind(this)}>
                    <Text>进入下一页</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const inputStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    input: {
        width: '80%',
        height: 45,
        marginRight: 25,
        marginLeft: 25,
        borderWidth:1,
        borderColor:'black',
        borderRadius: 4
    },
    btn: {
        marginTop: 20,
        height: 30,
        borderWidth:1,
        borderColor:'black',
        padding: 5,
        justifyContent:'center',
        alignItems: 'center'
    }
});

// DetailPage 显示为本 按钮

class DetailPage extends Component{
    constructor(prop) {
        super(prop);
    };
    popFrontPage(){
        // 返回上一级
        this.props.navigator.pop();
    };
    render(){
        return(
            <View style={detailStyle.container}>
                <Text style={detailStyle.text}>{this.props.showText}</Text>
                <TouchableOpacity style={inputStyle.btn} onPress={this.popFrontPage.bind(this)}>
                    <Text>返回上一页</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const detailStyle = StyleSheet.create({
   container: {
       flex:1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor:'white'
   },
    text: {
       marginLeft:25,
        marginRight:25,
        padding:25,
        backgroundColor: 'cyan',
        fontSize:20,
        textAlign:'center'
    }
});

export default class LessonNavigator extends Component{
    render(){
        let rootRoute = {
            component: InputPage,
            // 存储需要传递的内容
            passProps:{

            }
        };
        return (
            <View style={styles.container}>
                <Navigator
                    initialRoute={rootRoute}
                    configureScene={(route) => {
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route,navigator)=>{
                        let Component = route.component;
                        return (
                            <Component
                             navigator={navigator}
                             route={route}
                             {...route.passProps}
                            />
                        )
                    }}
                />
            </View>
        )
    }
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow'
    }
});
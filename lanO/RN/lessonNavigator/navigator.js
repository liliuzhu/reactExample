import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'

/*
* 导航器通过路由对象（router）来分辨不同的场景。每个路由对象都对应一个页面组件，开发者设置什么，
* 导航器显示什么，所以router是导航器中重要的一个对象。
*
* 三步操作实现导航功能：
* 1、设置路由对象(告诉导航器我要显示哪个页面)
*   创建路由对象，对象的内容自定义，但是必须包含该场景需要展示的页面组件
* 2、场景渲染配置(告诉导航器我要什么样的页面跳转效果)
* 3、渲染场景 （告诉导航器如何渲染页面）
*   利用第一步设置的路由对象进行渲染场景
* */

/*
* 第一个页面
* firstPage 一个button，点击进入下一级页面
* */
class FirstPage extends Component{
    // 按钮onPress事件处理方法
    pressPush(){
        // 推出下一级页面
        let nextRoute = {
            component:SecondPage
        };
        this.props.navigator.push(nextRoute);
    };
    render(){
        return(
            <View style={[styles.flex,{backgroundColor:'yellow'}]}>
                <TouchableOpacity style={styles.btn} onPress={this.pressPush.bind(this)}>
                    <Text>点击推出下一级页面</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
// 定义第二个页面
// SecondPage 一个btn，点击返回上一级页面
class SecondPage extends Component{
    // 按钮onPress事件处理方法
    pressPop(){
        // 推出下一级页面
        this.props.navigator.pop()
    };
    render(){
        return(
            <View style={[styles.flex,{backgroundColor:'cyan'}]}>
                <TouchableOpacity style={styles.btn} onPress={this.pressPop.bind(this)}>
                    <Text>点击返回上一级页面</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default class LessonNavigator extends Component{
    render(){
        let rootRouter ={
            component: FirstPage
        };
        return(
            <Navigator
                /*
                第一步
                initialRouter
                这个指定默认人的页面，也就是启动app之后看到界面的第一屏
                对象的属性是自定义的。这个对象的内容会在renderScene方法中处理

                备注：必须包含的属性，即component，表示需要渲染的页面组件
                * */
                initialRoute={rootRouter}
                /*
                * 第二步
                * configureScene
                * 场景渲染的配置
                * */
                configureScene = {(route) => {
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                /*
                * 第三步
                *renderScene
                * 渲染场景
                * 参数： route(第一步创建给导航器的路由对象)，navigator(导航器对象)
                * 实现：给需要显示的组件设置属性
                * */
                renderScene={(route, navigator) => {
                    // 从router对象中获取页面组件
                    let Component = route.component;
                    return (
                        <Component
                            navigator={navigator}
                            route={route}/>
                    )
                }}
            />
        )
    }
}

let styles = StyleSheet.create({
    flex:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn:{
        width: 150,
        height: 30,
        borderColor:"#8089ff",
        borderWidth:1,
        borderRadius: 3,
        justifyContent:'center',
        alignItems:'center'
    }
})
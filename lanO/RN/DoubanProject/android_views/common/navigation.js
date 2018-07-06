/*
* 实现功能
*
* 包含组件：Navigator
*
* 外部传入：
* component  需要展示的页面组件
* router     必须添加component属性；如果需要传参可以添加passProps属性
* */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

class Navigation extends Component{
    render(){
        // 创建router对象，约定格式
        let rootRoute = {
            component: this.props.component,
            passProps: {

            }
        };
        return (
            <Navigator
                initialRoute={rootRoute}
                configureScene={()=>{return Navigator.SceneConfigs.PushFromRight}}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return (
                        <View style={{flex: 1}}>
                            <Component
                                navigator={navigator}
                                route={route}
                                {...route.passProps}
                            />
                        </View>
                    )
                }}
            />
        )
    }
};
export default Navigation
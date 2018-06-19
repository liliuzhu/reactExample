import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
// 组件
type Props = {};
class Header extends Component<Props> {
    render(){
        return (
            <View style={styles.flex}>
                <Text style={styles.font}>
                    <Text style={styles.font_1}>网易</Text>
                    <Text style={styles.font_2}>新闻</Text>
                    <Text>有态度</Text>
                </Text>
            </View>
        );
    }
}
//样式
const styles = StyleSheet.create({
    flex: {
        marginTop: 25,
        height: 40,
        borderBottomWidth:1,
        borderBottomColor: '#ef2d36',
        alignItems: 'center'
    },
    // 字体公共部分
    font: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    font_1:{
        color: "#cd1d1c"
    },
    font_2: {
        color: "#fff",
        backgroundColor: '#cd1d1c'
    }
});
// 导出模块
export default Header;

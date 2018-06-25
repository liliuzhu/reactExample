
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';
/*
* ListView 数据列表
* ListView最重要的是设置每行显示的组件
* section， header
*
* 使用ListView.DataSource 给他传递一个普通的数据数组，再使用dataSource对象实例化一个List组件。
* ListView实现：row/section 组件定义、设置数据
* 设置ListView数据源：
* 将dataSource对象设置为state属性，ListView会根据数据源进行渲染
* */

// 原始数据： 数组(字符串)
var contents = [
    "HTML",
    "HTML5",
    "CSS",
    "CSS3",
    "js",
    "javascript",
    "scmascript"
];
export default class MyListView extends Component{
    constructor(props){
        super(props);
        // 创建一个dataSource对象
        let ds = new ListView.DataSource({
            // 通过判断决定渲染那些行组件，避免全部渲染，提高渲染效率
            rowHasChanged: (oldRow, newRow) => oldRow !== newRow
        });
        this.state = {
           // 设置dataSourc时，不直接使用提供的原始数据，使用cloneWidthRow对数据进行复制
            // 使用复制后的数据源实例化ListView。优势：当原始数据发生变化时，ListView组件的dataSource不会改变
            dataSource: ds.cloneWithRows(contents)
        };
    };
    // 渲染row组件，参数是每行要显示的参数对象
    _renderRow(rowData:string){
        return (
            <View style={styles.row}>
                <Text style={styles.content}>{rowData}</Text>
            </View>
        )
    };
    render() {
        return (
            <ListView style={styles.container}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}>
            </ListView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25
    },
    row: {
        justifyContent:'center',
        alignItems: 'center',
        padding: 5,
        height: 100,
        borderWidth: 1,
        borderColor:'#ccc',
    },
    content: {
        flex:1,
        fontSize: 20,
        color: 'blue',
        lineHeight: 100
    }
});
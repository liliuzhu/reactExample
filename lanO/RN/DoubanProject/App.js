/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/*<TabBarIOS>
    <TabBarIOS.Item
        title="图书"
        selected={this.state.selectedTab === '图书'}
        onPress={_=>{
            this.setState({
                selectedTab: '图书'
            })
        }}
        icon={require('./static/images/book.jpg')}>
        <View style={{backgroundColor:'cyan'}}></View>
    </TabBarIOS.Item>
    <TabBarIOS.Item
        title="图书"
        selected={this.state.selectedTab === '电影'}
        onPress={_=>{
            this.setState({
                selectedTab: '电影'
            })
        }}
        icon={require('./static/images/book.jpg')}>
        <View style={{backgroundColor:'yellow'}}></View>
    </TabBarIOS.Item>
</TabBarIOS>*/
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar

} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import {Dimensions} from 'react-native';
import BookList from './android_views/book/book_list';
import MovieList from './android_views/movies/movie_list';
import Navigation from './android_views/common/navigation';

const deviceW = Dimensions.get('window').width

const basePx = 375

function px2dp(px) {
    return px *  deviceW / basePx
}

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor(props){
        super(props);
      this.state = {
          selectedTab: 'home'
      }
    };
    render() {
        return (
            <TabNavigator style={styles.container}>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    selectedTitleStyle={{color: "#3496f0"}}
                    renderIcon={() => <Image style={{width:px2dp(22),height:px2dp(22)}} source={require('./static/images/book.jpg')}/>}
                    renderSelectedIcon={() =><Image style={{width:px2dp(22),height:px2dp(22)}} source={require('./static/images/book.jpg')}/>}
                    onPress={() => this.setState({selectedTab: 'home'})}>
                    <Navigation component={MovieList}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'profile'}
                    title="Profile"
                    selectedTitleStyle={{color: "#3496f0"}}
                    renderIcon={() => <Image style={{width:px2dp(22),height:px2dp(22)}} source={require('./static/images/book.jpg')}/>}
                    renderSelectedIcon={() => <Image style={{width:px2dp(22),height:px2dp(22)}} source={require('./static/images/book.jpg')}/>}
                    onPress={() => this.setState({selectedTab: 'profile'})}>
                    <Navigation component={BookList}/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

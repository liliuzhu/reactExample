import { AppRegistry } from 'react-native';
/*
* 应用程序由很多功能视图组成，一个应用中最重要的功能之一就是“导航”，在ReactNative中成为“路由router”
* 使用导航器可以让你在应用的不同场景（页面）间进行切换
*
* 在ReactNative中，由两个实现导航功能的组件：Navigator和NavigatorIOS
* Navigator支持安卓和Ios，NavigatorIOS支持IOS
* NavigatorIOS比Navigator具有更多的属性和方法，在UI方面可以进行更多的设置，例如：backButtonIcon、
* backButtonTitle，onLeftButtonPress等等，比较方便
* 如果想实现更多的自定义设置，建议使Navigator
* */

// import App from './App';
// 实现导航功能，页面切换
// import App from './navigator';
// 实现导航功能，传值
import App from './passValue';
AppRegistry.registerComponent('lessonNavigator', () => App);

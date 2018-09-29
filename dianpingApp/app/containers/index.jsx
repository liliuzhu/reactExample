import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LocalStore from '../util/localStore'
import {CITYNAME} from '../config/localStoreKey'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userInfoActionsFrmmOtherFile from '../actions/userinfo'

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.initDone
                        ?this.props.children
                        :<div>加载中...</div>
                }
            </div>
        )
    }
    componentDidMount() {
        // 从localstorerage里面获取城市
        let cityName = LocalStore.getItem(CITYNAME);
        if (!cityName) {
            cityName = '北京';
        };
        // 将城市信息存储到Reactx中
        this.props.userInfoActions.login({
            cityName
        })
        setTimeout(_ => {
            this.setState({
                initDone: true
            })
        }, 1000)
    }
}
function mapStateToProps(state) {
    return {}
}
function mapDispachToProps(dispach) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFrmmOtherFile, dispach)
    }
}
export default connect(
    mapStateToProps,
    mapDispachToProps
)(App)

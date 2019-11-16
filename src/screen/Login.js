import React from 'react'
import {
    View,
    Text
} from 'react-native'
import * as actions from './../redux/actions/actionsUsers'
import { connect } from 'react-redux'
class Login extends React.Component {
    render() {
        return (
            <View>
                <Text>Login</Text>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleLogin: () => dispatch(actions.handleLogin())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
import React from 'react'
import {
    View,
    Text
} from 'react-native'
import { connect } from 'react-redux'
import * as actions from './../redux/actions/actionsUsers'

class Register extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    Register
                </Text>
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
        handleRegister: () => dispatch(actions.handleRegister())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register)
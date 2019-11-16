import React from 'react'
import {
    View,
    Text
} from 'react-native'
import { connect } from 'react-redux'

class Cart extends React.Component {
    render(){
        return (
            <View>
                <Text>
                    Cart
                </Text>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect (
    mapStateToProps
)(Cart)
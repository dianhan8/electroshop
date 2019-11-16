import React from 'react'
import {
    View,
    Text,
    ImageBackground
} from 'react-native'
import { connect } from 'react-redux'
import * as actions from './../redux/actions/actionsProduct'
import { NotificationError, NotificationSuccess } from '../component/Notif'
import { Icon, Button, Container } from 'native-base'
import { styles } from './../component/Styles'

class Items extends React.Component {
    constructor() {
        super()
        this.state = {
            data: ''
        }
    }
    buy = async ({ id, index }) => {
        try {
            const { product } = this.props.product
            const stock = product[index].stock - 1
            this.props.product.product[index].stock = stock
            const props = {
                message: 'Success To Add Cart'
            }
            NotificationSuccess(props)
            const params = this.props.product.product[index]
            const array = []
            array.push(...params)
            await this.props.handleAddToCart(array)
        } catch (error) {
            const props = {
                message: 'Cant Buy This Item',
                position: 'bottom'
            }
            NotificationError(props)
        }

    }
    render() {
        const index = this.props.navigation.getParam('index')
        const product = this.props.product.product[index]
        return (
            <Container style={{ paddingTop: 30 }}>
                <ImageBackground source={{ uri: product.image }} style={[styles.imageItems, { borderRadius: 10 }]}>
                    <Button rounded style={styles.btnBack} onPress={() => this.props.navigation.goBack()}>
                        <Icon style={[styles.nomargin, styles.dark, styles.icon40]}
                            type='AntDesign' name='arrowleft' color='#fff' />
                    </Button>
                </ImageBackground>
                <View style={styles.details}>
                    <Text style={[styles.fontSize30]}>{product.name}</Text>
                    <Text style={[styles.fontSize22, styles.margin10]}>Rp.{product.price}</Text>
                    <Text style={[styles.fontSize16]}>Stock : {product.stock}</Text>
                    <Text style={[styles.fontSize16, styles.margin10]}>{product.description}</Text>
                </View>
                <View>
                    <Button onPress={() => this.buy({ id: product.id, index: this.props.navigation.getParam('index') })}
                        style={[styles.btnbuy, styles.marginLeft20]}>
                        <Icon type='AntDesign' name='shoppingcart' />
                    </Button>
                </View>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        product: state.product,
        cart: state.cart
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleAddToCart: (params) => dispatch(actions.handleAddToCart(params))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Items)
import React from 'react'
import {
    View,
    Text,
    ActivityIndicator
} from 'react-native'
import {
    Header,
    Left,
    Body,
    Right,
    Icon,
    Button,
    Container
} from 'native-base'
import { connect } from 'react-redux'
import * as actions from './../redux/actions/actionsProduct'
import { NotificationError } from '../component/Notif'
import { ProductList } from '../component/Utils'
import { styles } from '../component/Styles'


class List extends React.Component {
    componentDidMount() {
        this.getProducts()
    }
    getProducts = async () => {
        try {
            await this.props.handleGetProduct()
        } catch (error) {
            const props = {
                message: 'Error Cant Fetch Data',
                position: 'bottom'
            }
            NotificationError(props)
        }
    }
    render() {
        const product = this.props.product.product
        return (
            <Container style={{ backgroundColor: '#f4f4f4' }} >
                <Header transparent style={styles.backgroundwhite} androidStatusBarColor="black">
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack('List')}>
                            <Icon style={[styles.nomargin, styles.dark, styles.icon40]} type='AntDesign' name='left' />
                        </Button>
                    </Left>
                    <Body>
                        <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Product</Text>
                    </Body>
                    <Right>
                        {
                            this.props.product.isLoading == true ?
                                <ActivityIndicator size='small' color='#3d3d3d' />
                                : null
                        }
                    </Right>
                </Header>
                <View>
                    <ProductList
                        data={product}
                        navigation={this.props.navigation}
                        refresh={this.getProducts}
                        loading={this.props.product.isLoading}
                    />
                </View>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        product: state.product
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleGetProduct: () => dispatch(actions.handleGetProduct())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)
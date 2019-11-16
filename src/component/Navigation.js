import React from 'react'
import { Icon } from 'native-base'
import { createAppContainer, createSwitchNavigator } from "react-navigation"
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

//Auth Screen
import LoginScreen from './../screen/Login'
import RegisterScreen from './../screen/Register'

//Auth Loading
import AuthLoadingScreen from './../screen/AuthLoading';

//Screen Head Private
import ListScreen from './../screen/List'
import CartScreen from './../screen/Cart'

//Screen Child Private
import DetailsItemsScreen from './../screen/Items'

const TabNavigator = createBottomTabNavigator({
    List: {
        screen: ListScreen,
        navigationOptions: {
            tabBarOptions: {
                activeTintColor: '#2ecc71',
                labelStyle: {
                    fontSize: 14,
                },
            },
            tabBarLabel: 'Product',
            tabBarIcon: ({ tintColor }) => (
                <Icon name='archive' size={40} style={{ color: tintColor }} type='EvilIcons'/>
            ),
            title:'Product',
        },
    },
    Cart: {
        screen: CartScreen,
        navigationOptions:{
            tabBarOptions: {
                activeTintColor: '#2ecc71',
                labelStyle: {
                    fontSize: 14,
                },
            },
            tabBarLabel: 'Cart',
            tabBarIcon: ({tintColor}) => (
                <Icon name='cart' size={40}style={{color: tintColor}} type='EvilIcons'/>
            )
        }
    }
},
{
    initialRouteName: 'List'
})

const ChildPrivateScreen = createStackNavigator({
    Details: {
        screen: DetailsItemsScreen,
        navigationOptions: {
            header: null
        }
    },
    Head : {
        screen: TabNavigator,
        navigationOptions: {
            header: null
        }
    }
},
{
    initialRouteName: 'Head'
})

const PublicScreen = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    SignIn: LoginScreen,
    SignUp: RegisterScreen,
    App: ChildPrivateScreen
},
{
    initialRouteName: 'App'
})

export default createAppContainer(PublicScreen)
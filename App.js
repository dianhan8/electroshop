import React from 'react'
import { Provider, connect } from 'react-redux'
import { createReduxContainer } from 'react-navigation-redux-helpers'
import { Root } from 'native-base'

//From Redux
import Navigations from './src/component/Navigation'
import { store } from './src/redux/store'

//Nav To Redux
const Nav = createReduxContainer(Navigations, 'root')

const mapStateToProps = state => ({
  state: state.router
})

const AppCombineNavigationRedux = connect(mapStateToProps)(Nav)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <AppCombineNavigationRedux />
        </Root>
      </Provider>
    )
  }
}
export default App
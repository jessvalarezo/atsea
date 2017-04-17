import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import reducer from './reducers'
import {
  fetchAllDummyItems,
  fetchAllItems,
  fetchContainerId,
} from './actions'
import App from './containers/App'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CheckoutContainer from './containers/CheckoutContainer'


const middleware = [ 
  thunkMiddleware,
  promiseMiddleware({
    promiseTypeSuffixes: ['REQ', 'ACK', 'ERR'],
  }),
];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
)

const muiTheme = getMuiTheme({
  textField: {
    focusColor: '#9fa5a8',
  },
})

store.dispatch(fetchAllDummyItems())
// TODO: remove line above and uncomment line below when requests are working
// store.dispatch(fetchAllItems())
store.dispatch(fetchContainerId())

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="checkout" component={CheckoutContainer} />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)

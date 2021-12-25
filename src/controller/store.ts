import { createStore,applyMiddleware } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk'
import reducers from './reducers'

const initData = {}
const middleware = [thunk]

const composeEnhancers = composeWithDevTools({ suppressConnectErrors:false, realtime: true,host: 'localhost', port: 9000 });
const store = createStore(
    reducers,
    initData,
    composeEnhancers(
        applyMiddleware(...middleware)
    )
)

export default store
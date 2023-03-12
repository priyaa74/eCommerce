import {applyMiddleware, legacy_createStore, combineReducers} from 'redux'
import logger from 'redux-logger'
import {reducer as ProductReducer} from './ProductReducer/reducer'
import {reducer as AuthReducer} from './AuthReducer/reducer'
import {reducer as CartReducer} from './CartReducer/reducer'
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'


const allReducers= combineReducers({ProductReducer,AuthReducer,CartReducer})
const persistConfig={
    key:'root',
    storage
}

const persistedReducer= persistReducer(persistConfig,allReducers)
const reduxStore= legacy_createStore(persistedReducer,
    applyMiddleware(logger,thunk));

    export default reduxStore;

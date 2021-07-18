import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './reducers/dataReducer';


const rootReducer = combineReducers({
    dataReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))
import {combineReducers, createStore} from 'redux'

const rootReducer = combineReducers({
    //các state dự án sẽ được khai báo tại đây
    stateNumber: (state = 1) => {
        return state;
    }
});


export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

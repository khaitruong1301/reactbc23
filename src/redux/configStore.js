import { combineReducers, createStore } from 'redux'
import { gioHangReducer } from './reducers/gioHangReducer';
import { stateNumber } from './reducers/numberReducer';
import { stateImgCar } from './reducers/stateImgCarReducer';

const rootReducer = combineReducers({
    //các state dự án sẽ được khai báo tại đây
    stateNumber: stateNumber,
    stateImgCar: stateImgCar,
    gioHangReducer:gioHangReducer



});


export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

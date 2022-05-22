import { createStore } from 'redux';
import RootReducer from './Reducers/index';


const store = createStore(RootReducer);

export default store;
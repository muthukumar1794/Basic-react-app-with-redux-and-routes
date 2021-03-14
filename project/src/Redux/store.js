import { createStore, applyMiddleware } from "redux";
import demoReducer from './Reducers/Reducer'


const store = createStore(demoReducer);

export default store;
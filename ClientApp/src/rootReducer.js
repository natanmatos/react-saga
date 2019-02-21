import {combineReducers} from 'redux';
import listReducer from './components/Theme/ListView/reducers';

const reducers = combineReducers({
  listView: listReducer
});

export default reducers;
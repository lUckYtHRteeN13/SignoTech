import { combineReducers } from 'redux';
import SearchReducer from './SearchReducer';
import HistoryReducer from './HistoryReducer';

export default combineReducers({
  SearchReducer, HistoryReducer
});

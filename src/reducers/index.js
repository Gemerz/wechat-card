import { combineReducers } from 'redux';
import todos from './todos';
import cards from './cards';

export default combineReducers({
	todos, cards
});

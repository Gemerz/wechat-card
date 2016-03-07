import { combineReducers } from 'redux';
import todos from './todos';
import wizforms from './wizforms';


export default combineReducers(
	{ todos, wizforms }
);

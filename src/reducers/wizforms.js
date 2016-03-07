import binding from 'redux-2way-binding';
import Immutable, { List, Map } from 'immutable';
import { combineReducers } from 'redux';

const bindingStore = binding.bindingStore;
//
const initialState = Immutable.fromJS({});

function wizforms(state = List(), action) {

	return state;

}
export default combineReducers(
	{ wizforms }
);


//export default bindingStore('wizforms', initialState, {});

//handlers['BINDING_UPDATE']= (data, action) => {
//    return data.setIn(action.path,action.value);
//};


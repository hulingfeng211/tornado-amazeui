import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { REQUEST_INQUIRIES, RECEIVE_INQUIRIES, REQUEST_PRODUCTS,
 RECEIVE_PRODUCTS, REQUEST_PERSON, 
 RECEIVE_PERSON ,
 RECEIVE_ERROR_LOG} from '../actions/actionTypes'


import todos from './todos';
import visibilityFilter from './visibilityFilter';

function inquiries(state = [], action) {
	switch(action.type){
		case REQUEST_INQUIRIES:
			return state;
		case RECEIVE_INQUIRIES:
			return action.inquiries;
		default:
			return state;
	}
}

function products(state = [], action) {
	switch(action.type){
		case REQUEST_PRODUCTS:
			return state;
		case RECEIVE_PRODUCTS:
			return action.products;
		default:
			return state;
	}
}

function person(state = [], action) {
	switch(action.type){
		case REQUEST_PERSON:
			return state;
		case RECEIVE_PERSON:
			return action.person;
		default:
			return state;
	}
}
function error(state=[],action){
	switch(action.type){
		case RECEIVE_ERROR_LOG:
			console.log('state=')
			console.log(state)
			console.log('action=')
			console.log(action)

			return state.concat(action.error);
		default:
			return state;
	}
}

const myApp = combineReducers({
	 visibilityFilter,
	todos,
	inquiries,
	products,
	person,
	error,
	"routing": routerReducer
	//add other  here
});

export default myApp;
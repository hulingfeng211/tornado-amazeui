import { ADD_TODO, COMPLETE_TODO, REQUEST_TODOS, RECEIVE_TODOS } from '../actions/actionTypes';

export default function todos(state = [], action) {
  switch (action.type) {
    case REQUEST_TODOS:

      return state;

    case RECEIVE_TODOS:

      return action.todos;

    case ADD_TODO:
      return [{
        text: action.text,
        completed: false
      }, ...state];

    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ];

    default:
      return state;
  }
}
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {List, Grid, Col} from 'amazeui-touch';

import Todo from './Todo';
import {VisibilityFilters } from '../actions/actionTypes';
import { fetchTodos, completeTodo } from '../actions/actions';

export default class TodoList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTodos());
  }

  onTodoClick(index){
    const { dispatch} = this.props;

    return dispatch(completeTodo(index));
  }

  render() {
    // 通过调用 connect() 注入:
    const { dispatch, visibleTodos } = this.props;

    return (
      <Grid className="doc-g">
        <Col sm={12}>
          <List>
            {visibleTodos.map((todo, index) =>
              <Todo {...todo}
                    key={index}
                    onClick={() => this.onTodoClick(index)} />
            )}
          </List>
        </Col>
      </Grid>
    )
  }
}

TodoList.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}

function selectTodos(todos, filter) {
  switch (filter) {
  case VisibilityFilters.SHOW_ALL:
    return todos;
  case VisibilityFilters.SHOW_COMPLETED:
    return todos.filter(todo => todo.completed);
  case VisibilityFilters.SHOW_ACTIVE:
    return todos.filter(todo => !todo.completed);
  }
}

// 基于全局 state ，哪些是我们想注入的 props ?
// 注意：使用 https://github.com/faassen/reselect 效果更佳。
function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter)
  };
}

export default connect(select)(TodoList);
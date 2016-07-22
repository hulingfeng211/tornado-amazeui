import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {List, Grid, Col} from 'amazeui-touch';

export default class Todo extends Component {
  render() {
    return (
      <List.Item
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          cursor: this.props.completed ? 'default' : 'pointer'
        }}
        title={this.props.text} />
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};
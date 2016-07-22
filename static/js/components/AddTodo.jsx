import React, { Component } from 'react';
import {Button, Grid, Col, Field} from 'amazeui-touch';
import { connect } from 'react-redux';

import { addTodo } from '../actions/actions';

class AddTodo extends Component {

  render() {
    return (
      <div>
        <Grid className="doc-g">
          <Col sm={8}>
            <Field type="text" ref='input' onKeyUp={e => this.handleEnter(e)}></Field>
          </Col>
          <Col sm={4}>
            <Button amStyle="primary"  onClick={e => this.handleClick(e)}>Add</Button>
          </Col>
        </Grid>
      </div>
    );
  }

  handleClick() {
    this.addTodo();
  }

  handleEnter(e) {
    if(e.keyCode === 13){
      this.addTodo();
    }
  }

  addTodo(){
      const node = this.refs.input.getFieldDOMNode();
      const text = this.refs.input.getValue().trim();
      
      if(text === '') return

      this.onAddClick(text);
      node.value = '';
  }

  onAddClick(text){
    const { dispatch } = this.props;

    dispatch(addTodo(text));
  }
}

export default connect()(AddTodo);
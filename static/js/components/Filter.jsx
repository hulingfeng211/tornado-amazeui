import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {List, Grid, Col, Badge} from 'amazeui-touch';

import { setVisibilityFilter } from '../actions/actions';

class Filter extends Component {
  renderFilter(filter, name) {
    if (filter === this.props.visibilityFilter) {
      return (
        <Badge amStyle='success' >
          {name}
        </Badge>
      )
    }

    return (
      <Badge href="#"
        amStyle='default'
        onClick={e => {
          e.preventDefault();
          this.onFilterChange(filter);
        }}
      >
        {name}
      </Badge>
      
    )
  }

  onFilterChange(nextFilter){

    // 通过调用 connect() 注入:
    const { dispatch } = this.props;

    return dispatch(setVisibilityFilter(nextFilter))
  }

  render() {
    
    return (
      <Grid className="doc-g" align="center">
          <Col cols={6}>
        Show:
        {' '}
        {this.renderFilter('SHOW_ALL', 'All')}
        {' '}
        {this.renderFilter('SHOW_COMPLETED', 'Completed')}
        {' '}
        {this.renderFilter('SHOW_ACTIVE', 'Active')}
        
          </Col>
      </Grid>
    );
  }
}


function select(state) {
  return {
    visibilityFilter: state.visibilityFilter
  };
}

export default connect(select)(Filter);
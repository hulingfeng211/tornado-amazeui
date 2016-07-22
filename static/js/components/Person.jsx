import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Group, Container, NavBar, View, List } from 'amazeui-touch';

import { fetchPerson } from '../actions/actions';

class Person extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchPerson());
	}

    render() {

      // 通过调用 connect() 注入:
		const { dispatch, person } = this.props;

		const linkProps = {
			to: '/products/article'
		};

		return (
		    <Container {...this.props}>
		      <Group
		          header="联系人列表"
		          noPadded
		        >
		        <List>
		          {person.map((person, index) =>
		            <List.Item title={person.text} key={index} linkComponent={Link} linkProps={linkProps} />
		          )}
		        </List>
		        </Group>
		    </Container>
		)
    }
}

function select(state) {
  return {
    person: state.person
  };
}

export default connect(select)(Person);
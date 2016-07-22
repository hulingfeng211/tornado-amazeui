import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Group, Container, NavBar, View, List } from 'amazeui-touch';

import { fetchProducts } from '../actions/actions';

class Products extends Component {
    componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchProducts());
	}

	render() {

		// 通过调用 connect() 注入:
		const { dispatch, products } = this.props;

		const linkProps = {
			to: '/products/article'
		};

		return (
		    <Container {...this.props}>
		      <Group
		          header="产品列表"
		          noPadded
		        >
		        <List>
		          {products.map((product, index) =>
		            <List.Item title={product.text} key={index} linkComponent={Link} linkProps={linkProps} />
		          )}
		        </List>
		        </Group>
		    </Container>
		)
	}
}

function select(state) {
  return {
    products: state.products
  };
}

export default connect(select)(Products);
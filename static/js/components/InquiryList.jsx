import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { List, Group, Container, NavBar, View } from 'amazeui-touch';

import { fetchInquiries } from '../actions/actions';

class InquiryList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchInquiries());
  }

  render() {

    // 通过调用 connect() 注入:
    const { dispatch, inquiries } = this.props;

    const linkProps = {
      to: '/products/article'
    };

    return (
        <Container {...this.props}>
          <Group
              header="最新消息"
              noPadded
            >
            <List>
              {inquiries.map((inquiry, index) =>
                <List.Item 
                  title={inquiry.text}
                  key={index}
                  linkComponent={Link}
                  linkProps={linkProps} />
              )}
            </List>
            </Group>
        </Container>
    )
  }
}

function select(state) {
  return {
    inquiries: state.inquiries
  };
}

export default connect(select)(InquiryList);
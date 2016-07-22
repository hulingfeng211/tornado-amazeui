import React, { Component } from 'react';
import { Container, NavBar, View} from 'amazeui-touch';

import InquiryList from './InquiryList';
import AppMenu from './AppMenu';

class Home extends Component {
   

  render() {
    let component = this.props.params.component;

    return (
      <View id="app-index">
        <NavBar amStyle="primary" title="React App" />
        <Container fill scrollable >
          <AppMenu />
        </Container>
      </View>
    )
  }
}
Home.defaultProps = {
    transition: 'sfl'
  };
export default Home;
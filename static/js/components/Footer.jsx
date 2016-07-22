import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'

import { TabBar} from 'amazeui-touch'
import { push } from 'react-router-redux'

class Footer extends Component {

  constructor(props){
    super(props);
    this._onHandleClick = this.onHandleClick.bind(this);
  }

  render() {
    let {params} = this.props;

    return (
      <TabBar amStyle="primary">
        <TabBar.Item component={Link} icon="home" to="/"  badge={5} selected={!params.component} title="首页" onClick={this._onHandleClick} />
        <TabBar.Item component={Link} icon="list" to="/products" selected={params.component === 'products'} title="商品" />
        <TabBar.Item component={Link} icon="person" to="/person" selected={params.component === 'person'}  title="联系人" />
        <TabBar.Item component={Link} icon="gear" to="/settings" selected={params.component === 'settings'}  title="设置" />
      </TabBar>
    );
  }

  onHandleClick() {
    console.log(this);
  }
}


export default Footer;
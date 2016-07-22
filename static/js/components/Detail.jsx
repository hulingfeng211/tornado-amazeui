import React, {Component} from 'react'
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux'

import { NavBar, View } from 'amazeui-touch';

class Detail extends Component {
     
  render() {

    let backNav = {
      component: 'a',
      icon: 'left-nav',
      title: '返回3'
    };

    const clickHandler = (item, e) => {
      e.preventDefault();

      const { dispatch } = this.props;
      dispatch(goBack());
    };

    return (
      <View>
        <NavBar
          title="文章内容"
          leftNav={[backNav]}
          amStyle="primary"
          onAction={clickHandler}
        />
        hello world
      </View>
      )

  }
};

export default connect()(Detail);
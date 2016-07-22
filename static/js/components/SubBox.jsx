import React, {Component} from 'react'
import { Link } from 'react-router'
//import * as test from 'react-router-redux'
import {LOCATION_CHANGE, routerActions} from 'react-router-redux'
import { NavBar, View } from 'amazeui-touch';
import { goBack } from 'react-router-redux';
import * as Components from '../components';
import NotFound from '../components/NotFound';
import { connect } from 'react-redux';

class SubBox extends Component {

  render() {

    let component = this.props.params.component;

    if (component) {
      component = component.charAt(0).toUpperCase() + component.slice(1);
    }
    console.log('component')
    console.log(component)
    console.log('Components')
    console.log(Components)
    
    let Currentcomponent = Components[component] || NotFound;
     
    let backNav = {
      component: 'a',
      icon: 'left-nav',
      title: '返回'
    };
    const clickHandler = (item, e) => {
      e.preventDefault();

      const { dispatch } = this.props;
      dispatch(goBack());
    };
    return (
      <View>
        <NavBar
          title={component}
          leftNav={[backNav]}
          amStyle="primary"
          onAction={clickHandler}
        />
        <Currentcomponent noPadded scrollable className="sk-demos" />
      </View>
      )
  }
};

export default connect()(SubBox);
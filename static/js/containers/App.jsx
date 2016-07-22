import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {View,Container,Grid} from 'amazeui-touch';

import Footer from '../components/Footer'; 


class App extends React.Component {

	componentWillMount(){
		this.transitionHandler = 'sfr'
	}

	componentWillReciveProps(nextProps){

		let location = this.props.location.pathname
		if(location.indexOf('article')!=-1){
			this.transitionHandler='rfr'
		}
		else{
			this.transitionHandler='sfr'
		}
	}
	render(){
		let {location,params,children,...props} = this.props
		let transition = this.transitionHandler;

		return (<View id='app-index'>
				<Container direction = 'column' id='container' >
					<Container transition={transition}>
						{React.cloneElement(children,{key:location.key})}
					</Container>
					<Footer {...this.props} />
				</Container>
			</View>);
	}
}
export default connect()(App)

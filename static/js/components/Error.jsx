import React from 'react';
import { fetchError } from '../actions/actions';
import { Group, Container, NavBar, View, List,Button } from 'amazeui-touch';
import { connect } from 'react-redux';

class Error extends React.Component{
	constructor(props){
		super(props)
		this.state={pageIndex:1,hollow:true}
	}
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchError(this.state.pageIndex));
	}

	render(){
		const img40 = <img width="48" src="http://lorempixel.com/160/160/people/" />;
		const { dispatch, errors,pageIndex } = this.props;

		const clickHandler=(event)=>{
			event.preventDefault();
			console.log('get more clicked.')

			let nextPageIndex=this.state.pageIndex+1;
			dispatch(fetchError(nextPageIndex))
			this.setState({pageIndex:nextPageIndex,hollow:true})

		}

		return (<Container {...this.props}>
		      <Group noPadded>
		        <List>
		          {errors.map((error, index) =>
		            <List.Item title={'Error'} 
		            desc={error.message} 
		             
		            subTitle={error.time} 
		            key={index}   />
		          )}
		        </List>
		        <Button onClick={clickHandler} block justify hollow={this.state.hollow} amStyle="secondary">More...</Button>
		        </Group>
		    </Container>)
	}
}
function select(state) {
  return {
    errors: state.error
  };
}
export default connect(select)(Error)
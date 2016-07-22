import React from 'react';
import {Link} from  'react-router';
import {
	Container,
	Grid,
	Col,
	Icon,
	Group
}
from 'amazeui-touch';


const menus = [{name:'外网短信',icon:'info',to:"message"},
				{name:'Todos','icon':'bars',to:"settings"},
				{name:'error','icon':'star',to:"error"},
				]

class AppMenu extends React.Component {
	render(){
		return (<Container {...this.props}>
					<Group>
					<Grid avg={4} bordered className="sk-icons text-center">
						{
							menus.map((menu,index)=> {
							return (<Col key={index}>
										<Link to={menu.to}><Icon name={menu.icon} key={index}> </Icon>
										<div className="sk-icon-name" text-tuncate>
											{menu.name}
										</div></Link>
									</Col>);
							})
						}
					</Grid>
					</Group>
				</Container>)
	}
}

export default AppMenu
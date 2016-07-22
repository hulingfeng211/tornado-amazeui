import React,{Component,PropType} from 'react';
import {Container,Tabs,List,Group,Button} from 'amazeui-touch';
import request from 'superagent';

const tabs = [{title:'微信',type:'wechat'},
				{title:'第翼',type:'1xinxi'},
				{title:'畅卓',type:'chanzor'}
]
class MessageList extends React.Component {
	constructor(props){
		super(props)
		this.state={messages:[],type:this.props.type,pageIndex:1,moreBtnText:'More...',moreBtnDisable:false}
		this.loadMessage =this.loadMessage.bind(this);

	}
	render(){
		//console.log(this.props)

		let type = this.props.type;
		let message_list = []
		this.state.messages.map((item)=>{
			if(type=='wechat'){
				message_list.push({title:item.message.user,
					desc:item.message.content.content,
					after:item.time,
					subTitle:item.time})
			}
			else if(type == '1xinxi'){
				message_list.push({title:item.message.mobile,
					desc:item.message.content,
					subTitle:item.sendid,
					after:item.message.extno})
			}
			else if(type=='chanzor'){
				message_list.push({title:item.message.mobile,
					desc:item.message.content,
					after:item.time,
					subTitle:item.message.account})
			}
		})
		const clickHandler=(event)=>{
			event.preventDefault();
			console.log('get more clicked.')

			let nextPageIndex=this.state.pageIndex+1;
			console.log(this.state)
			//dispatch(fetchError(nextPageIndex))
			//this.setState({pageIndex:nextPageIndex,hollow:true})
			this.setState({pageIndex:nextPageIndex})
			this.loadMessage(nextPageIndex)
		}
		return(<Container  {...this.props}>
				<Group noPadded style={{'margin-top':'0px'}}>
				<List>
		          {message_list.map((item, index) =>
		            <List.Item  {...item}
		            key={index}   />
		          )}
		        </List>
		        <Button onClick={clickHandler} block justify disabled={this.state.moreBtnDisable} hollow={this.state.hollow} 
		        amStyle="secondary">{this.state.moreBtnText}</Button>
		        </Group>
			</Container>)
	}
	loadMessage(pageIndex){

		//console.log(this.props)

		request('GET', '/api/message')
		.query({pageIndex:pageIndex})
		.query({type:this.props.type})
		.then(function(res){
			//console.log(res);
			let new_data=JSON.parse(res.text).data
 			if (new_data.length>0){
				if (pageIndex==1){
					this.setState({messages:new_data})	
				}
				else if(pageIndex>=2){
					this.setState({messages:this.state.messages.concat(new_data)})
				}
			}
			else {
				this.setState({moreBtnDisable:true,moreBtnText:'No more Data.'})

			}
		}.bind(this));
	}
	componentWillReceiveProps(nextprops){
		if(nextprops.type==nextprops.currentTab){
			this.setState({pageIndex:1,messages:[]})
			this.loadMessage(1)
		}
		console.log('componentWillReceiveProps');
		console.log(nextprops)
		//console.log(this.props)
	}
	shouldComponentUpdate(nextProps,nextStates){
		//console.log('shouldComponentUpdate');
		//console.log(nextProps)
		//console.log(nextStates)
		//console.log(this.props)
		return true;
	}
	componentDidMount(){
		console.log('componentDidMount')
		this.loadMessage(1);
	}
}
 

class Message extends React.Component{
	constructor(props){
		super(props)
		this.state={activeTab:0}
		this.handleAction = this.handleAction.bind(this);

	}
	handleAction(key){
		this.setState({activeTab:key})

	}
	

	render(){
		 
		return (<Container fill {...this.props}>
        
        <Tabs style={{'margin-top':'0px'}} 
          defaultActiveKey={this.state.activeTab}
          onAction={this.handleAction}
        >  
        {tabs.map((tab, i) => {
            return (
              <Tabs.Item
                title={tab.title}
                style={{padding:'0px'}}
                key={i}
                navStyle={i === 1 ? 'alert' : i === 0 ? 'warning' : null}
              >
                <MessageList type={tab.type} currentTab={tabs[this.state.activeTab].type} />
              </Tabs.Item>
            )
          })} 
         
        </Tabs>
        </Container>)
	}
}
export default Message
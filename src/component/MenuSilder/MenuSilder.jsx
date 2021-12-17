
import React, { Component } from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './MenuSilder.scss'
import 'antd/dist/antd.css';
const { SubMenu } = Menu;
export default class MenuSilder extends Component {
  constructor(props,content){
    super(props,content)
      this.state = {
        menus:[
          {name:"Domitory 1",key:'/Domitory1',submenu:[{
            name:"Student Management",key:"/Domitory1/Student"
          },{name:"Room Management",key:"/Domitory1/Room"}]},{name:"Domitory 2",key:'/Domitory2',submenu:[{
            name:"Student Management",key:"/Domitory2/Student"
          },{name:"Room Management",key:"/Domitory2/Room"}]},{name:"Domitory 3",key:'/Domitory3',submenu:[{
            name:"Student Management",key:"/Domitory3/Student"
          },{name:"Room Management",key:"/Domitory3/Room"}]}
        ],
        counter:0
      }
  }
  
      
    handleClick = e => {
        console.log('click ', e);
      };
    
    render() {
      var counter = 0
        return (
            
               <Menu
        onClick={this.handleClick}
        id='LeftMenu'
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >{
        
        this.state.menus.map((item,index)=>{
          if(item.submenu){
            return <SubMenu className={"dor"+index} key={"sub"+index+1}  title={item.name}>{
              item.submenu.map((i,j)=>{
                this.state.counter+=1
               return <Menu.Item className='items' key={this.state.counter}><Link className="list-group-item" to={i.key}>{i.name}</Link> </Menu.Item>
              })
            }
          
            
            
                  
        </SubMenu>
          }
        })
      }
        
        {/* <SubMenu className='dor one' key="sub1"  title="Domitory 1">
          
            <Menu.Item className='items' key="1">Student Management</Menu.Item>
            <Menu.Item className='items' key="2">Room Management</Menu.Item>
                  
        </SubMenu>
        <SubMenu className='dor two' key="sub2"  title="Domitory 2">
          <Menu.Item className='items' key="5">Student Management</Menu.Item>
          <Menu.Item className='items' key="6">Room Management</Menu.Item>          
        </SubMenu>
        <SubMenu className='dor three' key="sub3"  title="Domitory 3">
          <Menu.Item className='items' key="9">Student Management</Menu.Item>
          <Menu.Item className='items' key="10">Room Management</Menu.Item>

        </SubMenu> */}
      </Menu>
           
        )
    }
}

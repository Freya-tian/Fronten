
import React, { Component } from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './MenuSilder.scss'
import 'antd/dist/antd.min.css';
const { SubMenu } = Menu;
export default class MenuSilder extends Component {
   state = {
    menus:[],
    counter:0
  }  
  //接口获取菜单
  GetDomitory = () =>{
    let obj=[];
    fetch("/api/buildings", {
      method: 'GET',
      mode: 'cors',      
    }).then(reponse=>reponse.json())
    .then(res=>{
      res.map((item,index)=>{
        obj.push({
          "ID":item._id, "name":item.buildingName,"key":`/${item.buildingName}`,submenu:[{
           "name":"Student Management","key":`/${item._id}/Student`},{"name":"Room Management","key":`/${item._id}/Room`}]
         
       })
          this.setState({menus:[...obj]})
      })
    })
    this.setState({counter:0})
  }; 
  // 向父级传递参数
  returnPath = (path)=>{
    this.props.returnId(path)
  }
  //页面一加载就执行
  componentDidMount(){
    this.GetDomitory()
  }  
  // 处理点击事件  /
  handleClick = e => {
        console.log('click ', e);
        this.props.returnId(e.keyPath[1],e.key)
  };

    
    render() {
      var count = 0
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
            count+=1
            return <SubMenu className={"dor"} key={item.ID}  title={item.name}>{
              item.submenu.map((i,j)=>{
                
                this.state.counter=index+j+count
                
               return <Menu.Item className='items' key={ this.state.counter} ><Link className="list-group-item" to={i.key}>{i.name}</Link> </Menu.Item>
              })
            }
          
            
            
                  
        </SubMenu>
          }
        })
      }
        
        
      </Menu>
           
        )
    }
}

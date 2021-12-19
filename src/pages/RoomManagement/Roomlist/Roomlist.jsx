import React, { Component } from 'react'
import './Roomlist.scss'
import RoomListItem from '../RoomListItem/RoomListItem'
export default class Roomlist extends Component {
    state={
        dormitory:this.props.dormitoryId,
        ShowRoomList:[]
    }
    getRoomList=(dormitoryId)=>{
        fetch('/api/rooms?buildingId='+ this.state.dormitory , {
            method: 'GET',
            mode: 'cors',      
          })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)

            
            this.setState({ShowRoomList:[...result]})
        })
    }
    componentDidMount(){
        this.getRoomList()
    }

    componentWillReceiveProps (nextProps) {
        if(nextProps.dormitoryId !=this.props.dormitoryId){
            this.setState({
                dormitory: nextProps.dormitoryId
            },()=>this.getRoomList()
            );
          }
        
    }
      
    render() {
        console.log(this.state.ShowRoomList)   
        const {dormitoryId} = this.props     
        
        console.log(this.props.dormitoryId);
        return (
            <div className='Container'>
                <ul className='List'>{
                        this.state.ShowRoomList.map((item,index)=>{
                           return <RoomListItem key={item._id} {...item}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}

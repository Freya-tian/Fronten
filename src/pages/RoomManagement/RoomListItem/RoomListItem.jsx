import React, { Component } from 'react'

import room from '../../../img/room.jpg'
import './RoomListItem.scss'
export default class RoomListItem extends Component {
    render() {
        return (
            <li className='ItemContainer'>    
                <div className="imgContainer">
                    <img className='roomPic' src={room} alt="" />
                </div>
                
                <div className="nmberRoom">101</div>
                <div className="coverContainer">
                    <div className="cover"></div>

                    <div className="opretors">                        
                        <div className="addIcon" lab></div> 
                        <div className="WriteIcon"></div> 
                        <div className="InfoIcon"></div>                       
                    </div>
                </div>
              
            </li>
        )
    }
}

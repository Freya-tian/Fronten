import React, { Component } from 'react'
import './RoomSearchList.scss'
import room from '../../../img/room.jpg'
export default class RoomSearchList extends Component {
    render() {
        return (
            <div className='SearchItemContainer'>
                <div className="imgContainer">
                    <img className='roomPic' src={room} alt="" />

                </div>
                <div className="nmberRoom">101</div>
                <div className="coverContainer">
                    <div className="cover"></div>

                    <div className="opretors">
                        <div className="addIcon"></div>
                        <div className="WriteIcon"></div>
                        <div className="InfoIcon"></div>
                    </div>
                </div>
            </div>
        )
    }
}

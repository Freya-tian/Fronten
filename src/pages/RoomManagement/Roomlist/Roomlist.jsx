import React, { Component } from 'react'
import './Roomlist.scss'
import RoomListItem from '../RoomListItem/RoomListItem'
export default class Roomlist extends Component {
    render() {
        return (
            <div className='Container'>
                <ul className='List'>
                    <RoomListItem/>
                    <RoomListItem/>
                    <RoomListItem/>
                    <RoomListItem/>
                    <RoomListItem/>
                    <RoomListItem/>
                    <RoomListItem/>
                    <RoomListItem/>
                    <RoomListItem/>
                    <RoomListItem/>
                    <RoomListItem/>
                    <RoomListItem/>
                    <RoomListItem/>
                    <RoomListItem/>
                </ul>
            </div>
        )
    }
}

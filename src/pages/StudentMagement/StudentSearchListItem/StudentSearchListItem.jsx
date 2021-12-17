import React, { Component } from 'react'
import './StudentSearchListItem.scss'
import Avatar from '../../../img/Avatar.jpg'
export default class StudentSearchListItem extends Component {
    render() {
        return (
            <li className='StudentItemContainer'>
                <div className='AvatarContainer'>
                    <img className='Avatar' src={Avatar} alt="" />
                </div>
                <div className="Info">
                    <div className="StudentID">
                        <span>ID :</span>
                        <span>123</span>
                    </div>
                    <div className="StudenName">
                        <span>Name :</span>
                        <span>Tianqi</span>
                    </div>
                    <div className="StudenCountry">
                        <span>Country :</span>
                        <span>China</span>
                    </div>
                    <div className="StudenPhone">
                        <span>Phone :</span>
                        <span>79916737734</span>
                    </div>
                    <div className="StudenRoom">
                        <span>№ Room :</span>
                        <span>101</span>
                    </div>                    
                </div>
                <div className="opretors">
                    <div className="editorStudent">

                    </div>
                    <div className="deleteStudent">

                    </div>
                </div>
            </li>
        )
    }
}

import React, { Component } from 'react'
import StudentSearchListItem from '../StudentSearchListItem/StudentSearchListItem'
import './StudentSearchList.scss'
export default class StudentSearchList extends Component {
    render() {
        return (
            <ul className='SearchList'>
                <StudentSearchListItem/>
                <StudentSearchListItem/>
                <StudentSearchListItem/>
                <StudentSearchListItem/>
                <StudentSearchListItem/>
                <StudentSearchListItem/>
                <StudentSearchListItem/>
                <StudentSearchListItem/>
                <StudentSearchListItem/>
                <StudentSearchListItem/>


            </ul>
        )
    }
}

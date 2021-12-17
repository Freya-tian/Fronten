import React, { Component } from 'react'
import './StudentList.scss'
import StudentTableItem from '../StudentTableItem/StudentTableItem'
export default class StudentList extends Component {
    render() {
        return (
            <table className='StudentTable'>
                <tr className='TitleTable'>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Country</th>
                    <th>№ Room</th>
                    <th>Manage</th>
                </tr>
                <StudentTableItem/>
                <StudentTableItem/>
                <StudentTableItem/>
                <StudentTableItem/>
                <StudentTableItem/>
                <StudentTableItem/>
                <StudentTableItem/>
                <StudentTableItem/>
                <StudentTableItem/>
                <StudentTableItem/>
                <StudentTableItem/>
                <StudentTableItem/>
                <StudentTableItem/>
                <StudentTableItem/>
                <StudentTableItem/>
                <StudentTableItem/>

            </table>
        )
    }
}

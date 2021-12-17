import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Roomlist from '../../pages/RoomManagement/Roomlist/Roomlist'
import RoomSearchList from '../../pages/RoomManagement/RoomSearchList/RoomSearchList'
import StudentSearchList from '../../pages/StudentMagement/StudentSearchList/StudentSearchList'
import StudentList from '../../pages/StudentMagement/StudentList/StudentList'
import './RightBlock.scss'

import SearchBlock from '../SerachBlock/SerachBlock'
export default class RightBlock extends Component {
    render() {
        return (
            <div className='RightBlockContainer'>
                <SearchBlock />
                <Routes>
                    <Route exact path="/Domitory1/Room" element={<Roomlist />} ></Route>
                    <Route exact path="/Domitory2/Room" element={<Roomlist />} ></Route>
                    <Route exact path="/Domitory3/Room" element={<Roomlist />} ></Route>
                    <Route exact path="/Domitory1/Student" element={<StudentList/>}></Route>
                    <Route exact path="/Domitory2/Student" element={<StudentList/>} component ={StudentList}></Route>
                    <Route exact path="/Domitory3/Student" element={<StudentList/>}  component ={StudentList}></Route>


                </Routes>

                {/* <Roomlist /> */}
                {/* <RoomSearchList/> */}
                {/* <StudentSearchList/> */}
                {/* <StudentList/> */}
            </div>
        )
    }
}

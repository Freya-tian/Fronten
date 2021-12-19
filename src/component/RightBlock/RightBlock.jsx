import React, { Component } from 'react'
import { Route, Routes,Navigate } from 'react-router-dom'
import Roomlist from '../../pages/RoomManagement/Roomlist/Roomlist'
import RoomSearchList from '../../pages/RoomManagement/RoomSearchList/RoomSearchList'
import StudentSearchList from '../../pages/StudentMagement/StudentSearchList/StudentSearchList'
import StudentList from '../../pages/StudentMagement/StudentList/StudentList'
import EditorStudentInfo from '../../pages/StudentMagement/EditorStudentInfo/EditorStudentInfo'
import HomePage from '../HomePage/HomePage'
import './RightBlock.scss'


import SearchBlock from '../SerachBlock/SerachBlock'
import Home from '../HomePage/HomePage'
export default class RightBlock extends Component {
    state={
        value:'',
        visible:true,
        studentpath:'',   
    }
    searchValue=(val)=>{
        console.log("val:"
        +val);
        this.setState({
            value:val
        })
    }


    removeEditor=(visible)=>{
        this.setState({
            visible:visible
        })
    }

    getStudentPath=(path,status,name,age,gender,email,phone,country,pet,special,roomId,roomNum)=>{
        if(path.length !==0){
            console.log(this.state.studentpath);
            sessionStorage.setItem("studentpath",path);
            sessionStorage.setItem("name",name);
            sessionStorage.setItem("age",age);
            sessionStorage.setItem("gender",gender);
            sessionStorage.setItem("email",email);
            sessionStorage.setItem("phone",phone);
            sessionStorage.setItem("country",country);
            sessionStorage.setItem("pet",pet);
            sessionStorage.setItem("special",special);
            sessionStorage.setItem("roonId",roomId);
            sessionStorage.setItem("roomNum",roomNum) ;    
            
        }   
        this.setState(
            {
                studentpath:path
            }
        )  
       
        
        console.log(this.state);
    }
    getStatus=(status)=>{
        this.setState({
            visible:status
        })

    }

    render() {
        console.log(this.props)
        const {changeId} =this.props
        console.log(changeId[0])
        // if(this.state.studentpath.length !==0){
        //     console.log(this.state.studentpath);
        //     localStorage.setItem("studentpath",this.state.studentpath)
        // }
        if(changeId.length !== 0){
            sessionStorage.setItem("path",changeId[0])
        }
        return (
            <div className='RightBlockContainer'>
                {this.state.visible?(<SearchBlock path={`/${changeId[0]}/${changeId[1]%2==0?"Room":"Student"}`} id={changeId[1]} getval={this.searchValue}/>):null } 
                
                <Routes>                    
                    <Route exact path={`/${changeId[0]}/Room`} element={<Roomlist dormitoryId={changeId[0]}/>} ></Route>      
                    <Route exact path={`/${changeId.length !== 0?changeId[0]:sessionStorage.getItem("path")}/Student`} element={<StudentList getStudentPath = {this.getStudentPath}/>}></Route>
                    <Route exact path={`/${changeId[0]}/Room/Search`} element={<RoomSearchList dormitoryId={changeId[0]}  value={this.state.value} /> }></Route>   
                    <Route  path={`/${changeId[0]}/Student/Search`} element={<StudentSearchList dormitoryId={changeId[0]}  value={this.state.value} StudentPath = {this.getStudentPath}/>}></Route>       

                    <Route exact path={`/${this.state.studentpath.length==0?sessionStorage.getItem("studentpath"):this.state.studentpath}`} element={<EditorStudentInfo {...this.state} removeEditor={this.removeEditor} returnStatus={this.getStatus}/>}></Route>            
                    <Route path={'/admin/home'} element={<HomePage returnStatus={this.getStatus}/>}></Route>
                    <Route path={'/'} element={<Navigate exact from='/' to="/admin/home" ></Navigate>}></Route>
                    
                 </Routes>  
                 
            </div>
        )
    }
}

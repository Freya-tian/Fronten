import React, { Component } from 'react'
import './StudentList.scss'
import StudentTableItem from '../StudentTableItem/StudentTableItem'
export default class StudentList extends Component {
    state={
        users:[]
    }

    GetStudentList=()=>{
        fetch('/api/users').then(res=>res.json()).then(res=>{
            console.log(res)
            this.setState({
                users:[...res]
            })
            
        })
    }
    componentDidMount(){
        this.GetStudentList()
    }
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
                {
                    this.state.users.map((item,index)=>{
                        return <StudentTableItem key={item._id} {...item} getstudentPath = {this.props.getStudentPath}/>
                    })
                }

            </table>
        )
    }
}

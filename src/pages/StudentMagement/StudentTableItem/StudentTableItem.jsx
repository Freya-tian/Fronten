import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './StudentTableItem.scss'
export default class StudentTableItem extends Component {
    state={
        personId:this.props._id
    }
    returnPathStatus=()=>{
        this.props.getstudentPath(this.props._id,false,this.props.fullname,this.props.age,this.props.gender,this.props.email,this.props.phone,this.props.country,this.props.pet,this.props.special,this.props.live,this.props.liveNumber)
    }

    deletePerson=()=>{
        
        fetch("/api/delete/user",{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(this.state)
        }).then(res=>{
            if(res.status==200){
                alert("Success")
            }
        })
    }
    render() {
        const {_id,fullname,country,phone,liveNumber,status} = this.props
        return (
            <tr className='ContentTable'>
                <td >{_id}</td>
                <td >{fullname}</td>
                <td >{phone}</td>
                <td >{country}</td>
                <td >{liveNumber}</td>
                {
                    status=='deleted'?(<td>Deleted</td>):(
                        <td  className='opreatorStudent'>
                            <Link className="list-group-item" to={`/${_id}`}> <div key="123" className='editorStudent' onClick={this.returnPathStatus}></div> </Link>
                            <div  className='deleteStudent' onClick={this.deletePerson} ></div>
                        </td>
                    )
                }
                
            </tr>
        )
    }
}

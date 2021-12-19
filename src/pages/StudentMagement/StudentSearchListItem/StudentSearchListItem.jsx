import React, { Component } from 'react'
import './StudentSearchListItem.scss'
import Avatar from '../../../img/Avatar.jpg'
import { Link } from 'react-router-dom'
export default class StudentSearchListItem extends Component {
    state={
        personId:this.props._id
    }
    returnPathStatus = () => {
        this.props.StudentPath(this.props._id, false, this.props.fullname, this.props.age, this.props.gender, this.props.email, this.props.phone, this.props.country, this.props.pet, this.props.special, this.props.live, this.props.liveNumber)
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
        const { _id, fullname, country, phone, status,liveNumber } = this.props
        return (
            <li className='StudentItemContainer'>
                <div className='AvatarContainer'>
                    <img className='Avatar' src={Avatar} alt="" />
                </div>
                <div className="Info">
                    <div className="StudentID">
                        <span>ID :</span>
                        <span>{_id}</span>
                    </div>
                    <div className="StudenName">
                        <span>Name :</span>
                        <span>{fullname}</span>
                    </div>
                    <div className="StudenCountry">
                        <span>Country :</span>
                        <span>{country}</span>
                    </div>
                    <div className="StudenPhone">
                        <span>Phone :</span>
                        <span>{phone}</span>
                    </div>
                    <div className="StudenRoom">
                        <span>№ Room :</span>
                        <span>{liveNumber}</span>
                    </div>
                </div>

                <div className="opretors">
                    {
                        status == 'deleted' ? "Deleted" : (

                            <div>
                                <Link className="list-group-item" to={`/${_id}`}>  <div className="editorStudent" onClick={this.returnPathStatus}> </div></Link>


                                <div className="deleteStudent" onClick={this.deletePerson} >
                                </div>
                            </div>


                        )
                    }


                </div>

            </li>
        )
    }
}

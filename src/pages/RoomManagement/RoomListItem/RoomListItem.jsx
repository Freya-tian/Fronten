import React, { Component } from 'react'
import { Modal,Button } from 'antd'
import room from '../../../img/room.jpg'
import './RoomListItem.scss'
export default class RoomListItem extends Component {
    constructor(){
        super()
        this.state={
            visible:false,
            showInfo:false,
            person:[]
        }
    }
    ChangStatus=()=>{
        this.setState({
            visible:true
        })
    }
    handleCancel=()=>{
        this.setState({
            visible:false,
            showInfo: false
        })
    }

    personInfo = (id) => {
        let node = []
        fetch("/api/room?roomId=" + id).then(result => result.json()).then(res => {
            console.log(res)
            this.setState({
                person: [...res],
                showInfo: true
            })


        })
        
    }

    render() {
        console.log(this.props.obj);
        const {_id, floor, number, peopleLive, peopleMax,price,type } = this.props
        return (

            <li className='ItemContainer'>
                
                    <div className="imgContainer">
                        <img className='roomPic' src={room} alt="" />
                    </div>
                    <div className="nmberRoom">{number}</div>
                    <div className="coverContainer">
                        <div className="cover"></div>

                        <div className="opretors">

                            <div className="addIcon" onClick={() => this.personInfo(_id)}></div>
                            <div className="InfoIcon" onClick={this.ChangStatus }></div>
                        </div>
                    </div>
                
                <Modal title={number} visible={this.state.visible}  footer={null} onCancel={this.handleCancel} width={300} centered={true}> 
                    <p>Floor:{floor}</p>
                    <p>Amount:{peopleLive}/{peopleMax}</p>
                    <p>Type:{type}</p>
                    <p>Price:{price}</p>
                </Modal>
                
                <Modal title={number} visible={this.state.showInfo} footer={null} onCancel={this.handleCancel}  centered={true} forceRender={true}
                >
                    <table className='poptable' >
                        <thead>
                            <tr className='titleTable'>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Country</th>
                                <th>Phone</th>
                                <th>Pet</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.person.map((item, indx) => {
                                   
                                    return (
                                        <tr>
                                            <td>{item.fullname}</td>
                                            <td>{item.age}</td>
                                            <td>{item.country}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.pet}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table >
                </Modal>

            </li>
        )
    }
}

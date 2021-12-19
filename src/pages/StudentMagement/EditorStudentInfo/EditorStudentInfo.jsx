import React, { Component } from 'react'
import './EditorStudentInfo.scss'
import Avatar from '../../../img/avator.jpg'
export default class EditorStudentInfo extends Component {
    state = {

        userInfo: {
            personId: sessionStorage.getItem("studentpath"),
            fullname: sessionStorage.getItem("name"),
            age: sessionStorage.getItem("age"),
            gender: sessionStorage.getItem("gender"),
            email: sessionStorage.getItem("email"),
            phone: sessionStorage.getItem("phone"),
            country: sessionStorage.getItem("country"),
            pet: sessionStorage.getItem("pet"),
            special: sessionStorage.getItem("special"),
            live: sessionStorage.getItem("roonId"),
            liveNumber: sessionStorage.getItem("roomNum"),
        },

        want: [],
        roomList: [],
        chooseId: '',
        visible: true
    }
    getroomwant = (id) => {
        fetch(`/api/rooms/want?personId=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmU3NWRjZjZhM2IzNDc1NTNjNjc5NSIsImlhdCI6MTYzOTg3MjIxM30.wMfAki1r7c36CllaaCnZE8KEqJKy2qzL5lBjeUxNogQ'
            }
        }).then(res => res.json()).then(res => {
            console.log(res)
            this.setState({
                want: [...res]
            })

        })

    }

    changePhone = (event) => {
        let user = this.state.userInfo
        user.phone = this.refs.phone.value
        this.setState({
            userInfo: user


        })
    }
    changePet = () => {

        let user = this.state.userInfo
        user.pet = this.refs.Pet.value
        this.setState({
            userInfo: user


        })
    }
    changeSpecial = () => {
        let user = this.state.userInfo
        user.special = this.refs.Special.value

        this.setState({
            userInfo: user


        })
    }
    ChooseId = (id) => {
        this.setState({
            chooseId: id
        })

        console.log(this.state.chooseId);
    }
    SubmitChange = () => {
        fetch("/api/change/person", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.userInfo)
        }).then(res => {
            console.log(res);
            
            if(res.status == '200'){
                alert("Success!you should go to ahead")
            }
        })
    }
    componentDidMount(prevProps) {
        if (this.props.id !== undefined) {
            localStorage.setItem("parentValueKey", this.props.id)

        }
        this.getroomwant(this.state.userInfo.personId)
        // this.getroomRecommand(this.state.id)
        this.props.returnStatus(false)

    }
    componentWillUnmount() {
        this.props.removeEditor(true)
    }
    render() {
        const { fullname, age, gender, email, phone, country, pet, special, live, liveNumber } = this.state.userInfo
        return (
            <div className='EditorContainer'>
                <div className="avator">
                    <img src={Avatar} alt="" />
                </div>
                <div className='cos'>
                    <ul className="Infos">
                        <li>Name: {fullname}</li>
                        <li>Age: {age}</li>
                        <li>gender: {gender}</li>
                        <li>Email: {email}</li>
                        <li>Phone: <input ref="phone" type="text" value={phone} onChange={this.changePhone} /> </li>
                        <li>Country:{country}</li>
                        <li>Pet:<input ref="Pet" type="text" value={pet} onChange={this.changePet} /></li>
                        <li>Special:<input ref="Special" type="text" value={special} onChange={this.changeSpecial} /></li>
                        <li>Living №： {liveNumber}</li>
                    </ul>
                </div>
                <div className='roomlist'>
                    <ul className="roominfo">
                        {
                            this.state.visible ? (
                                this.state.want.map(item => {

                                    return (

                                        <li className="List" key={item.roomId} onClick={() => this.ChooseId(item.roomId)}>
                                            <div className={`${this.state.chooseId == item.roomId ? 'actived' : 'Activityone'}`}></div>
                                            <div className='RoomNumber'>{item.number}</div>
                                        </li>
                                    )


                                })
                            ) : null



                        }






                    </ul>


                </div>

                <button className='SubmitChange' onClick={this.SubmitChange}>Submit</button>
            </div>
        )
    }
}

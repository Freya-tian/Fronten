import React, { Component } from 'react'
import StudentSearchListItem from '../StudentSearchListItem/StudentSearchListItem'
import './StudentSearchList.scss'
export default class StudentSearchList extends Component {
    state={
        users:[]
    }
    GetStudentList=(value)=>{       
       
        fetch('/api/users').then(res=>res.json()).then(res=>{
            console.log(res)
            let ls = res.filter((item, index) => {
    
                return item.fullname === value
            })
            console.log(ls.length)
            if (ls.length == 0) {
                alert(

                    'have not room' + value ,
                )
            }
            this.setState({
                users:[...ls]
            })
            
        })
    }
    componentDidMount(){
        this.GetStudentList(this.props.value)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.value != this.props.value) {
            this.GetStudentList(nextProps.value)

        }

    }
    render() {
        return (
            <ul className='SearchList'>
                {
                    this.state.users.map(item=>{
                      return  <StudentSearchListItem {...item} StudentPath = {this.props.StudentPath}/> 
                    })
                }
               


            </ul>
        )
    }
}

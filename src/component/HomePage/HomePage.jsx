import React, { Component } from 'react'
import './HomePage.scss'
export default class HomeRage extends Component {
    componentDidMount(){
        this.props.returnStatus(false)
    }
    componentWillUnmount(){
        this.props.returnStatus(true)
    }
    render() {
        return (
            <div className='Homeb'>
                <div className='textcon'>
                Welcome to use this server!
                </div>
                
            </div>
        )
    }
}

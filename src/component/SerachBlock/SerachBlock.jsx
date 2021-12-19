import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './SerachBlock.scss'
export default class SerachBlock extends Component {
    // 调用父级传来的函数，向父级传参
    search = () =>{
        console.log(this.keyWordElement.value);
        this.props.getval(this.keyWordElement.value)
    }
    render() {
        const {path,id}=this.props
        return (
            <div className="SearchLineContainer">
                <div className="optimition">
                    
                </div>                
                <div className='SearchContainer'>
                    <input ref={c=>{this.keyWordElement = c}} type="search" name='RoomMagament' className='searchBlock' placeholder={id %2==0?"Please enter room №":"Please enter name"}  />
                    
                    <Link className="list-group-item"  to={path+'/search'}><button className='searchButton' onClick={this.search} ></button> </Link>            
                   
                </div>
            </div>
            
        )
    }
}

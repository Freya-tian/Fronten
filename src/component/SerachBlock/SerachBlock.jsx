import React, { Component } from 'react'
import './SerachBlock.scss'
export default class SerachBlock extends Component {
    search = () =>{
        console.log(this.keyWordElement.value);
    }
    render() {
        return (
            <div className="SearchLineContainer">
                <div className="addPeople" >                    
                </div>
                <div className="addRoom"></div>
                <div className='SearchContainer'>
                    <input ref={c=>{this.keyWordElement = c}} type="search" name='RoomMagament' className='searchBlock' placeholder='Please enter room № '/>
                    <button className='searchButton' onClick={this.search}>               
                    </button>
                </div>
            </div>
            
        )
    }
}

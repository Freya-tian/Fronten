

import React, { Component } from 'react'

import Header from './component/Header/Header'
import MenuSilder  from './component/MenuSilder/MenuSilder'
import RightBlock from './component/RightBlock/RightBlock'

export default class App extends Component {
  state={
    path:[]
  }
  returnId=(path1,path2)=>{
    this.setState({
        path:[path1,path2]
    })
    
}
  render() {
    return (
      <div id='Container'>
        <Header/>
        <MenuSilder returnId={this.returnId}/>
        <RightBlock changeId={this.state.path}/>
        
      </div>
    )
  }
}


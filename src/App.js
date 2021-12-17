

import React, { Component } from 'react'

import Header from './component/Header/Header'
import MenuSilder  from './component/MenuSilder/MenuSilder'
import RightBlock from './component/RightBlock/RightBlock'

export default class App extends Component {
  render() {
    return (
      <div id='Container'>
        <Header/>
        <MenuSilder/>
        <RightBlock/>

      </div>
    )
  }
}


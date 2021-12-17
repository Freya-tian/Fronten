import React, { Component } from 'react'
import './StudentTableItem.scss'
export default class StudentTableItem extends Component {
    render() {
        return (
            <tr className='ContentTable'>
                <td key="123">123</td>
                <td key="Tianqi">Tianqi</td>
                <td key="7312641256">7312641256</td>
                <td key="China">China</td>
                <td key="101">101</td>
                <td key="123" className='opreatorStudent'>
                    <div key="123" className='editorStudent'></div>
                    <div key="delete" className='deleteStudent'></div>
                </td>
            </tr>
        )
    }
}

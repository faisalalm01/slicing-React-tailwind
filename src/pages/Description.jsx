import React, { Component } from 'react'
import Navbar  from '../components/NavbarLogin'
import Desc from '../components/Desc'
import Discuss from '../components/Discuss'

export default class Description extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Desc/>
        <Discuss/>
      </div>
    )
  }
}

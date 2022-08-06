import React, { Component } from 'react'
import Navbar from '../components/NavbarLogin'
import Profile from '../components/Profile'


export default class Profiles extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Profile/>
      </div>
    )
  }
}

import React, { Component } from 'react'
import Navbar from '../components/NavbarLogin'
import Slider from '../components/Slider'
import Browser from '../components/Browser'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Slider/>
        <Browser/>
      </div>
    )
  }
}

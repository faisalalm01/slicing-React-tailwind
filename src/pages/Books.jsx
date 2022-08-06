import React, { Component } from 'react'
import Books from '../components/Books'
import Navbar from '../components/NavbarLogin'

export default class Book extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Books/>
        <div className="flex flex-wrap bg-gray-100 w-full h-screen mt-28">
        {/* <Sidebar/> */}
        </div>
      </div>
    )
  }
}

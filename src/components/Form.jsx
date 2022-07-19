import React, { Component } from 'react'

export default class form extends Component {
  render() {
    return (
      <div>
        <div className="">
             <div className='px-28'>
            <input placeholder='Email' type="text" className='mb-5 pl-14 bg-gray-50 border border-blue-500 text-2xl rounded-full block w-full h-16'/>
            <input placeholder='Password' type="Password" className='mb-5 pl-14 px-11 bg-gray-50 border border-blue-500 text-2xl rounded-full block w-full h-16'/>
            <button className='h-16 mt-28 px-44 rounded-full inline-flex items-center py-2  text-lg text-center text-white bg-blue-500  hover:bg-blue-800 focus:ring-4 focus:outline-none'>Sign In</button>
          </div>
        </div>
      </div>  
    )
  }
}

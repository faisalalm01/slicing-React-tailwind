import React from 'react'
import Card from '../components/Card'
import Navbars from '../components/Navbars'
import Slider from '../components/Slider'

export default function Home() {
  return (
    <div className='relative'>
        <Navbars/>
        <h1 className='p-6 pl-24 text-2xl font-bold text-gray-600'>Popular</h1>
        <Slider/>
        <Card/>
    </div>
  )
}

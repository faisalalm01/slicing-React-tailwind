import React from 'react'
// import Card from '../components/Card'
import Form from '../components/Form'

export default function Login() {
    return (
        <div className='flex h-screen'>
            <div className='flex-col bg-blue-500 w-2/4 text-center  text-white'>
                <img className='w-20 my-24' src="/assets/Logo.png" alt="" srcset="" />
                <h1 className='text-4xl my-24'><b>Hello, Pluginers</b></h1>
                <p className='text-2xl'>Enter your personal details<br/>
                    and start journey with us</p>
                    <button className='border border-l-white h-16 mt-28 px-32 rounded-full inline-flex items-center px- text-lg text-center text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none'>Sign up</button>
                {/* <Card /> */}
            </div>
            <div className='w-10/12 bg-white text-center items-center p-10 text-blue-500'>
                <h1 className='text-5xl m-28'><b>Sign In to Plugin Books</b></h1>
                <Form />
            </div>
        </div>
    )
}

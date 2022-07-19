import React from 'react'

export default function Navbars() {
  return (
    <div className='w-screen'>
        
<nav className="bg-white p-5 sm:px-4 border border-gray-400">
  <div className="container flex justify-between items-center mx-auto">
  <div className="flex md:order-0">
    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 mr-0">
      <span className="sr-only">Search</span>
    </button>
    <div className="hidden relative md:block">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg className="w-5 h-5 text-gray-600 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        <span className="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" className="block rounded-full px-14 py-2 w-full text-gray-600 bg-transparent border border-gray-600 sm:text-sm focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
    </div>
    <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
      <span className="sr-only">Open menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
  </div>
  <a href="https://flowbite.com/" className="flex items-center">
      <img src="/assets/Logo.png" className="mr-3 h-6 sm:h-14" alt="Logo"/>
  </a>
    <div className="hidden justify-between items-center md:flex md:w-auto md:order-1" id="navbar-search">
      <div className="relative mt-3 md:hidden">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        </div>
        <input type="text" id="search-navbar" className="block p-2 pl-10 w-96 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
      </div>
        <button className='hover:bg-gray-700 hover:text-white border border-gray-600 rounded-full px-14 py-2 text-gray-600'>Login</button>
    </div>
  </div>
</nav>
        {/* <nav className='bg-white border border-gray-400 p-5 sm:px-4'>
            <div className='container flex justify-between items-center mr-auto'>
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
    <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center p-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="search" className="order-5 placeholder:text-gray-500 p-4 pl-10 w-96 text-sm text-gray-500 bg-gray-50 rounded-full border border-gray-500"  placeholder="Search ..." required/>
    </div>
    <a href="https://flowbite.com/" className="flex items-center">
      <img src="/assets/Logo.png" className="mr-3 h-6 sm:h-14" alt="Logo"/>
  </a>
  <button className='hover:bg-gray-700 hover:text-white border border-gray-600 rounded-full px-14 py-2 text-gray-600'><a href="/Login">Login</a></button>
            </div>

        </nav> */}
    </div>
  )
}

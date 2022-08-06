import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <div className='text-gray-600 shadow-lg h-full bg-white w-full pt-36'>
                    <button type="button" class=" text-blue-500 bg-white font-bold rounded-full text-md w-full py-5 mb-4 hover:bg-blue-500 hover:text-white">Profile</button>
                    <button type="button" class=" text-blue-500 bg-white font-bold rounded-full text-md w-full py-5 mb-4 hover:bg-blue-500 hover:text-white">Books</button>
                    <button type="button" class=" text-blue-500 bg-white font-bold rounded-full text-md w-full py-5 mb-4 hover:bg-blue-500 hover:text-white">Out of Date</button>
                    <button type="button" class=" text-blue-500 bg-white font-bold rounded-full text-md w-full py-5 mb-4 hover:bg-blue-500 hover:text-white">Waiting Borrow</button>
                    <button type="button" class=" text-blue-500 bg-white font-bold rounded-full text-md w-full py-5 mb-4 hover:bg-blue-500 hover:text-white">Waiting</button>
                </div>
            </div>
        );
    }
}

export default Sidebar;
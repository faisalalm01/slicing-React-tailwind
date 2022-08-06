import React from 'react'
import books from '../service/books.json'
import Logo from '../Assets/Images/image 11.png'


export default function Cards() {
  return (
    <div>
         <div className="flex flex-wrap bg-white w-full h-screen mt-28 ">
            <div className="bg-white rounded w-screen">
                <span className="inline-block font-semibold text-xl text-gray-500 ml-5 lg:ml-20 md:ml-12 sm:ml-8 pb-4">Technology</span>
                <div className="flex flex-wrap px-14 m-auto pt-8">
        {
            books && books.map(buku => {
                return (
                    <>
                    <div className="p-4 lg:w-1/5">
                        <div className="className h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <a href="/">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-32 h-36 object-cover object-center sm:mb-0 mb-4" src={Logo} />
                            </a>
                            <div className="flex-grow sm:pl-8" key={buku.id}>
                                <h2 className="title-font font-bold text-gray-700">{buku.judul}</h2>
                                <h3 className="text-gray-500 mb-3">{buku.kategori}</h3>
                                <div className="flex mb-4 mt-2">
                                    <span className="flex items-center">
                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    </span></div>
                            </div>
                        </div>
                    </div>
                  </>
                  )
                })
            }
            </div>
    </div>
</div>
    </div>
  )
}

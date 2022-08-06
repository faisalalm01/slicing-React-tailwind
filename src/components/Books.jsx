import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Images/image 11.png";
import Logo2 from "../Assets/Images/image 10.png";

export default class Books extends Component {
  render() {
    return (
      <div className="w-9/12 ml-80 bg-white mt-28">
        <section className="text-gray-600 body-font">
          <span className="inline-block font-semibold text-3xl text-gray-700 ml-12 lg:ml-12 md:ml-12 sm:ml-8 pb-2 mt-8">
            Your Books
          </span>
          <div className="container px-5 py-2 mx-auto">
            <div className="flex flex-wrap m-4">
              <div className="p-10 lg:w-1/3">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <Link to="/Desc">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-32 h-36 object-cover object-center sm:mb-0 mb-4"
                      src={Logo}
                    />
                  </Link>
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-bold text-gray-700">
                      Jak Of The bushveld
                    </h2>
                    <h3 className="text-gray-500 mb-3">Marius Oelsching</h3>
                    <div className="flex mb-4 mt-2">
                      <Link
                        className="bg-blue-700 px-6 rounded-full py-2 text-white"
                        to="/UpdateBook"
                      >
                        edit
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-10 lg:w-1/3">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <Link to="/Desc">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-32 h-36 object-cover object-center sm:mb-0 mb-4"
                      src={Logo2}
                    />
                  </Link>
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-bold text-gray-700">
                      Jak Of The bushveld
                    </h2>
                    <h3 className="text-gray-500 mb-3">Marius Oelsching</h3>
                    <div className="flex mb-4 mt-2">
                      <Link
                        className="bg-blue-700 px-6 rounded-full py-2 text-white"
                        to="/UpdateBook"
                      >
                        edit
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-10 lg:w-1/3">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <Link to="/Desc">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-32 h-36 object-cover object-center sm:mb-0 mb-4"
                      src={Logo}
                    />
                  </Link>
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-bold text-gray-700">
                      Jak Of The bushveld
                    </h2>
                    <h3 className="text-gray-500 mb-3">Marius Oelsching</h3>
                    <div className="flex mb-4 mt-2">
                      <Link
                        className="bg-blue-700 px-6 rounded-full py-2 text-white"
                        to="/UpdateBook"
                      >
                        edit
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-10 lg:w-1/3">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <Link to="/Desc">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-32 h-36 object-cover object-center sm:mb-0 mb-4"
                      src={Logo2}
                    />
                  </Link>
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-bold text-gray-700">
                      Jak Of The bushveld
                    </h2>
                    <h3 className="text-gray-500 mb-3">Marius Oelsching</h3>
                    <div className="flex mb-4 mt-2">
                      <Link
                        className="bg-blue-700 px-6 rounded-full py-2 text-white"
                        to="/UpdateBook"
                      >
                        edit
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-10 lg:w-1/3">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <Link to="/Desc">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-32 h-36 object-cover object-center sm:mb-0 mb-4"
                      src={Logo}
                    />
                  </Link>
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-bold text-gray-700">
                      Jak Of The bushveld
                    </h2>
                    <h3 className="text-gray-500 mb-3">Marius Oelsching</h3>
                    <div className="flex mb-4 mt-2">
                      <Link
                        className="bg-blue-700 px-6 rounded-full py-2 text-white"
                        to="/UpdateBook"
                      >
                        edit
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-10 lg:w-1/3">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <Link to="/Desc">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-32 h-36 object-cover object-center sm:mb-0 mb-4"
                      src={Logo2}
                    />
                  </Link>
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-bold text-gray-700">
                      Jak Of The bushveld
                    </h2>
                    <h3 className="text-gray-500 mb-3">Marius Oelsching</h3>
                    <div className="flex mb-4 mt-2">
                      <Link
                        className="bg-blue-700 px-6 rounded-full py-2 text-white"
                        to="/UpdateBook"
                      >
                        edit
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
                <a href="/" className="ml-auto mr-36 bg-blue-700 px-9 rounded-full py-2 text-white">Add Book</a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

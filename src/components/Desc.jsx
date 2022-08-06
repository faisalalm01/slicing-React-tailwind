import React, { Component } from "react";
import Logo from "../Assets/Images/image 11.png";

export default class Desc extends Component {
  render() {
    return (
      <div>
        <div className="text-gray-600 body-font overflow-hidden lg:mt-28 md:mt-40 sm:mt-64 xs:mt-64">
          <div className="container px-5 py-12 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt=""
                className="lg:w-1/3 w-10/12 lg:h-auto h-64 object-cover object-center rounded"
                src={Logo}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 className="text-gray-500 text-3xl title-font font-medium mb-1">
                  At The Going Down of the Sun
                </h1>
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  Marius Oelsching
                </h2>
                <div className="flex mb-4 mt-2">
                  <span className="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-yellow-400"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-yellow-400"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-yellow-400"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-yellow-400"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-yellow-400"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </span>
                </div>
                <table className="table-auto">
                  <tbody>
                    <tr>
                      <td className="w-28">Publisher</td>
                      <td>Gramedia Pustaka Utama</td>
                    </tr>
                    <tr>
                      <td className="w-28">ISBN</td>
                      <td>9786020385914</td>
                    </tr>
                    <tr>
                      <td className="w-28">Pages</td>
                      <td>376 hlm</td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex">
                <a
                  href="/"
                  className="flex mt-10 rounded-full text-white bg-blue-700 border py-2 px-6 focus:outline-none hover:bg-blue-500"
                >
                  Borrow
                </a>
                <a
                  href="/"
                  className="flex mt-10 ml-6 text-gray-700 bg-white border border-gray-700 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded-full"
                >
                  Chat
                </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-gray-600 body-font py-16">
            <span className="inline-block font-semibold text-3xl text-gray-700 ml-28 lg:ml-40 md:ml-12 sm:ml-8 pb-4">
              Description
            </span>
            <div class="container px-0 py-3 mx-auto">
              <div className="lg:w-3/4 w-full mx-auto">
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ultricies purus vitae metus egestas etiam vestibulum id
                  aenean. Diam, in mi ac eget elit. Pellentesque ut et placerat
                  integer venenatis, urna. Elementum in erat sit elit. Velit
                  eget neque consectetur nunc aliquam at. Adipiscing lectus
                  egestas semper vitae, sed tellus. At cursus quam bibendum
                  faucibus sit blandit. Habitasse pulvinar ullamcorper elementum
                  vitae vestibulum aenean semper diam. Gravida diam sit quisque
                  nulla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// components/Header.js
"use client"
import Link from 'next/link';

const Header = () => {
  return (
    <section x-data="{ mobileNavOpen: false }">
      <nav className="relative py-6 bg-transparent z-50">
        <div className="container px-4 mx-auto">
          <div className="flex items-center">
            <a className="inline-block text-lg font-bold" href="#">
              <img className="h-10" src="saturn-assets/logos/logo-saturn-dark.svg" alt="" width="auto" />
            </a>
            <div className="lg:hidden ml-auto">
              <button
                x-on:click="mobileNavOpen = !mobileNavOpen"
                className="flex w-12 h-12 items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-md transition duration-200"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M3 6H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>
            <ul className="hidden lg:flex ml-14 lg:w-auto lg:space-x-12">
              <li className="group relative">
                <a className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium" href="#">
                  Featured
                </a>
                {/* Dropdown */}
                <div className="hidden group-hover:block absolute top-full left-0 min-w-max max-w-xs p-4 z-50">
                  <div className="-mb-2 ml-8 w-4 h-4 rounded-sm bg-white border-l border-t border-gray-200 transform rotate-45"></div>
                  <div className="w-full max-w-xs bg-white border border-gray-100 rounded-3xl pt-4 pb-4 px-4">
                    <div className="pb-3 mb-3 border-b border-gray-100">
                      <a className="block py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg" href="#">
                        Featured
                      </a>
                      <a className="block py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg" href="#">
                        Solutions
                      </a>
                    </div>
                    <div className="pb-3 mb-3 border-b border-gray-100">
                      <a className="flex mb-2 items-center py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg" href="#">
                        <img src="saturn-assets/images/headers/icon-download.svg" alt="" />
                        <span className="ml-3">Download</span>
                      </a>
                      <a className="flex mb-2 items-center py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg" href="#">
                        <img src="saturn-assets/images/headers/icon-slack.svg" alt="" />
                        <span className="ml-3">Community</span>
                      </a>
                      <a className="flex mb-2 items-center py-3 px-4 text-sm text-gray-900 hover:bg-orange-50 rounded-lg" href="#">
                        <img src="saturn-assets/images/headers/icon-help.svg" alt="" />
                        <span className="ml-3">Help</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li><a className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium" href="#">Solutions</a></li>
              <li><a className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium" href="#">Products</a></li>
              <li><a className="inline-block text-sm text-gray-900 hover:text-orange-900 font-medium" href="#">Articles</a></li>
            </ul>
            {/* Desktop Sign-in and Account links */}
            <div className="hidden lg:block ml-auto">
              <div className="flex items-center">
                <a className="inline-block mr-9 text-sm font-semibold text-orange-900 hover:text-gray-900" href="#">
                  Sign In
                </a>
                <a
                  className="relative group inline-block py-3 px-4 text-sm font-semibold text-orange-900 hover:text-white border border-gray-200 rounded-md overflow-hidden transition duration-300"
                  href="#"
                >
                  <div className="absolute top-0 right-full w-full h-full bg-orange-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                  <span className="relative">Create an account</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Navigation */}
      <div className={`fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50 ${mobileNavOpen ? 'block' : 'hidden'}`}>
        <div x-on:click="mobileNavOpen = !mobileNavOpen" className="fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="relative flex flex-col py-6 px-10 w-full h-full bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-16">
            <a className="mr-auto text-2xl font-medium leading-none" href="#">
              <img className="h-10" src="saturn-assets/logos/logo-saturn-dark.svg" alt="" width="auto" />
            </a>
            <button x-on:click="mobileNavOpen = !mobileNavOpen">
              <svg className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <ul className="mb-2">
              <li><a className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="#">About Us</a></li>
              <li><a className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="#">Featured</a></li>
              <li><a className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="#">Solutions</a></li>
              <li><a className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="#">Products</a></li>
              <li><a className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="#">Articles</a></li>
            </ul>
            <div className="mt-auto">
              <div className="mb-6">
                <a className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="#">Sign In</a>
              </div>
              <div>
                <a className="block py-4 px-5 text-gray-900 hover:bg-orange-50 rounded-lg" href="#">Create an account</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;

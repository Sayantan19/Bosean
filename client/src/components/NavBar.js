import React from 'react';
import './NavBar.css';
import insta from './images/instagram-logo.png'
import fb from './images/facebook-logo.png'
import call from './images/call-logo.png'

export default function NavBar() {
    return (
        <>
            <header className="container text-black-600 body-font" id="head">
                <div className="mx-auto flex flex-wrap pt-3 pb-3 flex-col md:flex-row items-center">
                    <a className="flex cname title-font font-medium items-center md:mb-0" href="/">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg> */}
                        <span className="text-black-900 text-xl">Bosean Interio</span>
                    </a>
                    <nav className="hidden md:flex mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900" href="/">Home</a>
                        <a className="mr-5 hover:text-gray-900" href="#abt-body">Our Solutions</a>
                        <a className="mr-5 hover:text-gray-900" href="#services">Our Services</a>
                        <a className="mr-5 hover:text-gray-900" href="#contact">Contact Us</a>
                    </nav>

                    <nav className="hidden md:flex ml-auto md:mr-1 md:py-1 md:pl-2 md:border-l md:border-gray-400 flex-wrap items-center text-base justify-center">
                        <a href="http://instagram.com"><img className=" mx-0.5 Social" src={insta} alt="Insta" srcSet="" /></a>
                        <a href="http://facebook.com"><img className=" mx-0.5 Social" src={fb} alt="FB" srcSet="" /></a>
                        <a href="tel:8777603510"><img className=" mx-0.5 Social" src={call} alt="call" srcSet="" /></a>
                    </nav>
                </div>
            </header>
        </>
    );
}

import React from 'react';
import insta from './images/instagram-logo.png'
import fb from './images/facebook-logo.png'
import call from './images/call-logo.png'

export default function Footer() {
    return (
        <>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    <p className="flex title-font font-medium items-center md:justify-center text-gray-900">
                        <span className="ml-3 text-xl">Bosean Interio</span>
                    </p>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 ">© {new Date().getFullYear()} Bosean Interio —
                        <a href="https://www.instagram.com/shaa_yon_ton/" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@shaa_yon_ton</a>
                    </p>
                    <nav className="visible md:hidden flex py-2 flex-wrap items-center text-base justify-center">
                        <a href="https://instagram.com/boseaninterio?igshid=YmMyMTA2M2Y="><img className=" mx-0.5 Social" src={insta} alt="Insta" srcSet="" /></a>
                        <a href="http://facebook.com"><img className=" mx-0.5 Social" src={fb} alt="FB" srcSet="" /></a>
                        <a href="tel:8777603510"><img className=" mx-0.5 Social" src={call} alt="call" srcSet="" /></a>
                    </nav>
                </div>
            </footer>
        </>
    );
}

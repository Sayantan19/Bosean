import React from 'react';
import './About Us.css';
import img1 from './images/Work Samples/Edited/1.jpeg';
import img2 from './images/Work Samples/Edited/2.jpeg';
import img3 from './images/Work Samples/Edited/6.jpeg';
import img4 from './images/Work Samples/Edited/9.jpeg';
import img5 from './images/Work Samples/Edited/8.jpeg';
import img6 from './images/Work Samples/Edited/10.jpeg';
// import img7 from './images/Work Samples/Edited/7.jpeg';


export default function AboutUs() {
    return (
        <>
            <div className="container-fluid flex flex-wrap align-center justify-self-center w-full py-14" id="abt-body">
                <h1 className="text-2xl font-medium md:text-3xl w-full mb-0 lg:w-1/3 lg:mb-0 lg:border-r lg:border-gray-400" id="sol">Our Solutions</h1>
                <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-center md:text-left" id="sol">We provide the best-in-class solutions related to Glass, Aluminium, UPVC doors, Window Sliding and Steel Railing jobs and a variety of Interior Designing Jobs!<br />Check out some of our samples down below!</p>
            </div>
            <section className="text-gray-600 body-font" id="about">
                <div className="container px-5 py-16 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-full md:w-1/2">
                            <div className="p-1 w-full md:p-2 md:w-1/2" id="imag">
                                <img alt="gallery" className="imgt1 object-center block" src={img1} />
                            </div>
                            <div className="p-1 w-full md:p-2 md:w-1/2" id="imag">
                                <img alt="gallery" className="imgt1 object-center block" src={img2} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-full md:w-1/2">
                            <div className="p-1 w-full md:p-2" id="imag" >
                                <img alt="gallery" className="imgt2 object-center block" src={img3} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-full md:w-1/2">
                            <div className="p-1 w-full md:p-2" id="imag">
                                <img alt="gallery" className="imgt2 object-center block" src={img6} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-full md:w-1/2">
                            <div className="p-1 w-full md:p-2 md:w-1/2" id="imag">
                                <img alt="gallery" className="imgt1 object-center block" src={img4} />
                            </div>
                            <div className="p-1 w-full md:p-2 md:w-1/2" id="imag">
                                <img alt="gallery" className="imgt1 object-center block" src={img5} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

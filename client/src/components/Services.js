import React from 'react';
import './Services.css';

export default function Services() {
    return (
        <>
            <div className="flex flex-col text-center w-full py-8" id="services">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Our Services</h1>
            </div>
            <section className="text-gray-600 body-font" id="serv-body-1">
                <div className="container px-5 py-10 mx-auto " >
                    <div className="flex flex-wrap -m-4 flex-col lg:flex-row">
                        <div className="p-4 lg:w-1/2" id="service">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex mb-3 justify-content-center align-center">
                                    <h2 className="text-gray-900 text-center text-lg title-font font-medium">GLASS</h2>
                                </div>
                                <div className="flex p-2 flex flex-wrap grid md:grid-cols-2">
                                    <ul className="list-disc leading-relaxed text-base md:border-r md:border-gray-600">
                                        <li>Toughened Glass Doors</li>
                                        <li>Partitions</li>
                                        <li>Sliding Windows/Doors</li>
                                        <li>Sensor Door Systems</li>
                                    </ul>
                                    <ul className="list-disc md:px-8 leading-relaxed text-base">
                                        <li>Shower Cubicles</li>
                                        <li>Etched Glass</li>
                                        <li>Misc. Custom Jobs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2" id="service">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex mb-3 justify-content-center align-center">
                                    <h2 className="text-gray-900 text-center text-lg title-font font-medium">UPVC AND ALUMINIUM</h2>
                                </div>
                                <div className="flex-grow p-2 grid md:grid-cols-2">
                                    <ul className="list-disc leading-relaxed text-base md:border-r md:border-gray-600">
                                        <li>Balcony Partitions</li>
                                        <li>Sliding Frameworks (Windows/Doors)</li>
                                    </ul>
                                    <ul className="list-disc md:px-8 leading-relaxed text-base">
                                        <li>Openable Shutters</li>
                                        <li>Other Custom Jobs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

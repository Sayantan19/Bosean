import React from 'react';
import './Jumbotron.css';
import jumbo from './images/Work Samples/Edited/jumbo.jpg'
export default function Jumbotron() {
    return (
        <>
            <img src={jumbo} alt="" srcSet="" id="jumbo" />
            <section className="text-black-600" >
                <h1 className="absolute text-[1.4rem] text-black font-medium -translate-x-1/2 -translate-y-1/6 md:text-[2em]" id="title-text">Welcome to Bosean Interio</h1>
                <h3 className="absolute text-[0.75rem] top-[17rem] left-1/2 -translate-x-1/2 -translate-y-12 leading-relaxed text-black-900 md:text-[1em] md:-translate-y-8" id="tag">Your one destination for all Interior Designing Solutions</h3>
            </section>
        </>
    );
}

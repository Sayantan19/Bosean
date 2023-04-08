import React, { useState } from 'react'
import './Contact Us.css'
import axios from "axios"


export default function ContactUs() {
    const [input, setInput] = useState({
        name: '',
        email: '',
        phone: ''
    });


    function handleOnChange(event) {
        const { name, value } = event.target;
        console.log(name, value)
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }
    function handleOnReset() {
        setInput({
            name: '',
            email: '',
            phone: ''
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const newDet = {
            name: input.name,
            email: input.email,
            phone: input.phone
        }
        axios.post("https://bosean.onrender.com/det", newDet).then(
            alert('Details successfully received!!'))
            .catch(console.log('Error'));
        console.log('Submit')
        handleOnReset()
    }

    return (
        <>
            <div className="container px-5 mx-auto" id="contact">
                <div className="flex flex-col text-center w-full">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font py-8 text-gray-900">Contact Us</h1>
                </div>
            </div>
            <section className="text-gray-600 body-font" id="serv-body-2">
                <div className="container px-5 py-4 flex flex-col md:flex-row">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-4 mt-4 flex items-end justify-start relative">
                        <iframe options={{ gestureHandling: 'none' }} width="100%" height="100%" className="absolute inset-0" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920.9683454584919!2d88.41979292240751!3d22.583838521251927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027575688c1669%3A0xde4ca072da4fd681!2sF%207%20Karunamoyee%20Housing%20Estate!5e0!3m2!1sen!2sin!4v1672051746102!5m2!1sen!2sin"></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">F 7/7 Karunamoyee Housing Estate, Sector 2, Block ED, Salt Lake, Kolkata - 700 091</p>
                            </div>
                            <div className="lg:w-1/2 px-6 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a href="mailto:gopa.bose@yahoo.com" className="text-indigo-500 leading-relaxed">gopa.bose@yahoo.com</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <a href="tel:+918777603510"><p className="leading-relaxed">+91 8777603510</p></a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3 rounded md:w-1/2 bg-white flex flex-col md:ml-auto w-full mt-4 py-4 md:mt-0 px-4">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">For enquiries</h2>
                        <p className="leading-relaxed mb-2 text-gray-600">Kindly enter your contact details</p>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" value={input.name} onChange={handleOnChange} id="name" name="name" placeholder='Enter your name' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" value={input.email} onChange={handleOnChange} id="email" name="email" placeholder='Enter your email address' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                            <input type="tel" value={input.phone} onChange={handleOnChange} id="phone" name="phone" placeholder='Enter your Mobile no.' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button className="text-white border-0 py-2 px-6 focus:outline-none rounded text-lg" id="sub" onClick={submitHandler}>Submit</button>
                        <p className="text-xs text-gray-500 mt-3">We will get in touch with you at the earliest</p>
                    </div>
                </div>
            </section>
        </>
    );
}

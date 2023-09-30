import React from 'react';
import BannerImage from '../assets/Space_Shuttle_Columbia_launching.jpg'

const Banner = () => {
    return (
        <>
            <div className="bg-cover bg-center text-white py-24 px-10 object-fill flex items-center" style={{ backgroundImage: `url(${BannerImage})`, height: '100vh' }}>
                <div className="md:w-1/2">
                    <h1 className="font-bold text-sm uppercase">Services</h1>
                    <p className="text-3xl font-bold">Multimedia products</p>
                    <p className="text-2xl mb-10 leading-none">Attractive designs for your brand</p>
                    <a href="#" className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Get Started</a>
                </div>
            </div>
        </>
    )
}

export default Banner;
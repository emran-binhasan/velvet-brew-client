import React from 'react';

const Hero = () => {
    return (
        <div className="hero bg-cover bg-center bg-hero-bg text-white h-[60vh] lg:h-[75vh] md:h-[65vh]">
            {/* Overlay */}
            <div className="hero-overlay bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="hero-content w-3/4 mx-auto flex justify-end items-center h-full px-4 md:px-10">
                <div className="text-center lg:text-left max-w-lg lg:max-w-xl">
                    <h1 className="text-3xl font-rancho lg:text-5xl font-medium mb-6 ">
                        Would you like a Cup of Delicious Coffee?
                    </h1>
                    <p className="mb-6 text-sm lg:text-lg">
                        It’s coffee time – Sip & Savor – Relaxation in every sip! Get the nostalgia back! Your companion of every moment!! Enjoy the beautiful moments and make them memorable.
                    </p>
                    <button className="border bg-[#E3B577] text-gray-800  font-rancho px-2 py-1 lg:px-3 lg:py-1.5 lg:text-lg rounded">Learn More
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Hero;

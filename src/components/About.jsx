import React, { useEffect, useState } from 'react';

const About = () => {
    const [aboutData, setAboutData] = useState([]);

    useEffect(() => {
        fetch('/about.json')  // Fetch the JSON file from the public directory
            .then(res => res.json())
            .then(data => setAboutData(data))
            .catch(err => console.error('Error loading data: ', err));
    }, []);

    return (
        <div className="bg-[#ECEAE3] p-4">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {aboutData.map((each) => (
                    <div className="rounded-lg p-4" key={each.id}>
                        <img
                            src={each.imgSrc}
                            alt={each.title}
                            className="w-12"
                        />
                        <h2 className="font-bold sm:text-xl text-lg font-rancho text-gray-700 mt-4">{each.title}</h2>
                        <p className="sm:text-sm text-xs mt-2">{each.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;

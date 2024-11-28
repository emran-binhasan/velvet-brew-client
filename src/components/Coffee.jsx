import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Coffee = () => {
    const [coffees,setCoffees] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/coffees`)
        .then(res => res.json())
        .then(data => setCoffees(data))
    },[])
    const navigate = useNavigate()
    return (
        <div className='bg-coffe-bg'>

            <div className='w-5/6 mx-auto border'>
            <div className='flex flex-col justify-center items-center space-y-3'>
                <h2 className='text-4xl font-rancho'>Our Popular Products</h2>
                <button onClick={() => navigate("addCoffee")} className="border bg-[#E3B577] text-gray-800  font-rancho px-2 py-1 lg:px-3 lg:py-1.5 lg:text-lg rounded">Add Coffe</button>
            </div>
            <div className='grid grid-cols-12'>
                {
                    coffees.map(coffee => 
                    <div className='col-span-12 md:col-span-6 flex justify-between items-center' key={coffee._id}>
                        <div>
                            <img src={coffee.photoURL} alt={coffee.name} />
                        </div>
                        <div>
                            <p>Name : {coffee.name}</p>
                            <p>Chef : {coffee.chef}</p>
                            <p>Price : {coffee.price}</p>
                        </div>
                        <div></div>
                    </div>)
                }
            </div>
            </div>
        </div>
    );
};

export default Coffee;
import React, { useEffect, useState } from 'react';
import { IoEyeSharp } from 'react-icons/io5';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Coffee = () => {
    const [coffees,setCoffees] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/coffees`)
        .then(res => res.json())
        .then(data => setCoffees(data))
    },[])
    const navigate = useNavigate();

    const handleRemoveCoffee = async _id => {
        console.log(`remove ${_id}`);
        await fetch(`http://localhost:5000/coffees/${_id}`,{
            method:'DELETE',
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div className='bg-coffe-bg'>

            <div className='max-w-7xl mx-auto border'>
            <div className='flex flex-col justify-center items-center space-y-3'>
                <h2 className='text-4xl font-rancho'>Our Popular Products</h2>
                <button onClick={() => navigate("addCoffee")} className="border bg-[#E3B577] text-gray-800  font-rancho px-2 py-1 lg:px-3 lg:py-1.5 lg:text-lg rounded">Add Coffe</button>
            </div>
            <div className='grid grid-cols-12 gap:4 lg:gap-8 my-5 '>
                {
                    coffees.map(coffee => 
                    <div className='col-span-12 md:col-span-6 flex justify-between items-center border py-2 px-4 rounded bg-opacity-50 bg-[#F5F4F1]' key={coffee._id}>
                        <div>
                            <img className='h-60 object-cover' src={coffee.photoURL} alt={coffee.name} />
                        </div>
                        <div className='space-y-2'>
                            <p className='font-medium text-lg'>Name : <span className="text-gray-600">{coffee.name}</span></p>
                            <p className='font-medium text-lg'>Chef : <span className="text-gray-600">{coffee.chef}</span></p>
                            <p className='font-medium text-lg'>Price : <span className="text-gray-600">{coffee.price}</span></p>
                        </div>
                        <div className='flex flex-col space-y-2 p-4'>
                            <button className='border p-3 rounded text-xl text-white bg-[#D2B48C]'><IoEyeSharp /></button>
                            <button className='border p-3 rounded text-xl text-white bg-[#3C393B]'><MdModeEdit /></button>
                            <button onClick={()=>handleRemoveCoffee(coffee._id)} className='border p-3 rounded text-xl text-white bg-[#EA4744]'><MdDelete /></button>
                        </div>
                    </div>)
                }
            </div>
            </div>
        </div>
    );
};

export default Coffee;
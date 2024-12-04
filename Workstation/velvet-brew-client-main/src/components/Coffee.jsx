import React, { useEffect, useState } from 'react';
import { IoEyeSharp } from 'react-icons/io5';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const Coffee = () => {
    const loadedCoffees = useLoaderData();
    const[coffees, setCoffees] = useState(loadedCoffees);
    const navigate = useNavigate();

    
   
    const handleRemoveCoffee = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              fetch(`http://localhost:5000/coffees/${_id}`,{
                method:'DELETE',
                headers: {
                    'content-type':'application/json'
                }
            })
            .then(res=> res.json())
            .then(data => {
                const remaining = coffees.filter(each => each._id != _id);
                setCoffees(remaining)
            })
            }
          });
       

        
    }
    return (
        <div className='bg-coffe-bg mt-7'>

            <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col justify-center items-center space-y-3'>
                <h2 className='text-4xl font-rancho'>Our Popular Products</h2>
                <button onClick={() => navigate("addCoffee")} className="border bg-[#E3B577] text-gray-800  font-rancho px-2 py-1 lg:px-3 lg:py-1.5 lg:text-lg rounded">Add Coffe</button>
            </div>
            <div className='grid grid-cols-12 gap:4 lg:gap-8 my-5 '>
                {coffees?                
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
                            <Link to={`coffee/${coffee._id}`} className='border p-3 rounded text-xl text-white bg-[#D2B48C]'><IoEyeSharp /></Link>
                            <Link to={`/updateCoffee/${coffee._id}`} className='border p-3 rounded text-xl text-white bg-[#3C393B]'><MdModeEdit /></Link>
                            <button onClick={()=>handleRemoveCoffee(coffee._id)} className='border p-3 rounded text-xl text-white bg-[#EA4744]'><MdDelete /></button>
                        </div>
                    </div>)
                :''}
            </div>
            </div>
        </div>
    );
};

export default Coffee;
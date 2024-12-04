import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {
    const navigate = useNavigate();

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const price = form.price.value;
        const photoURL = form.photoURL.value
        const data = {name, chef, supplier,taste,category,price,photoURL}
        console.log(`Adding data to database ${JSON.stringify(data)}`)
        
        fetch('http://localhost:5000/coffees',{
            method:"POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: "Congratulations !",
                    text: "Coffe Added Successfully",
                    icon: "success"
                  });
            }
           
        })


    }

    return (
        <div className="min-h-screen ">
            <div className="w-1/2 mx-auto p-4">
                <button
                    onClick={() => navigate("/")}
                    className="text-blue-500 hover:underline mb-4 font-rancho text-2xl"
                >
                    &larr; Back to home
                </button>
            </div>
            <div className="bg-gray-100 flex items-center justify-center bg-add-coffee-bg">
                <div className="w-11/12 md:w-2/3 lg:w-1/2 p-10 bg-[#F4F3F0]">
                    <h1 className="text-2xl font-semibold text-center mb-4 font-rancho text-gray-600">
                        Add New Coffee
                    </h1>
                    <p className="text-sm text-gray-500 text-center mb-6">
                        Fill in the details below to add a new coffee to the database.
                    </p>
                    <form onSubmit={handleAddCoffee}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" name="name" placeholder="Enter coffee name" className="input input-bordered w-full" required/>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Chef</label>
                                <input type="text" name="chef" placeholder="Enter chef name" className="input input-bordered w-full" required/>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Supplier</label>
                                <input type="text" name="supplier" placeholder="Enter supplier" className="input input-bordered w-full" required/>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Taste</label>
                                <input type="text" name="taste" placeholder="Enter coffee taste" className="input input-bordered w-full" required/>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Category</label>
                                <input type="text" name="category" placeholder="Enter coffee category" className="input input-bordered w-full" required/>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Price</label>
                                <input type="text" name="price" placeholder="Enter coffee price" className="input input-bordered w-full" required/>
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700">
                                Photo
                            </label>
                            <input type="url" name="photoURL" placeholder="Enter photo URL" className="input input-bordered w-full" required/>
                        </div>

                        <div className="flex justify-center">
                            <button type="submit" className="btn btn-primary w-full md:w-auto">Add Coffee</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;

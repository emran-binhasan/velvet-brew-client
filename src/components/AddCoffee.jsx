import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCoffee = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        chef: "",
        supplier: "",
        taste: "",
        category: "",
        details: "",
        photo: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/add-coffee", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to add coffee");
            }

            const result = await response.json();
            alert(result.message);
            navigate("/"); // Redirect to the home page after successful submission
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to add coffee. Please try again.");
        }
    };

    return (
        <div className="min-h-screen ">
            <div className="w-1/2 mx-auto p-4">
                <button onClick={() => navigate("/")} className="text-blue-500 hover:underline mb-4 font-rancho text-2xl">&larr;  Back to home
                </button>
            </div>
            <div className=" bg-gray-100 flex items-center justify-center bg-add-coffee-bg">
                <div className="w-11/12 md:w-2/3 lg:w-1/2  p-10 bg-[#F4F3F0]">

                    <h1 className="text-2xl font-semibold text-center mb-4 font-rancho text-gray-600">Add New Coffee</h1>
                    <p className="text-sm text-gray-500 text-center mb-6">
                        Fill in the details below to add a new coffee to the database.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {["name", "chef", "supplier", "taste", "category", "details"].map((field) => (
                                <div key={field}>
                                    <label className="block text-sm font-medium text-gray-700">
                                        {field.charAt(0).toUpperCase() + field.slice(1)}
                                    </label>
                                    <input
                                        type="text"
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        placeholder={`Enter coffee ${field}`}
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700">Photo</label>
                            <input
                                type="url"
                                name="photo"
                                value={formData.photo}
                                onChange={handleChange}
                                placeholder="Enter photo URL"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="btn btn-primary w-full md:w-auto">
                                Add Coffee
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;

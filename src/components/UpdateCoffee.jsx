import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateCoffee = () => {
    const navigate = useNavigate();
    const data = useLoaderData();
    console.log(data)

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const price = form.price.value;
        const photoURL = form.photoURL.value
        const data = {name, chef, supplier,taste,category,price,photoURL};
        console.log(data)
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
                    <form onSubmit={handleUpdateCoffee}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" name="name" defaultValue={data.name} placeholder="Enter coffee name" className="input input-bordered w-full" required/>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Chef</label>
                                <input type="text" name="chef" defaultValue={data.chef} placeholder="Enter chef name" className="input input-bordered w-full" required/>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Supplier</label>
                                <input type="text" name="supplier" defaultValue={data.supplier} placeholder="Enter supplier" className="input input-bordered w-full" required/>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Taste</label>
                                <input type="text" name="taste" defaultValue={data.taste} placeholder="Enter coffee taste" className="input input-bordered w-full" required/>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Category</label>
                                <input type="text" name="category"defaultValue={data.category}  placeholder="Enter coffee category" className="input input-bordered w-full" required/>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Price</label>
                                <input type="text" name="price" defaultValue={data.price} placeholder="Enter coffee price" className="input input-bordered w-full" required/>
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700">
                                Photo
                            </label>
                            <input type="url" name="photoURL" defaultValue={data.photoURL} placeholder="Enter photo URL" className="input input-bordered w-full" required/>
                        </div>

                        <div className="flex justify-center">
                            <button type="submit" className="btn btn-primary w-full md:w-auto">Update Coffee</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;
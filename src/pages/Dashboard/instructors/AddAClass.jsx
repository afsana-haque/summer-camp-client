import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddAClass = () => {

    const { register, handleSubmit } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = data => {
        
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            console.log(imgResponse);
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {name,  instructor, students, price, seats
                } = data;
                const newItem = {name, instructor, students, price: parseFloat(price), seats, image:imgURL};
                console.log(newItem);
                fetch("http://localhost:5000/classes", {
                    method:"POST",
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(newItem)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.insertedId > 0){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Add class Successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })


    };


    return (
        <div className='w-full px-20 my-12 '>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-gray-200 p-10 rounded'>
                <h2 className='text-2xl font-semibold text-center my-10'>ADD A CLASS</h2>
                <div className='grid lg:grid-cols-2 mb-4'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Class Name</span>
                    </label>
                    <input type="text" placeholder="Class name" {...register("name", {required: true})} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Class image</span>
                    </label>
                    <input type="file"  {...register("image", {required: true})} className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                </div>
                <div className='grid lg:grid-cols-2 mb-4'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Instructor name</span>
                    </label>
                    <input type="text" placeholder="Instructor name" {...register("instructor", {required: true})}  className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Total Students</span>
                    </label>
                    <input type="text" placeholder="Total students" {...register("students", {required: true})} className="input input-bordered w-full max-w-xs" />
                </div>
                </div>
                <div className='grid lg:grid-cols-2 mb-4'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Available seats</span>
                    </label>
                    <input type="number" placeholder="Available seats" {...register("seats", {required: true})} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" placeholder="Price"  {...register("price", {required: true})}  className="input input-bordered w-full max-w-xs" />
                </div>
                </div>
                <div className='text-center mt-4'>
                <input type="submit" value="ADD Class" className='btn btn-warning bg-orange-950 text-white' />

                </div>
            </form>
        </div>
    );
};

export default AddAClass;
import { useState } from "react";
import axios from "axios";
import './AddMobile.css'

function AddMobile() {

    const [formData, setFormData] = useState({
        mname: "",
        ram: "",
        storage: "",
        price: "",
        company: "",
        image: null,
    });

 
    const handleChange = (e) => {
        const { name, value, files } = e.target;

       
        if (name === "image") {
            setFormData((prevState) => ({
                ...prevState,
                [name]: files[0],
            }));
        } else {
   
            setFormData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

   
    const addMobile = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("mname", formData.mname);
        data.append("ram", formData.ram);
        data.append("storage", formData.storage);
        data.append("price", formData.price);
        data.append("company", formData.company);
        data.append("image", formData.image);

        try {
            const response = await axios.post("http://localhost:4444/admin/mobile", data, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            alert("Mobile added successfully!");
        } catch (error) {
            console.error("Error adding mobile:", error);
            alert("Failed to add mobile.");
        }
    };

    return (
        <div className="add-mobile-container">
            <h1>Add New Mobile</h1>
            <form onSubmit={addMobile} encType="multipart/form-data">
                <div>
                    <label>Mobile Name:</label>
                    <input
                        type="text"
                        name="mname"
                        value={formData.mname}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>RAM (GB):</label>
                    <input
                        type="number"
                        name="ram"
                        value={formData.ram}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Storage (GB):</label>
                    <input
                        type="number"
                        name="storage"
                        value={formData.storage}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Price (INR):</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Company:</label>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Image:</label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Add Mobile</button>
            </form>
        </div>
    );
}

export default AddMobile;

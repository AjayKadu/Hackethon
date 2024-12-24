import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './mobiledetails.css'

function MobileDetails() {
    const { id } = useParams(); 
    const [mobile, setMobile] = useState(null); 
    const userId = sessionStorage.getItem('id'); 

    useEffect(() => {
      
        axios.get(`http://localhost:4444/user/mobile/${id}`)
            .then((result) => {
                setMobile(result.data.data);
            })
            .catch((error) => console.error('Error fetching mobile details:', error));
    }, [id]);

    const handlePlaceOrder = () => {
      
        const order = {
            userId: userId,
            mobileId: id,
        };

        
        axios.post(`http://localhost:4444/user/place-order`, order)
            .then(() => {
                alert("Order placed successfully!");
            })
            .catch((error) => console.error('Error placing order:', error));
    };

    return (
        <div className="mobile-details-container">
            {mobile && ( 
                <div className="mobile-details-card">
                    <h1>Mobile Details</h1>
                    <img src={`http://localhost:4444/${mobile.image}`} className="img-fluid" alt="Mobile" />
                    <p><strong>ID:</strong> {mobile.id}</p>
                    <p><strong>Mobile Name:</strong> {mobile.mname}</p>
                    <p><strong>RAM:</strong> {mobile.ram}</p>
                    <p><strong>Storage:</strong> {mobile.storage}</p>
                    <p><strong>Company:</strong> {mobile.Company}</p>
                    <p><strong>Price:</strong> {mobile.price}</p>
                    <button className="place-order-button" onClick={handlePlaceOrder}>
                        Place Order
                    </button>
                </div>
            )}
        </div>
    );
}

export default MobileDetails;

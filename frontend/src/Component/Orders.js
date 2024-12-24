import axios from "axios";
import { useEffect, useState } from "react";

function Orders() {

    const [orders, setOrders] = useState([]);

    var id = sessionStorage.getItem("id");

    useEffect(() =>{
       getAllOrders();
    },[]);


    function getAllOrders() {

      axios.get(`http://localhost:4444/user/orders/${id}`)
          .then((result) =>{
             setOrders(result.data.data);
             console.log(result.data.data);
             
          })

    }



    return ( <>
      
      {
     orders.map((item)=>{

      return(

        <>
        
        <div className="mobile-details-card">
                   
                    <img src = {`http://localhost:4444/${item.image}`} className="img-fluid" />
                    <p><strong>ID:</strong> {item.id}</p>
                    <p><strong>Mobile Name:</strong> {item.mname}</p>
                    <p><strong>RAM:</strong> {item.ram}</p>
                    <p><strong>Storage:</strong> {item.storage}</p>
                    <p><strong>Company:</strong> {item.Company}</p>
                    <p><strong>Price:</strong> {item.price}</p>
                </div>
        
        
        
        </>


      )


     })

    }
    
           </> );
}

export default Orders;
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function List() {

    const [mobiles, setMobiles] = useState([]);

    const navigate = useNavigate();

     debugger;
    useEffect(() =>{
       Mobiles();
    },[]);


    function Mobiles(){
        
        axios.get("http://localhost:4444/user/mobiles")
             .then((result) =>{
               setMobiles(result.data.data);
             })
    }


    const handleRequest = (id) =>{
          
        navigate(`/mobiledetails/${id}`)

    }


    return (<>
        <div className="container-fluid">
            <div className="row">
                {
                    mobiles.map((item) => {
                        return (
                            <div key={item.id} className="col-md-4 col-sm-6">
                                <div className="card">
                              <div className="card-body">
                                <img src = {`http://localhost:4444/${item.image}`} className="img-fluid" /></div>
                                    <div className="card-footer">
                                        <p> {item.mname} <br /> {item.Company} <br /> {item.price} -/ </p>
                                        <button className="btn btn-primary" onClick={() => handleRequest(item.id)}>View Detail</button>
                                   </div>
                              </div>
                         </div>
                       )
                   })
                }
            </div>
        </div>
    </>);
}



export default List;
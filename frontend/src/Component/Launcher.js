import Navbar from "./Navbar";
import List from "./List.js";
import MobileDetails from "./MobileDetails.js";
import Login from "./Login.jsx";
import { Routes, Route} from "react-router-dom";
import Form from "./Form.js";
import Orders from "./Orders.js";
import AllUsers from "./AllUsers.js";
import UserById from "./UserById.js";
import AddMobile from "./AddMobile.js";

function Launcher() {
    return ( <>


    <Navbar/>


    <Routes>
    
    <Route path="/login" element={<Login />} />

    <Route path="/orders" element={<Orders />} />

    <Route path="/mobiledetails/:id" element={<MobileDetails />} />

    <Route path="/allusers" element={<AllUsers />} />

    <Route path="/list" element={<List/>}/>

    <Route path="/registration" element={<Form/>}/>

    <Route path="/userbyid" element={<UserById/>}/>

    <Route path="/addmobile" element={<AddMobile/>}/>



    {/* <Route path="/" element={<ProtectedRoute Component={Home} />} /> */}

   </Routes>
    
    
    </> );
}

export default Launcher;
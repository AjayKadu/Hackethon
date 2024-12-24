import { useState } from 'react';
import './login.css'
import axios from 'axios';



function Login() {

 const [credentials, setCredentials] = useState({email: "", password: ""});


const onTextChange = (args) =>{
      
    var copy = {...credentials};
    copy[args.target.name] = args.target.value;
    setCredentials(copy);
}


const DoLogin = () => {

    axios.post(`http://localhost:4444/user/login`, credentials)
         .then((result)=>{
             
           sessionStorage.setItem("id", result.data.data.id);
           console.log(result.data.data.id);
              
         })

}


    return ( <>
    <div className="container-fluid">
    <div className="row no-gutter">
       
        <div className="col-md-6 d-none d-md-flex bg-image">
                    
        </div>
        <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">

           
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-7 mx-auto">
                            <h3 className="display-4">Login page!</h3><br />
                                <div className="form-group mb-3">
                                    <input id="inputName" type="text" placeholder="Username" name="email" value={credentials.userName} onChange={onTextChange} required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4"/>
                                </div>
                                <div className="form-group mb-3">
                                    <input id="inputPassword" type="password" placeholder="Password" name="password" value={credentials.password} onChange={onTextChange} required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                                </div>
                        
                                <button onClick={DoLogin} className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
                                <div className="text-center d-flex justify-content-between mt-4"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</div>
    </> );
}

export default Login;
import { Link } from 'react-router-dom';

function Navbar() {
    return ( <>
              
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/list">List</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/orders">Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/registration">Registration</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/allusers">All Users</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/userbyid">UserById</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/addmobile">Add Mobile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </> );
}

export default Navbar;
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import { Link, Outlet } from 'react-router-dom';


let Layout = () => {
    return(
        <>
        <div>
            <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/region">Region</Link>
                </li>
            </ul>
            </nav>
        </div>

        <Outlet />
        </>
    )
}

export default Layout;
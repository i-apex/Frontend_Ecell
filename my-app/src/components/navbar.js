import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../Assets/Logo.png'
export default function Navbar () {
  return (
    <nav className="navbar navbar-expand-lg" id="navbar">
    <div className="container">
        <a className="navbar-brand" href="index.html">
            <i className="bi-back"></i>
            <span className='text-white'><img src={Logo} width="50px" height="50px"/></span>
        </a>

        <div className="d-lg-none ms-auto me-4">
            <a href="#top" className="navbar-icon bi-person smoothscroll"></a>
        </div>


        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-lg-5 me-lg-auto" id='ul'>
                <li className="nav-item">
                    <Link to="/" style={{textDecoration:"none"}}><a className="nav-link click-scroll text-white">Home</a></Link>
                </li>

                <li className="nav-item">
                    <Link to="/Events" style={{textDecoration:"none"}}><a className="nav-link click-scroll text-white" >Events</a></Link>
                </li>

                <li className="nav-item">
                    <Link to="/Innovations" style={{textDecoration:"none"}}><a className="nav-link click-scroll text-white" >Innovations</a></Link>
                </li>

                <li className="nav-item">
                    <Link to="/Team" style={{textDecoration:"none"}}><a className="nav-link click-scroll text-white" >Team</a></Link>
                </li>

                <li className="nav-item">
                    <Link to="/Blogs" style={{textDecoration:"none"}}><a className="nav-link click-scroll text-white" >Blogs</a></Link>
                </li>
            </ul>

            <div className="d-none d-lg-block">
                <a href="#top" className="navbar-icon bi-person smoothscroll"></a>
            </div>
        </div>
    </div>
</nav>
  );
}
import './Navbar.css';
export default function Navbar () {
  return (
    <nav className="navbar navbar-expand-lg" id="navbar">
    <div className="container">
        <a className="navbar-brand" href="index.html">
            <i className="bi-back"></i>
            <span className='text-white'>Topic</span>
        </a>

        <div className="d-lg-none ms-auto me-4">
            <a href="#top" className="navbar-icon bi-person smoothscroll"></a>
        </div>


        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-lg-5 me-lg-auto" id='ul'>
                <li className="nav-item">
                    <a className="nav-link click-scroll text-white" href="#section_1">Home</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link click-scroll text-white" href="#section_2">Browse Topics</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link click-scroll text-white" href="#section_3">How it works</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link click-scroll text-white" href="#section_4">FAQs</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link click-scroll text-white" href="#section_5">Contact</a>
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
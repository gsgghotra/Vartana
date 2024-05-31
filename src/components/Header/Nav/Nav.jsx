import '../../../assets/css/material-dashboard.css'
import { showSlider } from '../../../assets/js/slider';
import Example from '../../Modals/Modal';
// Custom css
import './Nav.css'

function MainNav() {
    return (
        <>
            <nav className="navbar navbar-main navbar-expand-lg px-0 shadow-none" id="navbarBlur" data-scroll="true">
                {/* <div className="container-fluid py-1 px-3 leftside-nav">
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                        <li className="breadcrumb-item text-sm">
                            <a className="opacity-5 white-text">Home</a>
                        </li>
                        <li className="breadcrumb-item text-sm white-text active" aria-current="page">Dashboard</li>
                    </ol>
                    </nav>
                </div> */}

                <div className="navbar-collapse top-right-nav" id="navbar">
                    <ul className="navbar-nav justify-content-start" style={{flexDirection:'row'}}>
                        <li className="nav-item burgermenu d-xl-none ps-3 white-text d-flex align-items-center">
                            <a onClick={showSlider} className="nav-link text-body p-0" id="iconNavbarSidenav">
                            <div className="sidenav-toggler-inner">
                                <i className="sidenav-toggler-line"></i>
                                <i className="sidenav-toggler-line"></i>
                                <i className="sidenav-toggler-line"></i>
                            </div>
                            </a>
                        </li>

                        {/* Signin */}
                        <li className="nav-item d-flex ps-2 align-items-center">
                            <a className="nav-link black-text font-weight-bold px-0">
                            <i className="fa fa-user me-sm-1"></i>
                            <span className="d-sm-inline black-text d-none">Sign In</span>
                            </a>
                        </li>

                        <Example />

                        {/* Settings */}
                        <li className="nav-item px-3 d-flex align-items-center black-text">
                            <a className="nav-link text-body p-0">
                            <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer black-text"></i>
                            </a>
                        </li>

                    </ul>
            </div>
            </nav>
        </>
    );
}

export default MainNav;
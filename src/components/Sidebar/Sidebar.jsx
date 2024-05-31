import { NavLink } from 'react-router-dom';
import '../../assets/css/material-dashboard.css';
import brandIcon from '../../assets/images/vartanalogo.svg'
import { closeNav } from '../../assets/js/slider';
import { useState } from 'react';
import Example from '../Modals/Modal';

const Sidebar =() => {

    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    return(
        <div className="g-sidenav-show bg-gray-200">
            <aside className="sidenav navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3  bg-gradient-dark" id="sidenav-main">
                <div className="sidenav-header">
                    <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                <a className="navbar-brand m-0" target="_blank">
                    <img src={brandIcon} className="navbar-brand-img h-100" alt="main_logo" />
                    <span className="ms-1 font-weight-bold text-white">Vartana</span>
                    <i id="nav-close" 
                    className="material-icons opacity-10 close-btn" 
                    style={{position: 'absolute', color: 'Silver', right: '25px', visibility:'hidden' }}
                    onClick={closeNav}>close</i>
                </a>
                </div>
                <hr className="horizontal light mt-0 mb-2" />

                {/* Navigations */}
                <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className={`nav-link text-white no-decoration ${({ isActive }) => (isActive ? "custom-active" : "none")}`} end>
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                            <i className="material-icons opacity-10">dashboard</i>
                            </div>
                                <span className="nav-link-text ms-1">Dashboard</span>
                        </NavLink>
                    </li>

                    {/* Second Tab */}
                    <li className="nav-item mt-3">
                    <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Supervision</h6>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/logs" className={`nav-link text-white no-decoration ${({ isActive }) => (isActive ? "custom-active" : "none")}`} end>

                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                            <i className="material-icons opacity-10">inventory</i>
                            </div>
                            <span className="nav-link-text ms-1 no-decoration">Logs</span>
                        </NavLink>
                    </li>
                </ul>
                </div>

                {/* Bottom buttons */}
                <div className="sidenav-footer position-absolute w-100 bottom-0 ">
                <div className="mx-3">
                    <a className="btn white-text custom-outline mt-4 w-100" type="button">Timeline</a>
                    <a className="btn white-text custom-active w-100" onClick={openModal} type="button">Add</a>
                </div>
                </div>
            </aside>
                    {/* Modal component */}
        <Example show={modalVisible} handleClose={closeModal} />
        </div>
    )
    
}

export default Sidebar;
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Navbar = () => {

    return (
        <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-forestgreen">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">PMA</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/users">Pelanggan</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/receipts">Peminjaman</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Header/>
    </div>
    )
}

export default Navbar
import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import { useCurrency } from "../../context/CurrencyContext"; // use custom hook

const Navbar = ({ cartCount = 0 }) => {
    const { currency, setCurrency, loading } = useCurrency();

    return (
        <nav className="navbar navbar-expand-lg bg-dark fixed-top" data-bs-theme="dark">
            <div className="container-fluid">

                {/* Brand */}
                <Link className="navbar-brand" to="/">ShoeSea</Link>

                {/* Mobile Toggler */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Collapse */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* Left side links */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/cart">Cart ({cartCount})</Link></li>
                    </ul>

                    {/* Search Bar */}
                    <form className="d-flex me-3" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search Products" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                    {/* Currency Selector */}
                    <div className="d-flex align-items-center text-light">
                        <label htmlFor="currencySelect" className="me-2 small mb-0">Currency:</label>
                        {loading ? (
                            <span className="text-light small">Loading...</span>
                        ) : (
                            <select id="currencySelect" value={currency} 
                            // event handler:. onChange -> using to set state of currency
                            onChange={(e) => setCurrency(e.target.value)}
                                className="form-select form-select-sm bg-dark text-light border-light w-auto mt-2"
                                aria-label="Cureency selector">

                                {/* Using mapping to build dynamic selection list for currency */}
                                {["USD", "EUR", "INR", "GBP", "JPY"].map((code) => (
                                    <option key={code} value={code}> {code} </option>
                                ))}
                            </select>
                        )}
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
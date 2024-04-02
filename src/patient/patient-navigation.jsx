import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

export default function PatientNavigation() {
    // Initialize state for logged-in status
    const [isLoggedIn, setIsLoggedIn] = useState(!!window.sessionStorage.getItem("patientId"));
    useEffect(() => {
        setIsLoggedIn(!!window.sessionStorage.getItem("patientId"));
    },[isLoggedIn]);
    return (
        <>
            <div id="sidebar">
                <h1>Patient Appointment Portal</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="">Home</Link>
                        </li>
                        <li>
                            <Link to="doctors">Doctors</Link>
                        </li>
                        <li>
                            <Link to="appointments">Appointments</Link>
                        </li>
                        <li>
                            {isLoggedIn ? (<Link to="logout">Log out</Link>) : (<Link to="login">Log in</Link>)}
                        </li>
                        <li>
                            <Link to="reviews">doc reviews</Link>
                        </li>
                        <li>
                            <Link to="register">Register</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}

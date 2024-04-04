import { Link, Outlet } from "react-router-dom";

export default function DocNavigation({ loggedIn, username, setLoggedIn, setUsername }) {
    const logoutUser = () => {
        sessionStorage.removeItem('doctorId');
        setLoggedIn(false);
        setUsername('');
    };

    if (!sessionStorage.getItem('doctorId')) {
        loggedIn = false;
    } else {
        loggedIn = true;
        username = sessionStorage.getItem('doctorId');
    }

    return (
        <>
            <div id="sidebar">
                <h1>Doctor Appointment Portal</h1>
                <nav>
                    <ul>
                        <li>
                            <span><b>Hi {loggedIn?(window.sessionStorage.getItem("doctorName")):('Doctor. Log in!')} </b></span>
                        </li>
                        <li>
                            <Link to="/doctor">Home</Link>
                        </li>
                        <li>
                            <Link to="/doctor/appointments">Appointments</Link>
                        </li>
                        {loggedIn ? (
                            <>
                                
                                <li>
                                    <Link to="/doctor" onClick={logoutUser}>Log out</Link>
                                </li>
                            </>
                        ) : (
                            <li>
                                <Link to="/doctor/login">Log in</Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}
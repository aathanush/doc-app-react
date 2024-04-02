import { Link, Outlet } from "react-router-dom";

export default function PatientNavigation({ loggedIn, username, setLoggedIn, setUsername }) {
    const reloadPage = () => {
        window.location.reload();
    };
    const logoutUser = () => {
        sessionStorage.removeItem('patientId');
        setLoggedIn(false);
        setUsername('');
    };

    if (!sessionStorage.getItem('patientId')) {
        loggedIn = false;
    } else {
        loggedIn = true;
        username = sessionStorage.getItem('patientId');
    }
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
                            <Link to="reviews">doc reviews</Link>
                        </li>
                        {loggedIn ? (
                            <>
                                <li>
                                    <span>{username}</span>
                                </li>
                                <li>
                                    <Link to="/patient" onClick={logoutUser}>Log out</Link>
                                </li>
                            </>
                        ) : (
                            <>
                            <li>
                                <Link to="/patient/login">Log in</Link>
                            </li>
                            <li>
                            <Link to="register">Register</Link>
                        </li>
                        </>
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

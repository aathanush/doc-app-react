import { Link,Outlet } from "react-router-dom";
export default function PatientNavigation() {
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
<Link to="login">Log in</Link>
</li>
<li>
<Link to="reviews">doc reviews</Link>
</li>
<li>
<Link to="logout">Log out</Link>
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
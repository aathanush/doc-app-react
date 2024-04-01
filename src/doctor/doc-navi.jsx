import { Link,Outlet } from "react-router-dom";
export default function DocNavigation() {
return (
<>
<div id="sidebar">
<h1>Doctor Appointment Portal</h1>
<nav>
<ul>
<li>
<Link to="/doctor">Home</Link>
</li>
<li>
<Link to="/doctor/appointments">Appointments</Link>
</li>
<li>
<Link to="/doctor/login">Log in</Link>
</li>
<li>
<Link to="/doctor">Log out</Link>
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

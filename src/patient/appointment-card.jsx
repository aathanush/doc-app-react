import { Link, Outlet } from "react-router-dom";
import axios from "axios";
export default function AppointmentCard( {obj} ) {
    return (
        <div className="appointment-card">
            <div className="appointment-details">
                <img src="./src/assets/appointment.jpg" alt="" />
                <h3>{obj.date}</h3>
                <p>{obj.timing}</p>
                <p>{obj.description}</p>
                {obj.status ? (obj.payment.successful === false? (<p className="not-confirmed">Confirmed but not paid</p>):(<p className="confirmed">Confirmed and paid</p>)) : (<p className="not-confirmed">Not Confirmed</p>)}
                {obj.status ? (obj.payment.successful === false ? (<button> Perform Payment</button>) : (<Link to="/patient/review"><button >Post Review</button></Link>)) : (<p></p>)}

            </div>
        </div>

    );
}
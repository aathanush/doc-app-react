import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function AppointmentCard({ obj }) {
    const handleClick = async () => {
        axios.post(`http://localhost:8090/patient/perform_payment/${obj.id}`, "UPI")
            .then(() => toast("Payment done successfully"))
            .catch((e) => toast(e));
    };

    return (
        <div className="appointment-card">
            <ToastContainer/>
            <div className="appointment-details">
                <img src="./src/assets/appointment.jpg" alt="" />
                <h3>{obj.date}</h3>
                <p>{obj.timing}</p>
                <p>{obj.description}</p>
                {obj.status ? (
                    obj.payment.successful === false ? (
                        <p className="not-confirmed">Confirmed but not paid</p>
                    ) : (
                        <p className="confirmed">Confirmed and paid</p>
                    )
                ) : (
                    <p className="not-confirmed">Not Confirmed</p>
                )}
                {obj.status ? (
                    obj.payment.successful === false ? (
                        <button onClick={handleClick}>Perform Payment</button>
                    ) : (
                        <Link to={`/patient/review/${obj.id}`}>
                            <button>Post Review</button>
                        </Link>
                    )
                ) : (
                    <p></p>
                )}
            </div>
        </div>
    );
}

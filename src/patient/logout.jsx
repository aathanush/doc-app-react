import { Navigate } from "react-router-dom";
import "../index.css";

export default function Logout( {obj} ) {
    window.sessionStorage.removeItem("patientId");
    return (
        <div>
            <Navigate to="/patient/login" />
        </div>
    );
}
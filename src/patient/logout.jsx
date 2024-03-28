import { Navigate } from "react-router-dom";

export default function Logout( {obj} ) {
    window.sessionStorage.removeItem("patientId");
    return (
        <div>
            <Navigate to="/patient/login" />
        </div>
    );
}
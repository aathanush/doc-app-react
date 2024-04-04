import { useNavigate } from "react-router-dom";
import "../index.css";

export default function DoctorCard( {obj} ) {
  const navigate=useNavigate();
    return (
        <div className="appointment-card">
          <div>
            <h3>{obj.name}</h3>
            <p>{obj.spec}</p>
            <button onClick={() => {navigate(`/patient/docdetails/${obj.docId}`);}}>Make Appointment</button>
          </div>
      </div>
  
    );
}
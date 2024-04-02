import { useNavigate } from "react-router-dom";
export default function DoctorCard( {obj} ) {
  const navigate=useNavigate();
    return (
        <div>
          <div>
            <h3>{obj.name}</h3>
            <p>{obj.spec}</p>
            <button onClick={() => {alert("Appointment created with " + obj.name + "!");}}>Make Appointment</button>
          </div>
      </div>
  
    );
}
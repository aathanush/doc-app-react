
export default function AppointmentCard( {obj} ) {
    return (
        <div className="appointment-card">
            <div className="appointment-details">
                <img src="./src/assets/appointment.jpg" alt="" />
                <h3>{obj.date}</h3>
                <p>{obj.timing}</p>
                <p>{obj.description}</p>
                {obj.status ? (<p className="confirmed">Confirmed</p>) : (<p className="not-confirmed">Not Confirmed</p>)}
            </div>
        </div>

    );
}
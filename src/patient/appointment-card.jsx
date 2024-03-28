export default function AppointmentCard( {obj} ) {
    return (
        <div>
            <div>
                <h3>{obj.date}</h3>
                <p>{obj.timing}</p>
                <p>{obj.description}</p>
                {obj.status ? <p style={{color: "green"}}>Confirmed</p> : <p style={{color: "red"}}>Not Confirmed</p>}
            </div>
        </div>
    );
}
import "./docapp.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function DocAppointment() {
    const [appointmentList, setAppointmentList] = useState([]);
    const [filteredAppointmentList, setFilteredAppointmentList] = useState([]);
    const [filterDate, setFilterDate] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8090/doctor/get_appointment/${sessionStorage.getItem('doctorId')}`)
            .then(response => {
                setAppointmentList(response.data);
                setFilteredAppointmentList(response.data);
            })
            .catch(error => console.error('Error fetching doctor appointments:', error));
    }, []);

    const filterResults = (date) => {
        try {
            const inputDate = new Date(date);
            if (isNaN(inputDate.getTime())) {
                console.log("Date not recognized");
                setFilteredAppointmentList(appointmentList);
            } else {
                const filtered = appointmentList.filter(appointment => {
                    if (appointment.date) {
                        const appointmentDate = new Date(appointment.date);
                        return (
                            appointmentDate.getDate() === inputDate.getDate() &&
                            appointmentDate.getMonth() === inputDate.getMonth() &&
                            appointmentDate.getFullYear() === inputDate.getFullYear()
                        );
                    }
                    return false;
                });
                setFilteredAppointmentList(filtered);
            }
        } catch (error) {
            console.error("Error filtering appointments:", error);
            setFilteredAppointmentList(appointmentList);
        }
    };

    const confirmAppointment = (id) => {
        const confirmData = {
            appointmentId: id,
            amount: 200
        };

        axios.post('http://localhost:8090/doctor/confirm_appointment', confirmData)
            .then(response => {
                console.log('Appointment confirmed:', response.data);
                window.location.reload();
            })
            .catch(error => {
                console.error('Error confirming appointment:', error);
            });
    };

    const cancelAppointment = (id) => {
        axios.post(`http://localhost:8090/doctor/cancel_appointment/${id}`, {})
            .then(response => {
                console.log('Appointment cancelled:', response.data);
                System.out.println(response.data);
                window.location.reload();
                
            })
            .catch(error => {
                console.error('Error cancelling appointment:', error);
            });
    };

    return (
        <>
            <section>
                <form>
                    <input type="date" placeholder="Filter by date" value={filterDate} onChange={(e) => setFilterDate(e.target.value)} />
                    <button className="primary" type="button" onClick={() => filterResults(filterDate)}>Search</button>
                </form>
            </section>
            <section className="results">
                <p>{filteredAppointmentList.length === 0 ? 'No appointments found' : null}</p>
                {filteredAppointmentList.map(appointment => (
                    <div key={appointment.id} className="appointment-card">
                        <div className="appointment-details">
                            <img src="./src/assets/appointment.jpg" alt="" />
                            <h3>{appointment.date}</h3>
                            <p>{appointment.date}</p>
                            <p>{appointment.timing}</p>
                            <p>{appointment.description}</p>
                            {appointment.status ? (
                                <button onClick={() => cancelAppointment(appointment.id)} className="not-booked">Cancel</button>
                            ) : (
                                <button onClick={() => confirmAppointment(appointment.id)} className="booked">Confirm</button>
                            )}
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}

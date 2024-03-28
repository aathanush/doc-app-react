import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppointmentCard from './appointment-card';

export default function PatientDoctorView() {
    const [appList, setappList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8090/patient/get_appointments/'+window.sessionStorage.getItem("patientId"));
                setappList(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {appList.map((appointment) => (
                <>
                <AppointmentCard obj={appointment} />
                </>
            ))}
        </div>
    );
}

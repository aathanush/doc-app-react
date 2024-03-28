import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DoctorCard from './doctor-card';

export default function PatientDoctorView() {
    const [docList, setDocList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8090/Doctor');
                setDocList(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {docList.map((doctor) => (
                <>
                <DoctorCard obj={doctor} />
                </>
            ))}
        </div>
    );
}

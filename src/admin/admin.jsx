import "./admin.css";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Admin() {    
    let [doctorName, setDoctorName] = useState("");
    let [specialization, setSpecialization] = useState("");
    let [doctors, setDoctors] = useState([]);

    // Replace these with your actual endpoints
    const createDoctorEndpoint = "http://localhost:8090/addDoctor";
    const getDoctorsEndpoint = "http://localhost:8090/Doctor";

    useEffect(() => {
        fetchDoctors();
    }, []);

    const handleCreateDoctor = (e) => {
        e.preventDefault();

        axios.post(createDoctorEndpoint, {
            name: doctorName,
            spec: specialization
        }).then(() => {
            alert("Doctor created successfully!");
            setDoctorName("");
            setSpecialization("");
            fetchDoctors(); // Refresh the list of doctors
        }).catch((error) => {
            alert("Failed to create doctor");
            console.error(error);
        });
    };

    const fetchDoctors = () => {
        axios.get(getDoctorsEndpoint)
            .then((response) => {
                setDoctors(response.data);
            })
            .catch((error) => {
                console.error("Failed to fetch doctors", error);
            });
    };

    return (
        <div className="admin-dashboard">
            <h2>Admin Dashboard</h2>
            <div className="create-doctor-form">
                <h3>Create New Doctor</h3>
                <form onSubmit={handleCreateDoctor}>
                    <input type="text" placeholder="Name" value={doctorName} onChange={(e) => setDoctorName(e.target.value)} />
                    <input type="text" placeholder="Specialization" value={specialization} onChange={(e) => setSpecialization(e.target.value)} />
                    <button type="submit">Create Doctor</button>
                </form>
            </div>
            <div className="doctors-list">
                <h3>Doctors List</h3>
                {doctors.length > 0 ? (
                    <ul>
                        {doctors.map((doctor, index) => (
                            <li key={index}>{doctor.name} - {doctor.spec}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No doctors found.</p>
                )}
            </div>
        </div>
    );
}
import React, { useState } from "react";
import {Route,Routes, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import {toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function DoctorDetails() {
    const today = new Date();
    today.setDate(today.getDate()+1);
    const formattedMinDate = today.toISOString().split("T")[0];

    const [date, setDate] = useState(""); 
    const [time, setTime] = useState(""); 
    const [description, setDescription] = useState(""); 
    const [doctor,setDoctor] = useState({});
    let { id } = useParams();
  
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload
        const response = await axios.post('http://localhost:8090/appointment',{patientId: window.sessionStorage.getItem("patientId"),doctorId: id,description: description,date: date,timing: time,status: false}).then(toast("Appointment created successfully")).catch((e)=>{alert(e);});
      
      };
      
  useEffect(() => {
    const fetchData = async () => {
        try {

            const response = await axios.get('http://localhost:8090/Doctor/'+id);
            setDoctor(response.data);          
            
        } catch (error) {

            alert('Error fetching data of doctor:', error);
        }
    };

    fetchData();
});


  return (
    <div>
        <ToastContainer/>
      <h1 className="docdetails" >Name: {doctor.name}</h1>
      <p  className="docdetails" >Specialization: {doctor.spec}</p>
      <p  className="docdetails" >Rating: {doctor.rating}/5</p>
      <h2>Book an appointment</h2>
      <p>Fill the details and we would get back to you shortly!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" min={formattedMinDate} value={date} onChange={(e) => setDate(e.target.value)} />

        <label htmlFor="time">Time:</label>
        <input type="time" id="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} />

        <label htmlFor="description">Description of disease:</label>
        <input type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />

        <button type="submit">Submit</button>
       </form>
    </div>
  );
}


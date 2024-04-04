import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppointmentCard from './appointment-card';
import ReactPaginate from 'react-paginate';
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai"; // icons form react-icons
import { IconContext } from "react-icons"; // for customizing icons
import { Navigate } from 'react-router-dom';
import "../index.css";

export default function PatientAppointmentView() {
    const [page, setPage] = useState(0); 
    const [appList, setappList] = useState([]);
    const [filterappList, setfilterappList] = useState([]);
    const n = 1; 


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8090/patient/get_appointments/'+window.sessionStorage.getItem("patientId"));
                setappList(response.data);
                setfilterappList(appList.filter((item, index) => {
                    return (index >= page * n) & (index < (page + 1) * n);
                  }));
              
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    });

    return (
        <>
        {window.sessionStorage.getItem("patientId") == null ? (<Navigate to="/patient/login" />):(<></> )}
        {filterappList.length === 0 ? (<p>No appointments found.</p>):(filterappList.map((appointment) => (  <AppointmentCard key={appointment.id} obj={appointment} /> )))}

        {filterappList.length === 0 ?<p></p>:
        <ReactPaginate
        className='pagination-container'
            previousLabel={<AiFillLeftCircle className='page-item left' />}
            nextLabel={<AiFillRightCircle className='page-item right'/>}
            breakLabel={'...'}
            pageCount={Math.ceil(appList.length / n)}
            marginPagesDisplayed={0}
            pageRangeDisplayed={0}
            onPageChange={(selected) => setPage(selected.selected)}
            containerClassName={'pagination'}
            activeClassName={'active'}
        />}
    </>

        
    );
}

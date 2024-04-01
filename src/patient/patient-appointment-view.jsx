import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppointmentCard from './appointment-card';
import ReactPaginate from 'react-paginate';
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai"; // icons form react-icons
import { IconContext } from "react-icons"; // for customizing icons

export default function PatientAppointmentView() {
    const [page, setPage] = useState(0); 
    const [appList, setappList] = useState([]);
    const [filterappList, setfilterappList] = useState([]);
    const n = 2; 


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
    }, [page]);

    return (
        <>
        
        {filterappList.length === 0 ? (<p>No appointments found. Please reload or try again after some time.</p>):(filterappList.map((appointment) => (  <AppointmentCard key={appointment.id} obj={appointment} /> )))}

        <ReactPaginate
        className='pagination-container'
            previousLabel={<AiFillLeftCircle className='page-item left' />}
            nextLabel={<AiFillRightCircle className='page-item right'/>}
            breakLabel={'...'}
            pageCount={Math.ceil(appList.length / n)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={(selected) => setPage(selected.selected)}
            containerClassName={'pagination'}
            activeClassName={'active'}
        />
    </>

        
    );
}

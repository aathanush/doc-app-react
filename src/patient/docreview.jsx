import "./docreview.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DoctorReviews() {
    const [doctorReviews, setDoctorReviews] = useState([]);
    const [filteredReviews, setFilteredReviews] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8090/review')
            .then(response => {
                setDoctorReviews(response.data);
                setFilteredReviews(response.data);
            })
            .catch(error => console.error('Error fetching doctor reviews:', error));
    }, []);

    const searchDoctor = () => {
        const query = searchQuery.toLowerCase().trim();
        if (query === '') {
            setFilteredReviews(doctorReviews);
        } else {
            const filtered = doctorReviews.filter(review =>
                review.doctor.name.toLowerCase().includes(query)
            );
            setFilteredReviews(filtered);
        }
    };

    useEffect(() => {
        searchDoctor();
    }, [searchQuery]);

    return (
        <>
            <input type="text" placeholder="Search Doctor" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <div>
                {filteredReviews.length > 0 ? (
                    filteredReviews.map(review => (
                        <div key={review.id}>
                            <h3>Doctor Name: {review.doctor.name}</h3>
                            <p>Patient Name: {review.patient.name}</p>
                            <p>Rating: {review.rating}</p>
                            <p>Review: {review.reviewText}</p>
                            <hr />
                        </div>
                    ))
                ) : (
                    <p>No matching doctor found.</p>
                )}
            </div>
        </>
    );
}
import "./post-review.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function PostReview() {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const { id } = useParams();
  const [doctorId, setDoctorId] = useState(null);

  useEffect(() => {
    // Fetch appointment details to get the doctor ID
    axios.get(`http://localhost:8090/appointment/${id}`)
      .then((response) => {
        const appointmentData = response.data;
        setDoctorId(appointmentData.doctorId);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]); // Fetch appointment details when id changes

  const rate = (rating) => {
    setRating(rating);
  };

  const submitReview = () => {
    console.log("Appointment ID:", id);
    console.log("Doctor ID:", doctorId);

    const reviewData = {
      doctor_ID: doctorId, // Use the doctorId extracted from appointment details
      patient_ID: Number(sessionStorage.getItem('patientId')),
      doctorReview: {
        rating: rating,
        reviewText: reviewText
      }
    };

    console.log(reviewData);

    axios.post(`http://localhost:8090/AddDoctorReview/${Number(id)}`, reviewData)
      .then((response) => {
        console.log(response);
        alert("Review confirmed");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to submit review");
      });
    
    console.log('Appointment ID:', id);
    console.log('Doctor ID:', doctorId);
    console.log('Rating:', rating);
    console.log('Review:', reviewText);
  };

  return (
    <div className="review">
      <div className="rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} onClick={() => rate(star)}>☆</span>
        ))}
      </div>
      {rating > 0 && <p className="rating">You have rated {rating} star(s) out of 5</p>}
      <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} placeholder="Write your review here..."></textarea>
      <button onClick={submitReview}>Submit</button>
    </div>
  );
}

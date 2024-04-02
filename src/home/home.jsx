import "./home.css";
import { Link } from 'react-router-dom';
export default function HomeComponent() {
    return (<>
    <div class="container">
    <div class="half">
      <h2>For Doctors</h2>
      <article>
        <p>Welcome to our Doctor Portal! As a healthcare professional, your dedication to patient care is our top priority. Our platform is designed to streamline your practice, connect you with patients, and provide the support you need to deliver exceptional medical services. Easily book and alter appointments with just a few clicks!</p>
       
        <h3>Why Choose Us?</h3>
        <ul>
          <li>Grow your practice and reach more patients.</li>
          <li>Manage appointments with flexibility and ease.</li>
          <li>Connect with a professional network and collaborate on patient care.</li>
          <li>Easy appointment management.</li>
        </ul>
        <Link to="/doctor" className="button" class="btn">Visit Doctor Portal</Link>
      </article>
    </div>
    
    <div class="half">
      <h2>For Patients</h2>
      <article>
        <p>At our organization, we believe that your health is your most valuable asset. That’s why we’ve created a seamless platform to help you manage your doctor appointments with ease. Whether you need routine check-ups, specialized consultations, or urgent medical attention, we've got you covered. So join us today.</p>
        <h3>Why Choose Us?</h3>
        <ul>
          <li>Conveniently book appointments online at your convenience.</li>
          <li>Personalized care to find the right doctor for your needs.</li>
          <li>Access top-quality healthcare services and support.</li>
          <li>Easy appointment handling.</li>
        </ul>
        <Link to="/patient" className="button" class="btn">Visit Patient Portal</Link>
      </article>
    </div>
  </div>
  
    </>);
    }
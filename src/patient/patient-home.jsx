import "./pathome.css";
export default function PatientHome() {
    return (
        <>
            <article>
                <h1 className="listing-heading"> Patient Portal</h1>
                
                <p className="listing">At our organization, we believe that your health is your most valuable asset. That’s why we’ve created a seamless and efficient platform to help you manage your doctor appointments with ease. Whether you’re seeking routine check-ups, specialized consultations, or urgent medical attention, we’ve got you covered.</p>
                <br />
                <h2 style={{ color: "var(--primary-color)" }}> Why Choose Us?</h2>
                <br />
                <ol>
                    <li> <b>Convenience:</b> Say goodbye to long waiting times and endless phone calls. With DoctorConnect, you can book appointments from the comfort of your home, office, or anywhere with an internet connection. </li>
                    <br />
                    <li> <b>Flexibility:</b> We understand that you may not always have access to a doctor. Our platform allows you to schedule appointments with a doctor of your choice, anytime, anywhere. </li>
                    <br />
                    <li><b>Personalized Experience:</b> We understand that every patient is unique. Our platform lets you filter doctors based on specialty. Find the right match for your needs.</li>
                    <br />
                    <li><b>Quality Support:</b> We provide a 24/7 customer support. Our team is always available to answer any questions you may have. </li>
                    <br />
                    <li><b>Trustworthiness:</b> We take the security of your personal information seriously. Our platform is designed to be user-friendly and secure.</li>
                </ol>
                <br />
                <h2 style={{ color: "var(--primary-color)" }}> Get started today!</h2>
                <br />
                <p>
                    Ready to take control of your health? Visit our website to start your journey towards better healthcare. Remember, your health matters. Let's connect you with the right doctor, right now.
                </p>
            </article>
        </>
    );
}

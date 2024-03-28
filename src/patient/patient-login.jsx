import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
export default function PatientLogin() {    
    let [name, setName] = useState("");
let [password, setPassword] = useState("");

// useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const response = await axios.get('http://localhost:8090/Doctor');
//             setDocList(response.data);
//             console.log(response.data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };


const handleSubmit = (e) => {
    console.log(name);
    console.log(password);
    axios.post("http://localhost:8090/patient/login", {
        email: name,
        password: password
    }).then((response) => {
        window.sessionStorage.setItem("patientId", response.data.patientId);
        return (
            <Navigate to="/patient/"/>
        )
    }).catch((error) => {
        alert("Invalid Credentials");
    })
};
return (
    <>
        <div className="login-container">
        <h3 align="center"> Patient Login:</h3>
        <form onSubmit={handleSubmit} align="center">
            <p align="center">E-mail ID:
                <input type="email" value={name} onChange={(e) => setName(e.target.value)}></input>
            </p>
            <p align="center">Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </p>

            <button type="submit" align="center">Submit</button>
        </form>
        </div>

    </>
);
}
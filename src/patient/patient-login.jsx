import { useState } from "react";
import axios from "axios";
import { Navigate,useNavigate } from "react-router-dom";
export default function PatientLogin() {    
    let [name, setName] = useState("");
let [password, setPassword] = useState("");
const navigate=useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(password);
    axios.post("http://localhost:8090/patient/login", {
        email: name,
        password: password
    }).then((response) => {
        window.sessionStorage.setItem("patientId", response.data.patientId);
        navigate("/patient/");
    }).catch((error) => {
        alert("Invalid Credentials");
    })
};
return (
    <>
    
        <div>
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
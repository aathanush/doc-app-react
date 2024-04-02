import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./doc-login.css";
export default function DocLogin() {    
    let [name, setname] = useState("");
    let [spec, setspec] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8090/doctor/login", {
            name: name,
            spec: spec
        }).then((response) => {
            window.sessionStorage.setItem("doctorId", response.data.docId);
            navigate("/doctor");
            window.location.reload();
        }).catch((error) => {
            alert("Invalid Credentials");
        });
    };

    return (
        <>
            <div>
                <h3 align="center">Doctor Login:</h3>
                <form onSubmit={handleSubmit} align="center">
                    <p align="center">Name:
                        <input type="text" value={name} onChange={(e) => setname(e.target.value)}></input>
                    </p>
                    <p align="center">Spec:
                        <input type="text" value={spec} onChange={(e) => setspec(e.target.value)}></input>
                    </p>

                    <button type="submit" align="center">Submit</button>
                </form>
            </div>
        </>
    );
}
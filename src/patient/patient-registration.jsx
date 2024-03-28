import { useState } from "react";
import axios from "axios";
export default function PatientRegistration() {
    let [name, setName] = useState("");
let [password, setPassword] = useState("");
let [age, setAge] = useState(0);
let [gender, setGender] = useState("");
let [email, setEmail] = useState("");

const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    axios.post("http://localhost:8090/patient/create_account", {
        "email": email, // Use 'email' instead of 'name'
        "password": password,
        "age": age,
        "gender": gender,
        "name": name
    })
    .then((response) => {
        console.log(response.data);
        alert("Patient Registration Successful");
    })
    .catch((error) => {
        console.log({
            "email": email,
            password: password,
            age: age,
            gender: gender,
            name: name
        }); // Log the error for debugging
        alert("Invalid Credentials"); // Show an error message to the user
    });
};

return (
    <>
        <div>
        <h3 align="center"> Patient Registration:</h3>
        <form onSubmit={handleSubmit} align="center">
            <p align="center">Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
            </p>
            <p align="center">E-mail ID:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </p>
            <p align="center">Age
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)}></input>
            </p>
            <p align="center">Gender
                <input type="text" value={gender} onChange={(e) => setGender(e.target.value)}></input>
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
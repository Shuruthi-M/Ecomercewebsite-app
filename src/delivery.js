import React, { useState } from 'react';
import axios from 'axios';
import './delivery.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Delivery = () => {
    const [name, setName] = useState("");
    const [mobileno, setMobileno] = useState("");
    const [houseno, setHouseno] = useState("");
    const [area, setArea] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");

    const validation = (e) => {
        e.preventDefault(); 

        const URL = "http://localhost:80/app/offer.php";
        let delivery = new FormData();
        delivery.append('name', name);
        delivery.append('mobileno', mobileno);
        delivery.append('houseno', houseno);
        delivery.append('area', area);
        delivery.append('state', state);
        delivery.append('city', city);
        delivery.append('pincode', pincode);
        axios.post(URL, delivery)
        .then(response => {
            toast.success(response.data);
            setName("");
            setMobileno("");
            setHouseno("");
            setArea("");
            setState("");
            setCity("");
            setPincode("");
        })
        .catch(error => toast.error(error));
    };

    return (
        <div className="main">
            <ToastContainer /> 
            <div className='spark'>
                <img src="/applogo.png" className='img' alt="Logo" />
                <h1>SparkTrendzon</h1>
            </div>
          
            <form className='deliverydata' onSubmit={validation}>
                <h1>Order Form</h1>
                <label>Name:</label>
                <input type="text" className='deldata' value={name} onChange={(e) => setName(e.target.value)} required />
                <label>Mobile No:</label>
                <input type="tel" className='deldata' value={mobileno} onChange={(e) => setMobileno(e.target.value)} required />
                <label>House No:</label>
                <input type="text" className='deldata' value={houseno} onChange={(e) => setHouseno(e.target.value)} required />
                <label>Area:</label>
                <input type="text" className='deldata' value={area} onChange={(e) => setArea(e.target.value)} required />
                <label>State:</label>
                <input type="text" className='deldata' value={state} onChange={(e) => setState(e.target.value)} required />
                <label>City:</label>
                <input type="text" className='deldata' value={city} onChange={(e) => setCity(e.target.value)} required />
                <label>Pincode:</label>
                <input type="text" className='deldata' pattern="\d{5,6}" value={pincode} onChange={(e) => setPincode(e.target.value)} required />
                <button id='buttonsub' type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Delivery;

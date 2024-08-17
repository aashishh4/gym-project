import React, { useState } from 'react';
import './Join.css';

const Join = () => {
    const [email, setEmail] = useState("");

    const handleForm = (e) => {
        e.preventDefault(); 
        console.log(email); 
        setEmail(""); 
    }

    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className="stroke-text">READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className="stroke-text">WITH US?</span>
                </div>
            </div>
            <div className="right-j">
                <form onSubmit={handleForm} className="email-container">
                    <input 
                        type="email" 
                        placeholder="Enter your email address"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <button className="btn btn-j" type="submit">
                        Join Now
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Join;

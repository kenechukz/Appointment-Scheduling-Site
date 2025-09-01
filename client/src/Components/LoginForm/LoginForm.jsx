import React from "react";
import App from "../../App";
import './LoginForm.css'
import { FaUser, FaKey } from "react-icons/fa";


const LoginForm  = () => {
    return (

        <div className="wrapper">

            <form action="">
                <h1>Login</h1>

                <div className="input-container">
                    <input type="text" placeholder="Username" required/>
                    <FaUser className="icon" />
                </div>
                <div className="input-container">
                    <input type="password" placeholder="Password" required/>
                    <FaKey className="icon" />
                </div>
                <div className="remember-me">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="">Forgot password?</a>
                </div>
                <button>Login</button>
                <div className="register-link">
                    <p>Don't have an account? <a href="">Register</a></p>
                </div>


            </form>
        
        
        </div>
        
    );


};

export default LoginForm;
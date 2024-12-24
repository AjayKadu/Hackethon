
import React, { useState } from 'react';
import axios from 'axios';
import './form.css';

function Form() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        mobile: '',
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:4444/user/register', {
            uname: formData.username,
            email: formData.email,
            password: formData.password,
            mobile: formData.mobile,
        }).then((response) => {
            setSuccessMessage('Registration successful!');
            setErrorMessage('');
            setFormData({
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                mobile: '',
            });
        });
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Registration Form</h2>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="form-label">Username:</label>
                    <input
                        className="form-input"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Enter your username"
                        required
                        minLength="4"
                    />
                </div>
                <div>
                    <label className="form-label">Email:</label>
                    <input
                        className="form-input"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div>
                    <label className="form-label">Password:</label>
                    <input
                        className="form-input"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                        minLength="8"
                    />
                </div>
                <div>
                    <label className="form-label">Confirm Password:</label>
                    <input
                        className="form-input"
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Re-enter your password"
                        required
                    />
                </div>
                <div>
                    <label className="form-label">Mobile:</label>
                    <input
                        className="form-input"
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Enter your mobile number"
                        pattern="^\d{10}$"
                        title="Mobile number must be 10 digits"
                    />
                </div>


<button className="submit-button" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;
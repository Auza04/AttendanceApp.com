import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/main.css';
import CS from '../assets/CSlogo.png';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize navigate

    const handleLogin = (event) => {
        event.preventDefault();
        if (username === 'admin' && password === 'admin') {
            navigate('/admin'); // Use navigate for redirection
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <>
            <div className="row">
                <div className="col-12 p-5" style={{ textAlign: "center", marginTop: "50px" }}>
                    <img src={CS} alt="" style={{ marginTop: "100px", width: '10rem' }} />
                </div>
            </div>

            <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '8rem', textAlign: 'center' }}>
                <div className="col-10">
                    <div className="card" style={{ height: '45rem', borderRadius: '2rem', boxShadow: '6px 6px 5px rgba(1, 19 ,225 ,0.6 )' }}>
                        <div className="card-body">
                            <div className="card-title">
                                <h1 style={{ fontWeight: 'bold', marginTop: '3rem' }}>Log in</h1>
                            </div>
                            <form onSubmit={handleLogin} style={{ marginTop: '8rem' }}>
                                <div className="form-group mb-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Username" 
                                        id="username" 
                                        value={username} 
                                        onChange={(e) => setUsername(e.target.value)}
                                        style={{ borderRadius: '0.8rem', padding: '1rem', width: '27rem'}} 
                                    />
                                </div>

                                <div className="form-group mb-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        placeholder="Password" 
                                        id="password" 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)}
                                        style={{ borderRadius: '0.8rem', padding: '0.75rem', width: '27rem' }} 
                                    />
                                </div>
                                
                                {error && <div className="alert alert-danger">{error}</div>}

                                <button 
                                    type="submit" 
                                    className="btn btn-primary" 
                                    style={{ width: '20rem', padding: '0.75rem', borderRadius: '1rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                                    Log in
                                </button>
                            </form>

                            <div className="card-text" style={{ fontSize: '1.5rem', marginBlock: '1rem' }}>
                                or
                            </div>

                            <button 
                                className="btn btn-light" 
                                style={{ width: '7rem', border: '2px solid #ccc', borderRadius: '0.8rem' }}>
                                Sign up
                            </button>

                            <br /><br />

                            <h1 style={{ opacity: '0.2', fontSize: '1rem', marginTop: '5rem' }}>Cubay Sermon Attendance App</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

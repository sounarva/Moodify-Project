import React, { useState } from 'react';
import { Link } from 'react-router';
import { Eye, EyeOff } from 'lucide-react';
import '../Styles/Register.scss';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = (e) => {
        e.preventDefault()
        console.log(username, email, password)
    }

    return (
        <div className="register-container">
            <div className="register-card">
                <div className="register-left">
                    <div className="overlay">
                        <h1>Create your Account</h1>
                        <p>Join the community of music lovers</p>
                    </div>
                </div>
                <div className="register-right">
                    <h2>Sign Up</h2>
                    <form className="register-form" onSubmit={handleRegister}>
                        <div className="input-group">
                            <label htmlFor="username">Username</label>
                            <input
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                type="text"
                                placeholder="Username"
                                required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email address</label>
                            <input
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Email address"
                                required />
                        </div>
                        <div className="input-group password-group">
                            <label htmlFor="password">Password</label>
                            <div className="input-with-icon">
                                <input
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    required
                                />
                                <button
                                    type="button"
                                    className="toggle-password"
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>
                        <button type="submit" className="signup-btn">Sign Up</button>
                    </form>
                    <div className="login-prompt">
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
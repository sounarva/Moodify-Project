import React, { useState } from 'react';
import { Link } from 'react-router';
import { Eye, EyeOff } from 'lucide-react';
import '../Styles/Login.scss';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login attempt:", identifier, password);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-left">
          <div className="login-header">
            <h2>Login</h2>
            <p>Enter your account details</p>
          </div>
          <form className="login-form" onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="identifier">Username / Email ID</label>
              <input
                id="identifier"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                type="text"
                placeholder="Username or email"
                required
              />
            </div>
            <div className="input-group password-group">
              <label htmlFor="password">Password</label>
              <div className="input-with-icon">
                <input
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
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
            <button type="submit" className="login-btn">Login</button>
          </form>
          <div className="register-prompt">
            <p>Don't have an account? <Link to="/register">Sign up</Link></p>
          </div>
        </div>
        <div className="login-right">
          <div className="overlay">
            <h1>Welcome back to Moodify</h1>
            <p>Login to access your personalized mood-based playlists</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
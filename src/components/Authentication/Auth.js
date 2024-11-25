import React, { useContext, useState } from 'react';
import './Auth.css';
import { AuthContext } from './AuthContext';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Sign Up
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {token,setToken,setLoggedIn}=useContext(AuthContext);

  //function for signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = 
        { 
          "email":email,
          "password":password,
          returnSecureToken: true
        };
    if (isLogin) {
      const urlLogin="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAIozOpaSH_7yg2mrsMEjxoQBjx3WUcPDA" 
      try {
        const res = await fetch(urlLogin, {
          method: "POST",
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
        if (!res.ok) {
          throw new Error("Failed to Login");
        }
        const data = await res.json();
        if(res.idToken!=""){
          setToken(res.idToken);
          setLoggedIn(true);
          console.log(data);
        }
        
      }
      catch (er) {
        alert(er.message);
      }
    } else {
      if (password !== confirmPassword) {
        alert('Bossdk Password sahi se bhar!');
        return;
      }
      else {
        const url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAIozOpaSH_7yg2mrsMEjxoQBjx3WUcPDA"
        try {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
          if (!response.ok) {
            throw new Error("Failed to sign up");
          }
          const data = await response.json();
          console.log(data);
        }
        catch (er) {
          alert(er);
        }
      
      }
    }
  }

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">{isLogin ? 'Login' : 'Sign Up'}</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>
        )}
        <button type="submit" className="login-button">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
        <p>
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <a href="#" onClick={toggleForm}>
                Sign Up
              </a>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <a href="#" onClick={toggleForm}>
                Login
              </a>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Auth;

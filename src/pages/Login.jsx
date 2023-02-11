import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo"> Lem's Chat App</span>
        <span className="title"> Sign In</span>
        <form>
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Your Password" />
          <button>Sign In</button>
        </form>
        <p>
          Dont have an Account? <Link to="/Register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

import React from 'react';
import img from '../img/profile.png';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, storage } from '../firebase';
import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const displayName = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const file = event.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, 'userChats', res.user.uid), {});
            navigate('/');
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(true);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo"> Lem's Chat App</span>
        <span className="title"> Register to Get Started</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Your Password" />
          <input style={{ display: 'none' }} type="file" id="file" />
          <label htmlFor="file">
            <img className="profile" src={img} alt="profile" />
            <span className="profile-text">Upload Profile</span>
          </label>
          <button disabled={loading}>Sign Up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          Have an Account? <Link to="/Login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

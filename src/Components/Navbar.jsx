import React, { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';
const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <span className="chat-logo"> Lem's Chat App</span>
      <div className="user">
        <img className="user-pic" src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button className="logout" onClick={() => signOut(auth)}>
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
